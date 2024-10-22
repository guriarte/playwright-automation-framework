import { Page, test } from '@playwright/test';
import { ReadOnlyElement } from '../types/elements';

export default class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickElement(
    element: ReadOnlyElement,
    options: { clickCount?: number } = { clickCount: 1 },
  ) {
    await test.step(`Clicking on ${element.description}`, async () => {
      await this.page.locator(element.selector).click(options);
    });
  }
}
