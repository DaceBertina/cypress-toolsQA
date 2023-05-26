import BasePage from "./Base.page";

class RadioButtonPage extends BasePage {
  static get url() {
    return "/radio-button";
  }

  static get yesRadioButton() {
    return cy.get("#yesRadio");
  }

  static get impressiveRadioButton() {
    return cy.get("#impressiveRadio");
  }

  static get noRadioButton() {
    return cy.get("#noRadio");
  }

  static get textSuccess() {
    return cy.get(".text-success");
  }
}

export default RadioButtonPage;
