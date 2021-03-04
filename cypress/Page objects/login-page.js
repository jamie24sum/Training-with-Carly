export class LoginPage {
    loginUsernamePassword(username, password) {
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('.text-primary > .button').click()
    }
}
