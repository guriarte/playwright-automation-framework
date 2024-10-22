import { Page, test } from '@playwright/test';
import { ReadOnlyElement } from '../types/elements';
import { AccountPageElements } from './elements/accountPageElements';

export default class AccountPage {
  private readonly uri = 'account';

  constructor(private page: Page) {}

  async waitForLoad() {
    await test.step('Waiting for Account Page to load', async () => {
      await this.page.waitForURL(`**/${this.uri}`);
    });
  }

  async clickHomeButton() {
    await test.step(`Clicking on ${AccountPageElements.homeButton.description}`, async () => {
      await this.page.locator(AccountPageElements.homeButton.selector).click();
    });
  }

  get profileButtonSelector(): ReadOnlyElement {
    return AccountPageElements.profileButton;
  }
}
