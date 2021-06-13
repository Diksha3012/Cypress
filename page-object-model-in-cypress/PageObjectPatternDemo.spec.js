/// <reference types="cypress"/>

import LoginPage from '../PageObjects/LoginPage'

describe('Test suite',function () 
{
    it('valid Login Test', function()
    {
        const login=new LoginPage()
        login.visit()
        login.fillEmail('admin@yourstore.com')
        login.fillPassword('admin')
        login.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')


    })

})