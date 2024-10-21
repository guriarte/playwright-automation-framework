import { Page, test } from '@playwright/test';
import { ReadOnlyElement } from '../types/elements';
import { AccountPageElements } from './elements/accountPageElements';

export default class AccountPage {
  constructor(private page: Page) {}

  get profileButtonSelector(): ReadOnlyElement {
    return AccountPageElements.profileButton;
  }
}
