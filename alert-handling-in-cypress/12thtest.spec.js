/// <reference types="cypress"/>

describe('GUI element2',function () 
{

it('Alert_handling',function()
{
   cy.visit('https://www.arwy.org/login.asp')

   cy.get("[type='submit']").click()

   cy.on('window:alert',(str)=>

{
   expect(str).to.equal('Please Enter User name.')
})





})

})
