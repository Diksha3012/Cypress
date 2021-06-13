///  <reference types="cypress"/>



it('google test',function()
{
    cy.visit('http://www.google.com')
    cy.get('.gLFyf').type('Automation step by step{enter}')
})