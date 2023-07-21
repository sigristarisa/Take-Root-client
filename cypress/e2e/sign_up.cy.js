/* global cy */

describe("Sign up page", () => {
  const username = "melonade";
  const email = "melonandhoney@gmail.com";
  const password = "itsnotLemon";

  it("visits the sign up page", () => {
    cy.visit("/signup");
    cy.get("input[name=userName]").type(username);
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.get("input[name=confirmPassword]").type(password);
    cy.get("input[type=submit").click();
  });

  it("renders error message when username already used", () => {
    cy.visit("/signup");
    cy.get("input[name=userName]").type(username);
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.get("input[name=confirmPassword]").type(password);
    cy.get("input[type=submit").click();
    cy.get(".form__error").should("contain", "user name already in use");
  });
});
