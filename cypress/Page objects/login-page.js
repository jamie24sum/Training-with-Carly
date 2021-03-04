export class LoginPage {
    loginUsernamePassword(username, password) {
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('.text-primary > .button').click()
    }

    loginSuccessDashboard(){
        cy.get('.small-8 > .h5').should('have.text','WELCOME BACK,');
    }
}

