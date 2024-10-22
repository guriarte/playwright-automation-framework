import { ReadOnlyElement } from '../../types/elements';

export class ProductPageElements {
  static readonly pageName = 'Product Page';

  static readonly increaseQuantityButton: ReadOnlyElement = {
    selector: '[data-test="increase-quantity"]',
    description: `Increase Quantity Button in ${this.pageName}`,
  };

  static readonly quantityInputBox: ReadOnlyElement = {
    selector: '[data-test="quantity"]',
    description: `Quantity Input Box in ${this.pageName}`,
  };
}
