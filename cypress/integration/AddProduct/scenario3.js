import {Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../support/pageObjects/HomePage';
const homepage = new HomePage

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
Given("that user is on the Amazon homepage #3", () => {
	homepage.accessPage();
});
When("searchs some nonexistent product", () => {
	homepage.searchNonexistentProduct();
});
Then("the system returns that this product does not exist", () => {
	homepage.checkNonexistentSearch();
});


