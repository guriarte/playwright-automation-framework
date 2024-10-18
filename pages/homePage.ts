import { Page, test } from '@playwright/test';

export default class HomePage {
  private readonly signInButton = '[data-test="nav-sign-in"]';
  constructor(private page: Page) {}

  async open() {
    test.step('Opening Homepage', () => {
      this.page.goto('/');
    });
  }

  async clickSignInButton() {
    await test.step(`Clicking on Sign In Button inside Homepage`, async () => {
      await this.page.locator(this.signInButton).click();
    });
  }
}
