import {Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../support/pageObjects/HomePage';
const homepage = new HomePage
import ProductPage from '../../support/pageObjects/ProductPage';
const productPage = new ProductPage
import CartPage from '../../support/pageObjects/CartPage';
const cartPage = new CartPage

Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})
Given("that the user is on the Amazon homepage", () => {
	homepage.accessPage();
});
When("searchs some product", () => {
	homepage.searchProduct();
	homepage.checkSearch();
});
When("clicks in the desired product", () => {
	productPage.accessPage();
});
When('clicks in "Add to Cart"', () => {
	productPage.addToCart();
});
Then("the system add this product to cart", () => {
	cartPage.checkAddProductToCart();
});



