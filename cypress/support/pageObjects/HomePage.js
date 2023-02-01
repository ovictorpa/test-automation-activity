/// <reference types="cypress" /> 
import {productNames} from "../data/inputData"
import HomePageElements from "../elements/HomePageElements";
const homePageElements = new HomePageElements;
const url = Cypress.config("baseUrl");

class Homepage {

    accessPage(){
        cy.visit(url);
    }
    searchProduct(){
        cy.get(homePageElements.tabSearch())
            .click()
                .type(productNames.nameExistent);
        cy.get(homePageElements.searchSubmitButton())
            .click();
    }
    searchNonexistentProduct(){
        cy.get(homePageElements.tabSearch())
            .click()
                .type(productNames.nameNonexistent);
        cy.get(homePageElements.searchSubmitButton())
            .click();
    }
    checkSearch(){
        cy.contains(productNames.nameExistent)
            .should('be.visible')
    }
    checkNonexistentSearch(){
        cy.get(homePageElements.textSearch())
            .contains('Nenhum resultado para')
            .should('be.visible')
    }
}
export default Homepage