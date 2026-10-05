import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  get usernameInput(): Locator {
    return this.page.locator(
      'input[name="username"], input[type="text"], input[autocomplete="username"]'
    ).first();
  }

  get passwordInput(): Locator {
    return this.page.locator(
      'input[name="password"], input[type="password"], input[autocomplete="current-password"]'
    ).first();
  }

  get loginButton(): Locator {
    return this.page.getByRole('button', { name: /login|anmelden/i }).first();
  }

  async open(): Promise<void> {
    await this.page.goto('/profil/login');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async submitEmpty(): Promise<void> {
    await this.loginButton.click();
  }
}
