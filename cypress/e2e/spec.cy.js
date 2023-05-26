import TextBoxPage from "./pageObjects/TextBox.page";
import CheckBoxPage from "./pageObjects/CheckBox.page";
import RadioButtonPage from "./pageObjects/RadioButton.page";
import ButtonsPage from "./pageObjects/Buttons.page";

describe("DemoQA", () => {
  context("Textbox", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Textbox - positive case", () => {
      TextBoxPage.usernameField.type("Peter Pen");
      TextBoxPage.emailField.type("peter@gmail.com");
      TextBoxPage.currentAddressField.type("inMyBook");
      TextBoxPage.permanentAddressField.type("NeverTheLand");
      TextBoxPage.submitButton.click();
      //Validate that the values are correct
      TextBoxPage.nameInfo.should("have.text", "Name:Peter Pen");
      TextBoxPage.emailInfo.should("have.text", "Email:peter@gmail.com");
      TextBoxPage.currentAddressInfo.should(
        "contain.text",
        "Current Address :inMyBook"
      );
      TextBoxPage.permanentAddressInfo.should(
        "contain.text",
        "Permananet Address :NeverTheLand"
      );
    });

    it("Textbox -negative case", () => {
      TextBoxPage.emailField.type("peter.gmail.com");
      TextBoxPage.submitButton.click();
      TextBoxPage.errorField.should("be.visible");
      TextBoxPage.emailField.should("have.class", "field-error");
    });
  });

  context("Checkbox scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it("Check values", () => {
      //Click Expand button
      CheckBoxPage.expandButton.click();
      //Select values - Notes, Angular, Private, Excel File.doc
      CheckBoxPage.valueBox.contains("Notes").click();
      CheckBoxPage.valueBox.contains("Angular").click();
      CheckBoxPage.valueBox.contains("Private").click();
      CheckBoxPage.valueBox.contains("Excel File.doc").click();
      //Validate that information line contains the checked values
      CheckBoxPage.successText.should("contain.text", "notes");
      CheckBoxPage.successText.should("contain.text", "angular");
      CheckBoxPage.successText.should("contain.text", "private");
      CheckBoxPage.successText.should("contain.text", "excelFile");
    });

    it("Check value - Office", () => {
      //Click Expand button
      CheckBoxPage.expandButton.click();
      //Select value - Office
      CheckBoxPage.valueBox.contains("Office").click();
      //Validate - office, public, private, classified, general
      CheckBoxPage.successText.should("contain.text", "office");
      CheckBoxPage.successText.should("contain.text", "public");
      CheckBoxPage.successText.should("contain.text", "private");
      CheckBoxPage.successText.should("contain.text", "classified");
      CheckBoxPage.successText.should("contain.text", "general");
    });
  });

  context("Radio buttons scenarios", () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    });

    it("Click radio buttons", () => {
      //Click Yes button
      RadioButtonPage.yesRadioButton.click({ force: true });
      //cy.get("#yesRadio + label").click();
      //Validate - that Yes button is clicked
      RadioButtonPage.textSuccess.should("have.text", "Yes");
      //Click Impressive button
      RadioButtonPage.impressiveRadioButton.click({ force: true });
      //Validate that Impressive button is clicked
      RadioButtonPage.textSuccess.should("have.text", "Impressive");
      //Validate that No button is unclickable/disabled
      RadioButtonPage.noRadioButton.should(
        "have.class",
        "custom-control-input disabled"
      );
      RadioButtonPage.noRadioButton.should("be.disabled");
    });
  });

  context("Buttons", () => {
    beforeEach(() => {
      ButtonsPage.visit();
    });

    it("Clicking buttons", () => {
      //Click Double click me button
      ButtonsPage.doubleClickBtn.dblclick();
      //Validate the Double click message
      ButtonsPage.doubleClickMessage.should(
        "have.text",
        "You have done a double click"
      );

      //Click Right click me
      ButtonsPage.rightClickBtn.rightclick();
      //Validate the Right click message

      ButtonsPage.rightClickMessage.should(
        "have.text",
        "You have done a right click"
      );
      //Click Dynamic button
      //cy.get(".btn-primary").eq(2).click();
      //Regex looks excatly for that record
      ButtonsPage.allButtons.contains(/^Click Me$/).click();
      //Validate the Dynamic button click
      ButtonsPage.dynamicClickMessage.should(
        "have.text",
        "You have done a dynamic click"
      );
    });
  });
});
