import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';
import { SideBar } from '../pages/sideBar';

interface MyFixtures {
    loginPage: LoginPage;
    pimPage: PIMPage;
    sideBar: SideBar;
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    pimPage: async ({ page }, use) => {
        await use(new PIMPage(page));
    },
    sideBar: async ({ page }, use) => {
        await use(new SideBar(page));
    },
});