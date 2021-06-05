///  <reference types="cypress"/>


it('google test',function()
{
    cy.visit('http://www.google.com')
    //adding custom timeout at command level

    //cy.get('.gLFy',{timeout:6000}).type('Automation step by step{enter}')
   // cy.get('[href="https://automationstepbystep.com/"] > .LC20lb').click()

    //adding custom timeout at global  level at cypress.json file

cy.get('.gLFyf').type('Automation step by step{enter}')
cy.wait(4000)
cy.contains('Videos').end()


})