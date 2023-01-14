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
Given("that the user is on the Amazon homepage #2", () => {
	homepage.accessPage();
});
When("searchs some product #2", () => {
	homepage.searchProduct();
	homepage.checkSearch();
});
When("clicks in the desired product #2", () => {
	productPage.accessPage();
});
When('select the quantity "2"', () => {
	productPage.selectQuantity();
});
When('clicks in "Add to Cart" #2', () => {
	productPage.addToCart();
});
Then("the system add two products to cart", () => {
	cartPage.checkAddTwoProductsToCart();
});

