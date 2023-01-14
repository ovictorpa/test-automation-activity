Feature: addProduct

    As a user, I want to search a product and add this product to the cart

    Scenario: Add an existent product to cart #1
        Given that the user is on the Amazon homepage
        When searchs some product
        And clicks in the desired product
        And clicks in "Add to Cart"
        Then the system add this product to cart
    
    Scenario: Add more quantities of the same product to the cart #2
        Given that the user is on the Amazon homepage #2
        When searchs some product #2
        And clicks in the desired product #2
        And select the quantity "2"
        And clicks in "Add to Cart" #2
        Then the system add two products to cart

   Scenario: Add a nonexistent product to cart #3
        Given that user is on the Amazon homepage #3
        When searchs some nonexistent product
        Then the system returns that this product does not exist
    