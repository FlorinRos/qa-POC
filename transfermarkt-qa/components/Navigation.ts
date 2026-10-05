import { Page } from '@playwright/test';

export class Navigation {
  constructor(private readonly page: Page) {}

  async goHome(): Promise<void> {
    await this.page.goto('/');
  }

  async goToLogin(): Promise<void> {
    await this.page.goto('/profil/login');
  }

  async goToSearch(): Promise<void> {
    await this.page.goto('/suche/spielerdetail');
  }

  async goToPremierLeague(): Promise<void> {
    await this.page.goto('/premier-league/tabelle/wettbewerb/GB1');
  }
}
