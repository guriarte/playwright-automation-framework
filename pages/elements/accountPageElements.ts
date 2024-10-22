import { ReadOnlyElement } from '../../types/elements';

export class AccountPageElements {
  static readonly pageName = 'Account Page';

  static readonly profileButton: ReadOnlyElement = {
    selector: '[data-test="nav-profile"]',
    description: `Profile Button in ${this.pageName}`,
  };

  static readonly homeButton: ReadOnlyElement = {
    selector: '[data-test="nav-home"]',
    description: `Home Button in ${this.pageName}`,
  };
}
