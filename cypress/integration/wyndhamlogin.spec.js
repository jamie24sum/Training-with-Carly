import {LoginPage} from "../Page objects/login-page";

it('Login users success', () => {
cy.visit("https://stage-clubwyndham.wyndhamdestinations.com/us/en/login");
const loginPage = new LoginPage();
loginPage.loginUsernamePassword("cwagold1", "test1234");
})
it('Login users fail', () => {
    cy.visit("https://stage-clubwyndham.wyndhamdestinations.com/us/en/login");
    const loginPage = new LoginPage();
    loginPage.loginUsernamePassword("cwagold1", "test");
    cy.get('.error-block').should('have.text','Username and Password combination is incorrect. Please try again. If you still have trouble, reset your password.');
    })