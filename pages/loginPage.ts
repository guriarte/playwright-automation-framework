import { Page, test, Response } from '@playwright/test';
import { LoginPageElements } from './elements/loginPageElements';
import { ReadOnlyElement } from '../types/elements';

export default class LoginPage {
  private readonly uri = 'auth/login';
  private readonly loginApi = 'users/login';

  constructor(private page: Page) {}

  async waitForLoad() {
    await test.step('Waiting for Login Page to load', async () => {
      await this.page.waitForURL(`**/${this.uri}`);
    });
  }

  async fillEmail(email: string) {
    await test.step(`Filling ${LoginPageElements.emailTextBox.description} with ${email}`, async () => {
      await this.page
        .locator(LoginPageElements.emailTextBox.selector)
        .fill(email);
    });
  }

  async fillPassword(password: string) {
    await test.step(`Filling ${LoginPageElements.passwordTextBox.description}`, async () => {
      await this.page
        .locator(LoginPageElements.passwordTextBox.selector)
        .fill(password);
    });
  }

  async clickSubmitButton() {
    await test.step(`Clicking ${LoginPageElements.submitButton.description}`, async () => {
      await this.page.locator(LoginPageElements.submitButton.selector).click();
    });
  }

  interceptLoginApi(): Promise<Response> {
    return this.page.waitForResponse(`http://localhost:8091/${this.loginApi}`);
  }
}
