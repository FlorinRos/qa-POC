import { expect, Locator, Page } from '@playwright/test';

export class PremierLeaguePage {
  constructor(private readonly page: Page) {}

  get tables(): Locator {
    return this.page.locator('table');
  }

  get firstTable(): Locator {
    return this.tables.first();
  }

  get rows(): Locator {
    return this.firstTable.locator('tbody tr');
  }

  async open(): Promise<void> {
    await this.page.goto('/premier-league/tabelle/wettbewerb/GB1');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle(/Premier League/i);
    await expect(this.firstTable).toBeVisible();
  }
}
