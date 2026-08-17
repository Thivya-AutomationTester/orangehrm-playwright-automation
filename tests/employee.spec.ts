import { test } from '../fixtures/test-fixtures';
import { expect } from '@playwright/test';
import { empDetails } from '../test-data/employee-testdata';


test.only('PIM Page validation', async ({ page, employeePage }) => {
    await employeePage.navigateToDashboardPage();
    await expect(page).toHaveURL(/dashboard/);
    await employeePage.navigateToPIMPage();
    await expect(page).toHaveURL(/viewEmployeeList/);
    await employeePage.navigateToAddEmployeePage();
    await expect(page).toHaveURL(/addEmployee/);
    await employeePage.addEmployeeWithLogin(empDetails);
    await expect(employeePage.getSuccessMessage()).toContainText(/Successfully Saved/);
    await employeePage.navigateToEmployeeList();
    await expect(page).toHaveURL(/viewEmployeeList/);

});