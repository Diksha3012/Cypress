/// <reference types="cypress"/>

describe('go',function () 
{

it('forward-backward',function()
  {
     cy.visit('https://demo.nopcommerce.com/')
     cy.title().should('eq','nopCommerce demo store') //home page
     cy.get('.ico-register').click()
     cy.title().should('eq','nopCommerce demo store. Register') //registration page
     cy.go('back')
     cy.title().should('eq','nopCommerce demo store')
     cy.go('forward')
     cy.title().should('eq','nopCommerce demo store. Register')
     cy.go(-1) //back
     cy.title().should('eq','nopCommerce demo store')
     cy.go(1)  //forward
     cy.title().should('eq','nopCommerce demo store. Register')
     cy.reload()
   })
})
