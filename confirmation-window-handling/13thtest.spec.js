/// <reference types="cypress"/>

describe('Pop_ups',function () 
{

it('confirmation_window',function()
{
cy.visit('http://testautomationpractice.blogspot.com/')
cy.get('#HTML9 > div.widget-content > button').click()
cy.on('window:confirm',(str)=>
{
    expect(str).to.equal('Press a button!')
})

})

})