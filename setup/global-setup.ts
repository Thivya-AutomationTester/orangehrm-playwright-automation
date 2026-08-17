import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/login-data';
import { env } from '../config/env';
import { chromium, firefox, webkit, Browser } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export default async function globalSetup() {

    const browserName = env.browser.toLowerCase();

    const authDir = path.resolve('playwright/auth');

    if (!fs.existsSync(authDir)) {
        fs.mkdirSync(authDir, { recursive: true });
    }

    const authFile = path.join(authDir, `${browserName}.json`);

    let browser: Browser;

    switch (browserName) {
        case 'chromium':
            browser = await chromium.launch({ headless: false });
            break;

        case 'firefox':
            browser = await firefox.launch({ headless: false });
            break;

        case 'webkit':
            browser = await webkit.launch({ headless: false });
            break;

        default:
            throw new Error(
                `Unsupported browser: ${env.browser}. ` +
                `Use chromium, firefox, or webkit.`
            );
    }

    try {
        const context = await browser.newContext({
            baseURL: env.url,
        });

        const page = await context.newPage();
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login(loginData.valid.username, loginData.valid.password);
        await page.waitForURL(/dashboard/);
        await context.storageState({ path: authFile, });

    }
    finally {
        await browser.close();
    }
}