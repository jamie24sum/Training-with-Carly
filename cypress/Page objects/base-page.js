export class BasePage {
    verifyCookieBannerDisplayed() {
        cy.get(':nth-child(4) > .scrollMargin > .grid-container > .grid-x') 
    }

    clickCookieBannerAcceptButton() {
        cy.get(':nth-child(4) > .scrollMargin > .grid-container > .grid-x > .large-2 > .button').click()
    }
   changeAPI() {
    cy.get('#chg-session-api').click()
    cy.get('#session-api-selector').select('consumerapiqa.wvc.wyndhamdestinations.com')
    cy.reload()

   }
}