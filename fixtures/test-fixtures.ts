import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { EmployeePage } from '../pages/EmployeePage'


interface MyFixtures {
    loginPage: LoginPage,
    employeePage: EmployeePage
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    employeePage: async ({ page }, use) => {
        const employeePage = new EmployeePage(page);
        await use(employeePage);
    },
})
