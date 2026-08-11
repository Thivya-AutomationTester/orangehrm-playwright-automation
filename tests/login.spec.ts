import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

test('OrangeHRM login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await expect(page).toHaveTitle(/OrangeHRM/);
  await loginPage.login(loginData.validUsername, loginData.validPassword);
  await expect(page).toHaveURL(/dashboard/);
});