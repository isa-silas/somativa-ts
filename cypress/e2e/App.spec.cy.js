describe("log in",() => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("Should not log in",() => {
        // testando se username e senha qualquer fazem mensagem correta aparecer
        cy.get('#username').type("test")
        cy.get('#password').type("test")
        cy.get('#password-warning').should('not.exist')
        cy.get('#logged').should('not.exist')
        cy.get('#submitted').should('not.exist')
        cy.get('form').submit()
        cy.get('#submitted').should('exist')

    })

    it("Should not log in and show password warning",() => {
        // testando se senha muito longa faz mensagem correta aparecer
        cy.get('#username').type("test")
        cy.get('#password').type("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        cy.get('#password-warning').should('not.exist')
        cy.get('#logged').should('not.exist')
        cy.get('#submitted').should('not.exist')
        cy.get('form').submit()
        cy.get('#password-warning').should('exist')
        cy.get('#logged').should('not.exist')
        cy.get('#submitted').should('not.exist')

    })

    it("Should log in as adm",() => {
        // testando se senha muito longa faz mensagem correta aparecer
        cy.get('#username').type("admin")
        cy.get('#password').type("admin123")
        cy.get('#password-warning').should('not.exist')
        cy.get('#logged').should('not.exist')
        cy.get('#submitted').should('not.exist')
        cy.get('form').submit()
        cy.get('#password-warning').should('not.exist')
        cy.get('#logged').should('exist')
        cy.get('#submitted').should('not.exist')

    })
})