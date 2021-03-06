class LoginPage

{
    visit()
        {
            cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        }

        fillEmail(value)
        {
              const field=cy.get('#Email').clear()
              field.clear()
              field.type(value)
              return this
        }
        fillPassword(value)
        {
              const field=cy.get('#Password').clear()
              field.clear()
              field.type(value)
              return this
        }

        submit()
        {
         const  button= cy.get("[type='submit']")
         button.click()
        }
    }

        export default LoginPage
