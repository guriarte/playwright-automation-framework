import { test, expect } from '@playwright/test';
import AccountPage from '../pages/accountPage';
import Assert from '../helpers/assert';
import ProductPage from '../pages/productPage';
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';
import CheckoutPage from '../pages/checkoutPage';
import { fakeStreetAddressForm } from '../fixtures/billingAddressForm';
import { janeDoeCreditCardForm } from '../fixtures/janeDoeCreditCardForm';

test('Customer logs in, searches and purchases a product', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const assert = new Assert(page);
  const accountPage = new AccountPage(page);
  const productPage = new ProductPage(page);
  const checkoutPage = new CheckoutPage(page);
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
  await productPage.clickElement(productPage.itemAddedToCartModal);
  await productPage.clickElement(productPage.shoppingCartButton);

  await assert.elementToBeVisible(
    checkoutPage.proceedToCheckoutButtonInStepOne,
  );
  await assert.urlContains(checkoutPage.checkoutPageUri);
  await checkoutPage.inputQuantityForProduct('Combination Pliers', '10');
  await checkoutPage.clickElement(
    checkoutPage.proceedToCheckoutButtonInStepOne,
  );
  await assert.textToBeVisible('You can proceed to checkout');
  await checkoutPage.clickElement(
    checkoutPage.proceedToCheckoutButtonInStepTwo,
  );
  await checkoutPage.fillBillingAddressFormWith(fakeStreetAddressForm);
  await checkoutPage.clickElement(
    checkoutPage.proceedToCheckoutButtonInStepThree,
  );
  await checkoutPage.selectFromDropdown(
    checkoutPage.paymentMethodDropdown,
    'Credit Card',
  );
  await checkoutPage.fillCreditCardFormWith(janeDoeCreditCardForm);
  await checkoutPage.clickElement(checkoutPage.confirmButton);
  await assert.textToBeVisible('Payment was successful');
  await checkoutPage.clickElement(checkoutPage.confirmButton);
  await assert.textToBeVisible('Thanks for your order!');
});
