import { test, expect } from '@playwright/test';

test('Customer logs in, searches and purchases a product', async ({ page }) => {
  const responsePromise = page.waitForResponse(
    'http://localhost:8091/users/login',
  );
  await page.goto('http://localhost:4200/');

  await page.locator('[data-test="nav-sign-in"]').click();

  expect(page.waitForURL('**/auth/login'));
  await page
    .locator('[data-test="email"]')
    .fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();

  const response = await responsePromise;
  expect(response.status()).toBe(200);

  await expect(page.locator('[data-test="nav-profile"]')).toBeVisible();
  expect(page.waitForURL('**/account'));

  await page.getByRole('link', { name: 'Practice Software Testing -' }).click();
  await page.locator('[data-test="search-query"]').fill('Combination Pliers');
  await page.keyboard.press('Enter');
  await page.getByAltText('Combination Pliers').click();
  expect(page.url()).toContain('/product');
  await page
    .locator('[data-test="increase-quantity"]')
    .click({ clickCount: 2 });
  expect(page.locator('[data-test="quantity"]')).toHaveValue('3');

  await page.locator('[data-test="add-to-cart"]').click();
  await expect(
    page.locator('div').filter({ hasText: 'Product added to shopping' }).nth(2),
  ).toBeVisible();

  await page.locator('[data-test="nav-cart"]').click();
  await expect(page.locator('[data-test="proceed-1"]')).toBeVisible();
  expect(page.url()).toContain('/checkout');
  await page.getByLabel('Quantity for Combination').clear();
  await page.getByLabel('Quantity for Combination').fill('10');
  await page.locator('[data-test="proceed-1"]').click();
  await expect(page.getByText('You can proceed to checkout')).toBeVisible();
  await page.locator('[data-test="proceed-2"]').click();
  await page.locator('[data-test="address"]').clear();
  await page.locator('[data-test="address"]').fill('123 Fake St');
  await page.locator('[data-test="city"]').clear();
  await page.locator('[data-test="city"]').fill('Fake City');
  await page.locator('[data-test="state"]').clear();
  await page.locator('[data-test="state"]').fill('Fake State');
  await page.locator('[data-test="country"]').clear();
  await page.locator('[data-test="country"]').fill('Fake Country');
  await page.locator('[data-test="postcode"]').clear();
  await page.locator('[data-test="postcode"]').fill('12345');
  await page.locator('[data-test="proceed-3"]').click();
  await page
    .locator('[data-test="payment-method"]')
    .selectOption('Credit Card');
  await page
    .locator('[data-test="credit_card_number"]')
    .fill('1234-5678-1234-5678');
  await page.locator('[data-test="expiration_date"]').fill('11/2040');
  await page.locator('[data-test="cvv"]').fill('123');
  await page.locator('[data-test="card_holder_name"]').fill('Jane Doe');
  await page.locator('[data-test="finish"]').click();
  await expect(page.getByText('Payment was successful')).toBeVisible();
  await page.locator('[data-test="finish"]').click();
  await expect(page.getByText('Thanks for your order!')).toBeVisible();
});
