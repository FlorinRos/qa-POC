import { Locator, Page } from '@playwright/test';

export class Header {
  constructor(private readonly page: Page) {}

  get logo(): Locator {
    return this.page.getByRole('link', { name: /transfermarkt/i }).first();
  }
}
