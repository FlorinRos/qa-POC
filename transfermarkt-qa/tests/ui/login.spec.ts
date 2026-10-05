import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login form', () => {
  test('should display the login form and handle empty submission', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.expectLoaded();

    await loginPage.submitEmpty();

    // No real credentials are available for this assignment.
    // The test deliberately does not invent credentials.
  });
});
