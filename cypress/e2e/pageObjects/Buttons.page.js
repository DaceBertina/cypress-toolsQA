import BasePage from "./Base.page";

class ButtonsPage extends BasePage {
  static get url() {
    return "/buttons";
  }

  static get doubleClickBtn() {
    return cy.get("#doubleClickBtn");
  }

  static get rightClickBtn() {
    return cy.get("#rightClickBtn");
  }

  static get allButtons() {
    return cy.get(".btn-primary");
  }

  static get doubleClickMessage() {
    return cy.get("#doubleClickMessage");
  }

  static get rightClickMessage() {
    return cy.get("#rightClickMessage");
  }

  static get dynamicClickMessage() {
    return cy.get("#dynamicClickMessage");
  }
}

export default ButtonsPage;
