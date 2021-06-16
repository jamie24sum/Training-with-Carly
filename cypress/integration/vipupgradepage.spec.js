import {BasePage} from "../Page objects/base-page";
import {LoginPage} from "../Page objects/login-page";


// Login to site
// Dashboard - enter location and dates - Click Search Availability
// Select resort card - Expand Rates and Availbility list 
// Select Book 
// VIP Upgrades page displayed 


it('VIP Upgrade Page Displayed', () => {
    cy.visit("https://qa-clubwyndham.wyndhamdestinations.com/us/en/login");
    const loginPage = new LoginPage();
    loginPage.clickCookieBannerAcceptButton();


})