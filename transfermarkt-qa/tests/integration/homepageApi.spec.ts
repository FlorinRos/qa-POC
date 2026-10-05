import { test, expect } from '@playwright/test';

test.describe('Transfermarkt integration', () => {
  test('homepage should respond successfully over HTTP', async ({ request }) => {
    const response = await request.get('/');

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const body = await response.text();
    expect(body).toMatch(/Transfermarkt/i);
  });
});
