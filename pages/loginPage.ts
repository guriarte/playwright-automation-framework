import { Page, test } from '@playwright/test';

export default class LoginPage {
  private readonly uri = 'auth/login';
  constructor(private page: Page) {}

  waitForLoad() {
    test.step('Waiting for Login Page to load', () => {
      this.page.waitForURL(`**/${this.uri}`);
    });
  }
}
