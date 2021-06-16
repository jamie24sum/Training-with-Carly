import {BasePage} from "../Page objects/base-page";
import {TestUsersStackB} from "../fixtures/testusers_stackb";

export class LoginPage extends BasePage {
    loginUsernamePassword(TestUsersStackB) {
        cy.get('#username').type(TestUsersStackB.username)
        cy.get('#password').type(TestUsersStackB.password)
        cy.get('.text-primary > .button').click()
    }

    loginSuccessDashboard(){
        cy.get('.small-8 > .h5').contains('WELCOME');
    }
}

