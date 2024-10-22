import { Page, test } from '@playwright/test';

export default class BasePage {
  constructor(private page: Page) {}
}
