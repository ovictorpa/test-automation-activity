/// <reference types="cypress" /> 
import CartPageElements from "../elements/CartPageElements";
const cartPageElements = new CartPageElements

class CartPage {
    checkAddProductToCart(){
        cy.contains("Adicionado ao carrinho")
            .should('be.visible')
        cy.get(cartPageElements.cartButton())
            .click()
        cy.get(cartPageElements.firstProduct())
            .should('be.visible')
        cy.get(cartPageElements.subtotalSpan)
            .contains('Subtotal (1 item):')
                .should('be.visible')
    }

    checkAddTwoProductsToCart(){
        cy.contains("Adicionado ao carrinho")
            .should('be.visible')
        cy.get(cartPageElements.cartButton())
            .click()
        cy.get(cartPageElements.firstProduct())
            .should('be.visible')
        cy.get(cartPageElements.subtotalSpan)
            .contains('Subtotal (2 itens):')
                .should('be.visible')
    }
}
export default CartPage