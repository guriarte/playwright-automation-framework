import { test, expect } from '@playwright/test';
import AccountPage from '../pages/accountPage';
import Assert from '../pages/assert';
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';

test('Customer logs in, searches and purchases a product', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const assert = new Assert(page);
  const accountPage = new AccountPage(page);
  const loginApiResponsePromise = loginPage.interceptLoginApi();

  await homePage.open();
  await homePage.clickSignInButton();

  await loginPage.waitForLoad();
  await loginPage.fillEmail('customer@practicesoftwaretesting.com');
  await loginPage.fillPassword('welcome01');
  await loginPage.clickSubmitButton();

  await assert.networkCallStatus(await loginApiResponsePromise, 200);

  await assert.elementToBeVisible(accountPage.profileButtonSelector);

  // await expect(page.locator('[data-test="nav-profile"]')).toBeVisible();
  // expect(page.waitForURL('**/account'));

  // await page.getByRole('link', { name: 'Practice Software Testing -' }).click();
  // await page.locator('[data-test="search-query"]').fill('Combination Pliers');
  // await page.keyboard.press('Enter');
  // await page.getByAltText('Combination Pliers').click();
  // expect(page.url()).toContain('/product');
  // await page
  //   .locator('[data-test="increase-quantity"]')
  //   .click({ clickCount: 2 });
  // expect(page.locator('[data-test="quantity"]')).toHaveValue('3');

  // await page.locator('[data-test="add-to-cart"]').click();
  // await expect(
  //   page.locator('div').filter({ hasText: 'Product added to shopping' }).nth(2),
  // ).toBeVisible();

  // await page.locator('[data-test="nav-cart"]').click();
  // await expect(page.locator('[data-test="proceed-1"]')).toBeVisible();
  // expect(page.url()).toContain('/checkout');
  // await page.getByLabel('Quantity for Combination').clear();
  // await page.getByLabel('Quantity for Combination').fill('10');
  // await page.locator('[data-test="proceed-1"]').click();
  // await expect(page.getByText('You can proceed to checkout')).toBeVisible();
  // await page.locator('[data-test="proceed-2"]').click();
  // await page.locator('[data-test="address"]').clear();
  // await page.locator('[data-test="address"]').fill('123 Fake St');
  // await page.locator('[data-test="city"]').clear();
  // await page.locator('[data-test="city"]').fill('Fake City');
  // await page.locator('[data-test="state"]').clear();
  // await page.locator('[data-test="state"]').fill('Fake State');
  // await page.locator('[data-test="country"]').clear();
  // await page.locator('[data-test="country"]').fill('Fake Country');
  // await page.locator('[data-test="postcode"]').clear();
  // await page.locator('[data-test="postcode"]').fill('12345');
  // await page.locator('[data-test="proceed-3"]').click();
  // await page
  //   .locator('[data-test="payment-method"]')
  //   .selectOption('Credit Card');
  // await page
  //   .locator('[data-test="credit_card_number"]')
  //   .fill('1234-5678-1234-5678');
  // await page.locator('[data-test="expiration_date"]').fill('11/2040');
  // await page.locator('[data-test="cvv"]').fill('123');
  // await page.locator('[data-test="card_holder_name"]').fill('Jane Doe');
  // await page.locator('[data-test="finish"]').click();
  // await expect(page.getByText('Payment was successful')).toBeVisible();
  // await page.locator('[data-test="finish"]').click();
  // await expect(page.getByText('Thanks for your order!')).toBeVisible();
});
