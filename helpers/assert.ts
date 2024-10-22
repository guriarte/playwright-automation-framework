import { Page, expect, Response, test } from '@playwright/test';
import { ReadOnlyElement } from '../types/elements';

export default class Assert {
  constructor(private page: Page) {}

  async networkCallStatus(response: Response, statusCode: Number) {
    await test.step(`Intercepting ${response.url()}`, () => {
      expect(response.status()).toBe(statusCode);
    });
  }

  async elementToBeVisible(element: ReadOnlyElement) {
    await test.step(`Asserting if ${element.description} is visible`, async () => {
      await expect(this.page.locator(element.selector)).toBeVisible();
    });
  }

  async elementHasValue(element: ReadOnlyElement, value: string | RegExp) {
    await test.step(`Asserting if ${element.description} has value ${value}`, async () => {
      await expect(this.page.locator(element.selector)).toHaveValue(value);
    });
  }

  async urlContains(uri: string) {
    await test.step(`Asserting if URL contains "${uri}"`, async () => {
      await expect(this.page.url()).toContain(uri);
    });
  }
}
