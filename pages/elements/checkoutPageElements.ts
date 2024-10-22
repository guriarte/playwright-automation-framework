import { ReadOnlyElement } from '../../types/elements';
import { HeaderElements } from './headerElements';

export class CheckoutPageElements {
  static readonly pageName = 'Checkout Page';

  static readonly proceedToCheckoutButtonInStepOne: ReadOnlyElement = {
    selector: '[data-test="proceed-1"]',
    description: `Proceed To Checkout button in ${this.pageName} step 1`,
  };

  static readonly proceedToCheckoutButtonInStepTwo: ReadOnlyElement = {
    selector: '[data-test="proceed-2"]',
    description: `Proceed To Checkout button in ${this.pageName} step 1`,
  };

  static readonly proceedToCheckoutButtonInStepThree: ReadOnlyElement = {
    selector: '[data-test="proceed-3"]',
    description: `Proceed To Checkout button in ${this.pageName} step 3`,
  };

  static readonly quantityBox: ReadOnlyElement = {
    selector: '.quantity',
    description: `Quantity box in ${this.pageName}`,
  };

  static readonly addressTextBox: ReadOnlyElement = {
    selector: '[data-test="address"]',
    description: `Address text box in ${this.pageName}`,
  };

  static readonly cityTextBox: ReadOnlyElement = {
    selector: '[data-test="city"]',
    description: `City text box in ${this.pageName}`,
  };

  static readonly stateTextBox: ReadOnlyElement = {
    selector: '[data-test="state"]',
    description: `State text box in ${this.pageName}`,
  };

  static readonly countryTextBox: ReadOnlyElement = {
    selector: '[data-test="country"]',
    description: `Country text box in ${this.pageName}`,
  };

  static readonly postcodeTextBox: ReadOnlyElement = {
    selector: '[data-test="postcode"]',
    description: `Postcode text box in ${this.pageName}`,
  };

  static readonly paymentMethodDropdown: ReadOnlyElement = {
    selector: '[data-test="payment-method"]',
    description: `Payment Method dropdown in ${this.pageName}`,
  };

  static readonly creditCardNumberTextBox: ReadOnlyElement = {
    selector: '[data-test="credit_card_number"]',
    description: `Credit Card Number text box in ${this.pageName}`,
  };

  static readonly creditCardExpirationDateTextBox: ReadOnlyElement = {
    selector: '[data-test="expiration_date"]',
    description: `Credit Card Expiration Date text box in ${this.pageName}`,
  };

  static readonly creditCardCvvTextBox: ReadOnlyElement = {
    selector: '[data-test="cvv"]',
    description: `Credit Card CVV text box in ${this.pageName}`,
  };

  static readonly creditCardNameTextBox: ReadOnlyElement = {
    selector: '[data-test="card_holder_name"]',
    description: `Credit Card Name text box in ${this.pageName}`,
  };

  static readonly confirmButton: ReadOnlyElement = {
    selector: '[data-test="finish"]',
    description: `Confirm button in ${this.pageName} last step`,
  };
}
