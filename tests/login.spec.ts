import { test } from '../fixtures/test-fixtures';
import { expect } from '@playwright/test'
import { loginData } from '../test-data/login-data';

test.use({
  storageState: {
    cookies: [],
    origins: [],
  },
});
test('login with valid credentials', async ({ page, loginPage }) => {

  await loginPage.navigateToLoginPage();
  await expect(page).toHaveTitle(/OrangeHRM/)
  await loginPage.login(loginData.valid.username, loginData.valid.password);
  await expect(page).toHaveURL(/dashboard/);
});
for (const scenario of loginData.invalidScenarios) {
  test(`login fails with ${scenario.name}`, async ({ page, loginPage }) => {
    await loginPage.navigateToLoginPage();
    await expect(page).toHaveTitle(/OrangeHRM/)
    await loginPage.login(scenario.username, scenario.password);
    await expect(loginPage.getErrorMessage()).toBeVisible();
    await expect(loginPage.getErrorMessage()).toContainText('Invalid credentials');

  });
}