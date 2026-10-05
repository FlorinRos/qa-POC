import { test, expect } from '@playwright/test';
import { HttpStatusMonitor } from '../../utils/HttpStatusMonitor';

test.describe('HttpStatusMonitor', () => {
  test('should record server errors', () => {
    const monitor = new HttpStatusMonitor();

    const response = {
      status: () => 500,
      url: () => 'https://example.com/api'
    } as any;

    monitor.recordResponse(response);

    expect(monitor.getErrors()).toEqual([
      '500 https://example.com/api'
    ]);
  });

  test('should ignore successful responses', () => {
    const monitor = new HttpStatusMonitor();

    const response = {
      status: () => 200,
      url: () => 'https://example.com/api'
    } as any;

    monitor.recordResponse(response);

    expect(monitor.getErrors()).toEqual([]);
  });
});
