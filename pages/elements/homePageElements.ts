import { ReadOnlyElement } from '../../types/elements';
import { HeaderElements } from './headerElements';

export class HomePageElements {
  static readonly pageName = 'Homepage';

  static readonly signInButton: ReadOnlyElement = {
    selector: HeaderElements.signInButtonSelector,
    description: `Sign In button in ${this.pageName}`,
  };

  static readonly searchBar: ReadOnlyElement = {
    selector: '[data-test="search-query"]',
    description: `Search bar in ${this.pageName}`,
  };
}
