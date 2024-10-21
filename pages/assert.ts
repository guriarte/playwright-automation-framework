import { Page, expect, Response, test } from '@playwright/test';

export default class Assert {
  constructor(private page: Page) {}

  async networkCallStatus(response: Response, statusCode: Number) {
    await test.step(`Intercepting ${response.url()}`, () => {
      expect(response.status()).toBe(statusCode);
    });
  }

  async elementToBeVisible(locator: string) {
    await test.step(`Asserting if ${locator} is visible`, async () => {
      await expect(this.page.locator(locator)).toBeVisible();
    });
  }
}
