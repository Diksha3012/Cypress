


describe('Mytestsuite',function()
    {
        it('testcase1',function()
               {
               cy.visit('https://www.javatpoint.com/')          
               
               cy.root().should('match','html')
              
               
 

                       })
    })
    it('testcase2',function()
    {
        cy.window()
        cy.document()
        
        cy.debug().getCookie('dikshakatna912@gmail.com')
        cy.clearLocalStorage()
        cy.clock()
    cy.visit('https://www.opencart.com/')
    cy.get('.btn-link').click().as('sign in')
    cy.get('#input-email').type('dikshakatna912@gmail.com').focus().blur()
    cy.get('#input-password').type('diksha@12').debug()
    cy.get(':nth-child(1) > .hidden-xs').dblclick()
   cy.clearCookie('dikshakatna912@gmail.com')


    })