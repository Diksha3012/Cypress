/// <reference types="cypress" />
describe('handling GUI elements',function () 
{
     it('verify elements',function()
      
     { 

     
    cy.root()
    cy.visit("http://demo.guru99.com/test/newtours/")
    
    cy.get(':nth-child(2) > [width="80"] > a').click()
   
    cy.get("[value='roundtrip']").should('be.visible').should('be.checked')
    //cy.get("[value='oneway']").should('be.visible').should('not.be.checked')
    cy.get("[value='oneway']").should('be.visible').should('not.be.checked').click()
    cy.get("[name='findFlights']").should('be.visible').click()
        })


    })
