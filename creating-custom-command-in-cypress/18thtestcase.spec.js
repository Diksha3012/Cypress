/// <reference types="cypress"/>

describe('Custom_command',function () 
{

    it('Login test',function()
    {
       cy.login('admin@yourstore.com','admin')
       cy.title.should('be.equal','Dashboard / nopCommerce administration')

    })
    it('Add customer',function()
    {
       cy.login('admin@yourstore.com','admin')
        

        //script for adding new customer
        cy.log('adding customer')

    })
    it('Edit customer',function()
    {
        cy.login('admin@yourstore.com','admin')
       

        //script for editing customer
        cy.log('editing customer')

    })

})
