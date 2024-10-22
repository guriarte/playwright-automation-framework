import { ReadOnlyElement } from '../../types/elements';

export class ProductPageElements {
  static readonly pageName = 'Product Page';

  static readonly increaseQuantityButton: ReadOnlyElement = {
    selector: '[data-test="increase-quantity"]',
    description: `Increase Quantity button in ${this.pageName}`,
  };

  static readonly quantityInputBox: ReadOnlyElement = {
    selector: '[data-test="quantity"]',
    description: `Quantity input box in ${this.pageName}`,
  };

  static readonly addToCartButton: ReadOnlyElement = {
    selector: '[data-test="add-to-cart"]',
    description: `Add To Cart button in ${this.pageName}`,
  };
}
