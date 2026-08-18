import { test } from '../fixtures/test-fixtures';
import { expect } from '@playwright/test';
import { routes } from '../config/routes';
import { ApiUtils } from '../utils/ApiUtils';
import { createEmployeeData, createApiEmployeeData } from '../test-data/factories/employee.factory';


test('add Employee', async ({ page, sideBar, pimPage }) => {
    const employee = createEmployeeData();

    await sideBar.goToDashboard(routes.dashboard);
    await expect(page).toHaveURL(/dashboard/);
    await sideBar.goToPIM();
    await expect(page).toHaveURL(/viewEmployeeList/);
    const addEmployeePage = await pimPage.goToAddEmployee();
    await expect(page).toHaveURL(/addEmployee/);
    await addEmployeePage.addEmployeeWithLogin(employee);
    await expect(addEmployeePage.getSuccessMessage()).toContainText(/Successfully Saved/);
});
test('search Employee', async ({ page, pimPage }) => {
    const employeeData = createApiEmployeeData();
    const apiUtils = new ApiUtils(page.request);
    const employee = await apiUtils.createEmployee(employeeData);
    console.log('Created employee:', employee);

    const employeeListPage = await pimPage.goToEmployeeList(routes.employeeList);
    await expect(page).toHaveURL(/viewEmployeeList/);
    console.log(employeeData.firstName)
    await employeeListPage.searchEmployee(employeeData.firstName);

});