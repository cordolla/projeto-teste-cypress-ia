class ProductElements {
  btnAddCart = () => '[data-test="add-to-cart-sauce-labs-backpack"]';
  btnRemoveCart = () => '[data-test="remove-sauce-labs-backpack"]';
  cartBadge = () => '.shopping_cart_badge';
  cartLink = () => '.shopping_cart_link';
  productTitleLink = () => '#item_4_title_link';
  productDetailsContainer = () => '.inventory_details_container';
  btnCheckout = () => '[data-test="checkout"]';
  inputFirstName = () => '[data-test="firstName"]';
  inputLastName = () => '[data-test="lastName"]';
  inputPostalCode = () => '[data-test="postalCode"]';
  btnContinue = () => '[data-test="continue"]';
  btnFinish = () => '[data-test="finish"]';
  completeHeader = () => '.complete-header';
  btnContinueShopping = () => '[data-test="continue-shopping"]';
  erroCheckout = () => '[data-test="error"]';
}

export const productElements = new ProductElements();
