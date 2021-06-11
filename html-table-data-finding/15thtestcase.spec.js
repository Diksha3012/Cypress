/// <reference types="cypress"/>

describe('Checking tables',function () 
{

    it('anywhere_in_table',function()
{
    cy.visit('http://testautomationpractice.blogspot.com/')
    cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

})


    it('specific_row _and _specific_columns',function()

{

 cy.get('table[name=BookTable]table > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')


})



})