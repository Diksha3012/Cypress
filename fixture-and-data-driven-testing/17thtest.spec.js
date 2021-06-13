/// <reference types="cypress"/>

describe('Checking Fixture',function () 
{

    before(function()
    {
        
        cy.fixture('example.json').then(function(data)
                    {
                        this.data=data

                    })

    })
        it('fixture_testsuite',function()

    {

            cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
            cy.get('#Email').clear().type(this.data.email) 
            cy.get('#Password').clear().type(this.data.password)
            cy.get("[type='submit']").click()

    })




    //it('fixture_testsuite',function()

    //{

            //cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
            //cy.get('#Email').clear().type('admin@yourstore.com') //email
            //cy.get('#Password').clear().type('admin')
            //cy.get("[type='submit']").click()

   // })

})
