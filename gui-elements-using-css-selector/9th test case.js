/// <reference types="cypress" />

describe('Locationg Element',function () 
{
     it('verifytitleoflocaters',function()
        { 
    cy.root()
            
    cy.visit("https://demo.nopcommerce.com/") //open url
     cy.get('#small-searchterms').type('HTC one mini blue') //search product using id
    cy.get("[type='submit']").click()  //click on search button using button type
    // cy.get([type='button']).click() // click on add to cart using button type will check this works or not
    // cy.get(".product-box-add-to-cart-button[value='add to cart']").click() //this is syntax of clas with attribute buttton "type" does not work as attribute

   cy.get(".product-title > a").click() 
   cy.get('#product_enteredQuantity_19').clear().type('4')
   cy.get('#add-to-cart-button-19').click()
    cy.wait(5000)
    cy.get("#topcartlink > a > span.cart-label").click()  //using copy selecter 
     
     


         })
})