import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('Main navigation flows', () => {
  test('should navigate between key application areas', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.expectLoaded();

    await homePage.navigation.goToSearch();
    await expect(page).toHaveURL(/suche\/spielerdetail/i);

    await homePage.navigation.goToPremierLeague();
    await expect(page).toHaveURL(/premier-league\/tabelle\/wettbewerb\/GB1/i);

    await homePage.navigation.goToLogin();
    await expect(page).toHaveURL(/profil\/login/i);

    await homePage.navigation.goHome();
    await homePage.expectLoaded();
  });
});
