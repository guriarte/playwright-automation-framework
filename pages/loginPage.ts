import { Page, test, Response } from '@playwright/test';

export default class LoginPage {
  private readonly uri = 'auth/login';
  private readonly loginApi = 'users/login';
  private readonly emailTextBox = '[data-test="email"]';
  private readonly passwordTextBox = '[data-test="password"]';
  private readonly submitButton = '[data-test="login-submit"]';
  constructor(private page: Page) {}

  async waitForLoad() {
    await test.step('Waiting for Login Page to load', async () => {
      await this.page.waitForURL(`**/${this.uri}`);
    });
  }

  async fillEmail(email: string) {
    await test.step(`Filling Email textbox with ${email}`, async () => {
      await this.page.locator(this.emailTextBox).fill(email);
    });
  }

  async fillPassword(password: string) {
    await test.step(`Filling Password textbox`, async () => {
      await this.page.locator(this.passwordTextBox).fill(password);
    });
  }

  async clickSubmitButton() {
    await test.step('Clicking Submit button in Login Page', async () => {
      await this.page.locator(this.submitButton).click();
    });
  }

  interceptLoginApi(): Promise<Response> {
    return this.page.waitForResponse(`http://localhost:8091/${this.loginApi}`);
  }
}
