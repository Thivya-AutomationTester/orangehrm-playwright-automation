import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { EmployeePage } from '../pages/EmployeePage'
import { loginData } from '../test-data/loginData';
import * as helpers from '../utils/playwrightHelpers'

interface MyFixtures {
    loginPage: LoginPage;
    employeePage: EmployeePage
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    employeePage: async ({ page, loginPage }, use) => {
        await loginPage.navigateToLoginPage();
        await loginPage.login(loginData.valid.username, loginData.valid.password);
        await helpers.assertURL(page, /dashboard/);
        const employeePage = new EmployeePage(page);
        await use(employeePage);
    },
})
