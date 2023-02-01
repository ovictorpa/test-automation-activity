/// <reference types="cypress" /> 
import ProductListElements from "../elements/ProductListElements";
const productListElements = new ProductListElements
import ProductPageElements from "../elements/ProductPageElements";
const productPageElementos = new ProductPageElements

class ProductPage {
    accessPage(){
        cy.get(productListElements.firstProduct())
            .click()
    }
    selectQuantity(){
        cy.get(productPageElementos.quantitySelect())
            .select("2")
    }
    addToCart(){
        cy.get("#add-to-cart-button")
            .click()
    }
}

export default ProductPage