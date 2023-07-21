/* global cy */

describe("Sign up page", () => {
  it("visits the sign up page", () => {
    const username = "melonade";
    const email = "melonandhoney@gmail.com";
    const password = "itsnotLemon";

    cy.visit("/signup");
    cy.get("input[name=userName]").type(username);
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.get("input[name=confirmPassword]").type(password);
    cy.get("input[type=submit").click();
  });
});
