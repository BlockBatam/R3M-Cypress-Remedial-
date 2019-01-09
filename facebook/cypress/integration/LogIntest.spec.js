describe("Log In Page", () => {
    it('Navigate to fb site', () => {
        cy.visit('http://localhost:3000/login')
     
    })
    
    it('Login to application', () => {
        cy.contains('Facebook')
        cy.contains('Masuk')
        cy.get('#email').type("vanbolon@email.com")
        cy.get('#password').type("12345678")
        cy.get('#root > div > main > div > form > button').click()
    })
})