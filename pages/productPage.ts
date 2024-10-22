import { Page, test } from '@playwright/test';
import { ReadOnlyElement } from '../types/elements';
import BasePage from './basePage';
import { ProductPageElements } from './elements/productPageElements';

export default class ProductPage extends BasePage {
  private readonly uri = 'product';

  constructor(page: Page) {
    super(page);
  }

  get productPageUri(): string {
    return this.uri;
  }

  get addToCartButton(): ReadOnlyElement {
    return ProductPageElements.addToCartButton;
  }

  get quantityInputBox(): ReadOnlyElement {
    return ProductPageElements.quantityInputBox;
  }

  get increaseQuantityButton(): ReadOnlyElement {
    return ProductPageElements.increaseQuantityButton;
  }
}
