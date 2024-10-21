import { ReadOnlyElement } from '../../types/elements';

export class LoginPageElements {
  static readonly pageName = 'Login Page';

  static readonly emailTextBox: ReadOnlyElement = {
    selector: '[data-test="email"]',
    description: `Email textbox in ${this.pageName}`,
  };

  static readonly passwordTextBox: ReadOnlyElement = {
    selector: '[data-test="password"]',
    description: `Password textbox in ${this.pageName}`,
  };

  static readonly submitButton: ReadOnlyElement = {
    selector: '[data-test="login-submit"]',
    description: `Submit Button in ${this.pageName}`,
  };
}
