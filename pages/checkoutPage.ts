import { Page, test } from '@playwright/test';
import { ReadOnlyElement } from '../types/elements';
import BasePage from './basePage';
import { CheckoutPageElements } from './elements/checkoutPageElements';

export default class CheckoutPage extends BasePage {
  private readonly uri = 'checkout';

  constructor(page: Page) {
    super(page);
  }

  async inputQuantityForProduct(product: string, value: string) {
    const productQuantityBox = this.page
      .getByRole('cell')
      .filter({ hasText: product })
      .locator(CheckoutPageElements.quantityBox.selector);

    await test.step(`Filling ${CheckoutPageElements.quantityBox.description} with "${value} for product ${product}`, async () => {
      await productQuantityBox.clear();
      await productQuantityBox.fill(value);
    });
  }

  get checkoutPageUri(): string {
    return this.uri;
  }

  get proceedToCheckoutButton(): ReadOnlyElement {
    return CheckoutPageElements.proceedToCheckoutButton;
  }
}
