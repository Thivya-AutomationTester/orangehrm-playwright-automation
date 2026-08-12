import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

test('OrangeHRM login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await expect(page).toHaveTitle(/OrangeHRM/);
  await loginPage.login(loginData.valid.username, loginData.valid.password);
  await expect(page).toHaveURL(/dashboard/);
});
for (const scenario of loginData.invalidScenarios) {
  test(`login fails with ${scenario.name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await expect(page).toHaveTitle(/OrangeHRM/);
    await loginPage.login(scenario.username, scenario.password);
    await expect(loginPage.getErrorMessage()).toBeVisible();
    await expect(loginPage.getErrorMessage()).toContainText('Invalid credentials');
  });
}