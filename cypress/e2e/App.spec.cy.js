describe("log in",() => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("Should log in",() => {
        // testando se a mensagem de fato só aparece após o login
        cy.get('#username').type("test")
        cy.get('#logged').should('not.exist')
        cy.get('form').submit()
        cy.get('#logged').should('exist')
    })
})