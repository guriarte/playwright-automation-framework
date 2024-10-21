import { Page, test } from '@playwright/test';

export default class AccountPage {
  private readonly profileButton = '[data-test="nav-profile"]';
  constructor(private page: Page) {}

  profileButtonSelector(): string {
    return this.profileButton;
  }
}
