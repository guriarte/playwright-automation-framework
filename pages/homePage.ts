import { Page, test } from '@playwright/test';
import { HomePageElements } from './elements/homePageElements';
import { ReadOnlyElement } from '../types/elements';

export default class HomePage {
  constructor(private page: Page) {}

  async open() {
    await test.step('Opening Homepage', () => {
      this.page.goto('/');
    });
  }

  async searchForProduct(product: string) {
    await test.step(`Searching for ${product} on ${HomePageElements.searchBar.description}`, async () => {
      await this.page
        .locator(HomePageElements.searchBar.selector)
        .fill(product);
      await this.page.keyboard.press('Enter');
    });
  }

  async clickSignInButton() {
    await test.step(`Clicking on ${HomePageElements.signInButton.description}`, async () => {
      await this.page.locator(HomePageElements.signInButton.selector).click();
    });
  }

  async clickOnProduct(product: string) {
    await test.step(`Clicking on ${product} product`, async () => {
      await this.page.getByAltText(product).click();
    });
  }
}
