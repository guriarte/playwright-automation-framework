import { Page, test } from '@playwright/test';
import { HomePageElements } from './elements/homePageElements';
import { ReadOnlyElement } from '../types/elements';
import BasePage from './basePage';

export default class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

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

  async clickOnProduct(product: string) {
    await test.step(`Clicking on ${product} product`, async () => {
      await this.page.getByAltText(product).click();
    });
  }

  get signInButton(): ReadOnlyElement {
    return HomePageElements.signInButton;
  }
}
