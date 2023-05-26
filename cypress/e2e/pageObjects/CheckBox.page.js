import BasePage from "./Base.page";

class CheckBoxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }

  static get expandButton() {
    return cy.get(".rct-option-expand-all");
  }

  static get valueBox() {
    return cy.get(".rct-title");
  }

  static get successText() {
    return cy.get(".text-success");
  }
}

export default CheckBoxPage;
