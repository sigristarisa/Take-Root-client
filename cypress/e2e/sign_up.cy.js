/* global cy */

describe("Sign up page", () => {
  const username = "meloneneeen";
  const email = "melonandhoneydeeeew@gmail.com";
  const password = "itsnotLemon";
  beforeEach(() => {
    cy.visit("/signup");
  });

  it("sucessfully signs up and takes to main page", () => {
    cy.get("input[name=userName]").type(username);
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.get("input[name=confirmPassword]").type(password);
    cy.get("form").submit();
    cy.get("h1").should("contain", username);
  });

  // it("renders error message when username already used", () => {
  //   cy.visit("/signup");
  //   cy.get("input[name=userName]").type(username);
  //   cy.get("input[name=email]").type("melonade@mail.com");
  //   cy.get("input[name=password]").type(password);
  //   cy.get("input[name=confirmPassword]").type(password);
  //   cy.get("form").submit();
  //   cy.get(".form__error").should("contain", "user name already in use");
  // });

  // it("renders error message when email already used", () => {
  //   cy.visit("/signup");
  //   cy.get("input[name=userName]").type("melonHead");
  //   cy.get("input[name=email]").type(email);
  //   cy.get("input[name=password]").type(password);
  //   cy.get("input[name=confirmPassword]").type(password);
  //   cy.get("input[type=submit").click();
  //   cy.get(".form__error").should("contain", "email already in use");
  // });
});
