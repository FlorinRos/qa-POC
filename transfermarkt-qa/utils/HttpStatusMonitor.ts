import { Response } from '@playwright/test';

export class HttpStatusMonitor {
  private readonly serverErrors: string[] = [];

  recordResponse(response: Response): void {
    if (response.status() >= 500) {
      this.serverErrors.push(`${response.status()} ${response.url()}`);
    }
  }

  getErrors(): string[] {
    return [...this.serverErrors];
  }
}
