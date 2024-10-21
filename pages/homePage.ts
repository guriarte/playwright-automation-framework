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

  async clickSignInButton() {
    await test.step(`Clicking on ${HomePageElements.signInButton.description}`, async () => {
      await this.page.locator(HomePageElements.signInButton.selector).click();
    });
  }
}
