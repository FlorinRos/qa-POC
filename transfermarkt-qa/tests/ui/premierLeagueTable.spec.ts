import { test, expect } from '@playwright/test';
import { PremierLeaguePage } from '../../pages/PremierLeaguePage';

test.describe('Premier League table', () => {
  test('should display a valid Premier League table', async ({ page }) => {
    const premierLeaguePage = new PremierLeaguePage(page);

    await premierLeaguePage.open();
    await premierLeaguePage.expectLoaded();
  });
});
