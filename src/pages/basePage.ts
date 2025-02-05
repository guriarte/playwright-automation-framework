import { Page, test } from '@playwright/test';
import { ReadOnlyElement } from '../types/elements';

export default class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickElement(
    element: ReadOnlyElement,
    options: { clickCount?: number; force?: boolean } = {
      clickCount: 1,
      force: false,
    },
  ) {
    await test.step(`Clicking on ${element.description}`, async () => {
      await this.page.locator(element.selector).click(options);
    });
  }

  async selectFromDropdown(dropdown: ReadOnlyElement, option: string) {
    await test.step(`Selecting ${option} from ${dropdown.description}`, async () => {
      await this.page.locator(dropdown.selector).selectOption(option);
    });
  }
}
