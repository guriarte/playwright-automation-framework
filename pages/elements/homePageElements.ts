import { ReadOnlyElement } from '../../types/elements';

export class HomePageElements {
  static readonly pageName = 'Homepage';

  static readonly signInButton: ReadOnlyElement = {
    selector: '[data-test="nav-sign-in"]',
    description: `Sign In button in ${this.pageName}`,
  };

  static readonly searchBar: ReadOnlyElement = {
    selector: '[data-test="search-query"]',
    description: `Search bar in ${this.pageName}`,
  };
}
