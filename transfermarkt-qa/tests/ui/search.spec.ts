import { test, expect } from '@playwright/test';
import { SearchPage } from '../../pages/SearchPage';

test.describe('Player search', () => {
  test('should search for a player', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.open();
    await searchPage.searchPlayer('Kylian Mbappe');

    // await expect(page.getByText(/Kylian Mbappe/i).first()).toBeVisible();
  await expect(searchPage.playerLink).toBeVisible();
  // await expect(page.locator('td.hauptlink a', { hasText: 'Kylian Mbappé' })).toBeVisible();

  });
});
