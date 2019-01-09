describe("Aplikasi Musik Page", () => {
    it('Succesfully go to Musik Page', () => {
        cy.visit('http://localhost:3000')
    })

    it('Go to Aplikasi', () => {
        cy.get('h1').contains('Aplikasi Music')
        cy.get('h3').contains('Add To MyPlaylist')
        cy.get('#root > div > div > form > input.form-control')
        .type('Justin beiber -Baby')
        cy.get('form > .btn').click()
        cy.get('#root > div > div > form > input.form-control')
        .type('Ungu-Demi Waktu')
        cy.get('form > .btn').click()
        cy.get('#root > div > div > form > input.form-control')
        .type('Afgan-Sadis')
        cy.get('form > .btn').click()
        cy.get('#root > div > div > form > input.form-control')
        .type('All Artis-Rayuan Pulau Kelapa')
        cy.get('form > .btn').click()
        

    })
    it('Go to Edit List', () => {
        cy.get('button').contains('Hapus').click()
        cy.get('button').contains('Hapus').click()

        
    })
})