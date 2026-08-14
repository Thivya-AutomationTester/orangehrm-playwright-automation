import { test } from '../fixtures/testFixtures';
import { loginData } from '../test-data/loginData';
import * as helpers from '../utils/playwrightHelpers'

test('login with valid credentials', async ({ page, loginPage }) => {

  await loginPage.navigateToLoginPage();
  await helpers.assertTitle(page, /OrangeHRM/);
  await loginPage.login(loginData.valid.username, loginData.valid.password);
  await helpers.assertURL(page, /dashboard/);
});
for (const scenario of loginData.invalidScenarios) {
  test(`login fails with ${scenario.name}`, async ({ page, loginPage }) => {
    await loginPage.navigateToLoginPage();
    await helpers.assertTitle(page, /OrangeHRM/);
    await loginPage.login(scenario.username, scenario.password);
    await helpers.assertVisible(loginPage.getErrorMessage());
    await helpers.assertContainsText(loginPage.getErrorMessage(), 'Invalid credentials');
  });
}