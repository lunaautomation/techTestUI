import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I navigate to Google", () => {
  cy.visit("/");
  cy.get("button").contains("Accept all").click(); // Clicks the "Accept" button on the popup
});

When("I search for {word}", (word: string) => {
  cy.get("form").find("textarea").type(`${word}{enter}`);
});

Then("I expect to see results for {word}", (word: string) => {
  cy.get("#result-stats").should("be.visible");
  cy.get("#main").contains(word);
});
