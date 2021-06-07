/// <reference types="cypress"/>


it('google test',function()
{
    cy.visit('http://www.google.com')
    

cy.get('.gLFyf').type('Automation step by step{enter}')
cy.wait(4000)
cy.contains('videos').click()


})
//it.only mean only this test will run
it.only('login test',function()
{
    cy.visit('https://www.opencart.com/')
    cy.get('.btn-link').click()
    cy.get('#input-email').type('dikshakatna912@gmail.com')
    cy.get('#input-password').type('used personal keys')
    cy.get(':nth-child(1) > .hidden-xs').click()
    cy.get('#input-pin').type('1993')
    cy.get('form > :nth-child(2) > .btn').click()
    
    cy.get('[href="#"]').click()
    cy.get('.dropdown-menu > :nth-child(3) > a').click()
   cy.get('#input-reason').select('I am experiencing technical issues')

    
})
