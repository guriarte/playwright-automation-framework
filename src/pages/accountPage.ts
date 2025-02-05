import { Page, test } from '@playwright/test';
import { ReadOnlyElement } from '../types/elements';
import BasePage from './basePage';
import { AccountPageElements } from './elements/accountPageElements';

export default class AccountPage extends BasePage {
  private readonly uri = 'account';

  constructor(page: Page) {
    super(page);
  }

  async waitForLoad() {
    await test.step('Waiting for Account Page to load', async () => {
      await this.page.waitForURL(`**/${this.uri}`);
    });
  }

  get profileButtonSelector(): ReadOnlyElement {
    return AccountPageElements.profileButton;
  }

  get homeButton(): ReadOnlyElement {
    return AccountPageElements.homeButton;
  }
}
