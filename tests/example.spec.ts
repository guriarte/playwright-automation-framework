import { test, expect } from '@playwright/test';
import AccountPage from '../pages/accountPage';
import Assert from '../helpers/assert';
import ProductPage from '../pages/productPage';
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';

test('Customer logs in, searches and purchases a product', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const assert = new Assert(page);
  const accountPage = new AccountPage(page);
  const productPage = new ProductPage(page);
  const loginApiResponsePromise = loginPage.interceptLoginApi();

  await homePage.open();
  await homePage.clickElement(homePage.signInButton);

  await loginPage.waitForLoad();
  await loginPage.fillEmail('customer@practicesoftwaretesting.com');
  await loginPage.fillPassword('welcome01');
  await loginPage.clickElement(loginPage.submitButton);

  await assert.networkCallStatus(await loginApiResponsePromise, 200);

  await accountPage.waitForLoad();
  await assert.elementToBeVisible(accountPage.profileButtonSelector);
  await accountPage.clickElement(accountPage.homeButton);

  await homePage.searchForProduct('Combination Pliers');
  await homePage.clickOnProduct('Combination Pliers');

  await assert.urlContains(productPage.productPageUri);
  await productPage.clickElement(productPage.increaseQuantityButton, {
    clickCount: 2,
  });
  await assert.elementHasValue(productPage.quantityInputBox, '3');
  await productPage.clickElement(productPage.addToCartButton);
  await assert.elementToBeVisible(productPage.itemAddedToCartModal);
  await productPage.clickElement(productPage.shoppingCartButton);
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
