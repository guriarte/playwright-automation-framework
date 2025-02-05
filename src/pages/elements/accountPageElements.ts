import { ReadOnlyElement } from '../../types/elements';
import { HeaderElements } from './headerElements';

export class AccountPageElements {
  static readonly pageName = 'Account Page';

  static readonly profileButton: ReadOnlyElement = {
    selector: '[data-test="nav-profile"]',
    description: `Profile button in ${this.pageName}`,
  };

  static readonly homeButton: ReadOnlyElement = {
    selector: HeaderElements.homeButtonSelector,
    description: `Home button in ${this.pageName}`,
  };
}
