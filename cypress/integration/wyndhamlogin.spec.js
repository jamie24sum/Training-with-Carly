/// <reference types="cypress" />
import { invalidUser, silverVip } from "../fixtures/testusers_stackb";
import { LoginPage } from "../Page objects/login-page";

describe("Verify Login Page", () => {
    const loginPage = new LoginPage();

    // beforeEach(() => {
    //     cy.visit("https://qa-clubwyndham.wyndhamdestinations.com/us/en/login");
    //     loginPage.clickCookieBannerAcceptButton()
    //     loginPage.changeAPI()
    // })
const{baseUrl}= Cypress.config()
    it('Login users success', () => {
        cy.visit(`${baseUrl}`)
        loginPage.loginUsernamePassword(silverVip);
        cy.wait(20000);
        loginPage.loginSuccessDashboard();
    })
    
    it.skip('Login users fail', () => {
        loginPage.loginUsernamePassword(invalidUser);
        cy.get('.error-block').should('have.text', 'Username and Password combination is incorrect. Please try again. If you still have trouble, reset your password.');
    })
})

