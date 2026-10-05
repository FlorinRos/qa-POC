import { test, expect } from '@playwright/test';
import { HttpStatusMonitor } from '../../utils/HttpStatusMonitor';

test.describe('HTTP 500 monitoring', () => {
  test('should not receive HTTP 500+ responses during a key flow', async ({ page }) => {
    const monitor = new HttpStatusMonitor();

    page.on('response', response => monitor.recordResponse(response));

    await page.goto('/');
    await expect(page).toHaveTitle(/Transfermarkt/i);

    await page.goto('/premier-league/tabelle/wettbewerb/GB1');
    await expect(page).toHaveTitle(/Premier League/i);

    const errors = monitor.getErrors();

    expect(errors, `Unexpected server errors:\n${errors.join('\n')}`).toEqual([]);
  });
});
