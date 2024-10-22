import { ReadOnlyElement } from '../../types/elements';
import { HeaderElements } from './headerElements';

export class CheckoutPageElements {
  static readonly pageName = 'Checkout Page';

  static readonly proceedToCheckoutButton: ReadOnlyElement = {
    selector: '[data-test="proceed-1"]',
    description: `Proceed To Checkout button in ${this.pageName}`,
  };

  static readonly quantityBox: ReadOnlyElement = {
    selector: '.quantity',
    description: `Quantity box in ${this.pageName}`,
  };
}
