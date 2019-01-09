describe("Facebook Page", function() {
    it('successfully', function()  {
        cy.visit('http://localhost:3000')
    })

    it('Facebook', () => {
        cy.get('h').contains('Facebook').click()
        cy.visit('http://localhost:3000/login')
    })

    it('my newsfeed', () => {
        cy.get('button')
        .contains('my newsfeed').click()
        cy.visit('http://localhost:3000/mynewsfeed')
    })
  


    it('my photo', () => {
        cy.get('button').contains('my photo').click()
        cy.visit('http://localhost:3000/myphoto')
    })

    it('Home',() => {
        cy.get('button').contains('Home').click()
        cy.visit('http://localhost:3000/Home')
    })
})