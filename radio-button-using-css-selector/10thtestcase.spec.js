/// <reference types="cypress" />
describe('handling GUI elements',function () 
{
     it('verify elements',function()
      
     { 

     
    cy.root()
    cy.visit("http://demo.guru99.com/test/newtours/")
    //cy.url().should('include','newtours')
    //cy.get("[type='text']").should('be.visible').should('be.enabled').type('dikshkatna912@gmail.com')
    //cy.get("[type='password']").type('diksha@12')
    //cy.get("[type='submit']").click()
    cy.get(':nth-child(2) > [width="80"] > a').click()
    //cy.get(".container-fluid>a").click()
    cy.get("[value='roundtrip']").should('be.visible').should('be.checked')
    //cy.get("[value='oneway']").should('be.visible').should('not.be.checked')
    cy.get("[value='oneway']").should('be.visible').should('not.be.checked').click()
    cy.get("[name='findFlights']").should('be.visible').click()
        })


    })