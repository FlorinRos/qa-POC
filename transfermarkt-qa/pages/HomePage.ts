import { expect, Page } from '@playwright/test';
import { Navigation } from '../components/Navigation';

export class HomePage {
  readonly navigation: Navigation;

  constructor(private readonly page: Page) {
    this.navigation = new Navigation(page);
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle(/Transfermarkt/i);
  }
}
