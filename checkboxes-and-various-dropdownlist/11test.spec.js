/// <reference types="cypress" />


describe('GUI element2',function () 
{
     it('checkbox_dropdownlist',function()
      
     { 
    
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')
    
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        //rather than writing multiple statement we can write a single statement because input type "checkbox" is same for everyone and values are different

        cy.get("input[type=checkbox]").check(['Cricket','Movies'])
     })

     it('skills_dropdown',function()
      
     { 
    cy.get('#Skills').select('Android').should('have.value','Android')
        
     })

     it('language_dropdown',function()
      
     { 
    cy.get('#msdd').click()
    cy.get('.ui-corner-all').contains('English').click()
    cy.get('.ui-corner-all').contains('Danish').click()
    
        
     })
     it('Select_Country_dropdown',function()
        
     { 
    cy.get("[role='combobox']").click({force:true})
    cy.get('.select2-search__field').type('India')
    //another way to use "enter"
    cy.get('.select2-search__field').type('{enter}')
     })
    })