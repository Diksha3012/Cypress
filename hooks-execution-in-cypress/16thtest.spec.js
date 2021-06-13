// <reference types="cypress"/>

describe('Hooks',function () 
{
    before(function()
    {
        //runs before all tests in the block
        cy.log('This is setup block')
    })

    after(function()
    {
        //runs after all the tests in the block
        cy.log('This is teardown block')
    })

    beforeEach(function()
    {
        //runs before each test in the block
        cy.log('This is login block')
    })

    afterEach(function()
    {
        //runs after each test in the block
        cy.log('This is logout block')
    })


    it('searching',function()
    {   
    cy.log('This is searching text')
    })

    it('advance_searching',function()
    {

    cy.log('this is advance searching')
    })

    it('Listung_products',function()
    {
    cy.log('this is product listing')

    })


  

})