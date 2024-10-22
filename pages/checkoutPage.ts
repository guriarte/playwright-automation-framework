import { Page, test } from '@playwright/test';
import { BillingAddressForm } from '../types/billingAddressForm';
import { CreditCardForm } from '../types/creditCardForm';
import { ReadOnlyElement } from '../types/elements';
import BasePage from './basePage';
import { CheckoutPageElements } from './elements/checkoutPageElements';

export default class CheckoutPage extends BasePage {
  private readonly uri = 'checkout';

  constructor(page: Page) {
    super(page);
  }

  async inputQuantityForProduct(product: string, value: string) {
    const productQuantityBox = this.page
      .getByRole('cell')
      .filter({ hasText: product })
      .locator(CheckoutPageElements.quantityBox.selector);

    await test.step(`Filling ${CheckoutPageElements.quantityBox.description} with "${value} for product ${product}`, async () => {
      await productQuantityBox.clear();
      await productQuantityBox.fill(value);
    });
  }

  async fillBillingAddressFormWith(data: BillingAddressForm) {
    const formElementsAndData = [
      { element: CheckoutPageElements.addressTextBox, value: data.address },
      { element: CheckoutPageElements.cityTextBox, value: data.city },
      { element: CheckoutPageElements.stateTextBox, value: data.state },
      { element: CheckoutPageElements.countryTextBox, value: data.country },
      { element: CheckoutPageElements.postcodeTextBox, value: data.postcode },
    ];

    for (const { element, value } of formElementsAndData) {
      await test.step(`Filling ${element.description} with "${value}"`, async () => {
        const locator = this.page.locator(element.selector);
        await locator.clear();
        await locator.fill(value);
      });
    }
  }

  async fillCreditCardFormWith(data: CreditCardForm) {
    const formElementsAndData = [
      {
        element: CheckoutPageElements.creditCardNumberTextBox,
        value: data.number,
      },
      {
        element: CheckoutPageElements.creditCardExpirationDateTextBox,
        value: data.expirationDate,
      },
      { element: CheckoutPageElements.creditCardCvvTextBox, value: data.cvv },
      {
        element: CheckoutPageElements.creditCardNameTextBox,
        value: data.name,
      },
    ];

    for (const { element, value } of formElementsAndData) {
      await test.step(`Filling ${element.description} with "${value}"`, async () => {
        const locator = this.page.locator(element.selector);
        await locator.clear();
        await locator.fill(value);
      });
    }
  }

  get checkoutPageUri(): string {
    return this.uri;
  }

  get proceedToCheckoutButtonInStepOne(): ReadOnlyElement {
    return CheckoutPageElements.proceedToCheckoutButtonInStepOne;
  }

  get proceedToCheckoutButtonInStepTwo(): ReadOnlyElement {
    return CheckoutPageElements.proceedToCheckoutButtonInStepTwo;
  }

  get proceedToCheckoutButtonInStepThree(): ReadOnlyElement {
    return CheckoutPageElements.proceedToCheckoutButtonInStepThree;
  }

  get paymentMethodDropdown(): ReadOnlyElement {
    return CheckoutPageElements.paymentMethodDropdown;
  }

  get confirmButton(): ReadOnlyElement {
    return CheckoutPageElements.confirmButton;
  }
}
