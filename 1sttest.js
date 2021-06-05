describe('Mytestsuite',function () 
{
     it('verifytitleofthepage',function()
        { 
           cy.root()
                     cy.visit('https://www.google.co.in')
                      cy.title().should('eq','Google')
                      
         })
})