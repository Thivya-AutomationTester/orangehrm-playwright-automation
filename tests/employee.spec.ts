import { test } from '../fixtures/testFixtures';
import { EmployeePage } from '../pages/EmployeePage';
import * as helpers from '../utils/playwrightHelpers'

test.only('PIM Page validation', async ({ page, employeePage }) => {

    await employeePage.navigateToPIMPage();
    await helpers.assertURL(page, /viewEmployeeList/);
});