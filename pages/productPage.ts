import { Page, test } from '@playwright/test';
import { ReadOnlyElement } from '../types/elements';
import { ProductPageElements } from './elements/productPageElements';

export default class ProductPage {
  private readonly uri = 'product';

  constructor(private page: Page) {}

  async clickIncreaseQuantity(
    options: { clickCount?: number } = { clickCount: 1 },
  ) {
    const { clickCount } = options;

    await test.step(`Clicking on ${ProductPageElements.increaseQuantityButton.description}`, async () => {
      await this.page
        .locator(ProductPageElements.increaseQuantityButton.selector)
        .click({ clickCount });
    });
  }

  async clickAddToCartButton() {}

  get productPageUri() {
    return this.uri;
  }

  get quantityInputBox() {
    return ProductPageElements.quantityInputBox;
  }
}
