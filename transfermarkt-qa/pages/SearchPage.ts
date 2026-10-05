import { expect, Locator, Page } from '@playwright/test';

export class SearchPage {
  constructor(private readonly page: Page) {}

  get searchInput(): Locator {
    return this.page.locator(
      'input[name="query"], input[name="search"], input[placeholder*="Search" i]'
    ).first();
  }

  // get searchButton(): Locator {
  //   return this.page.getByRole('button', { name: /search/i }).first();
  // }
  get searchButton(): Locator {
  return this.page.locator('.tm-header__input--search-send');
}

get playerLink(): Locator {
  return this.page.locator('.items td.hauptlink > a');
}

  async open(): Promise<void> {
    await this.page.goto('/suche/spielerdetail');
  }

  async searchPlayer(name: string): Promise<void> {
    await expect(this.searchInput).toBeVisible();
    await this.searchInput.fill(name);
    // await this.page.keyboard.press('Enter');
    
    if (await this.searchButton.isVisible().catch(() => false)) {
      await this.searchButton.click();
    } else {
      await this.searchInput.press('Enter');
    }
  }
}
