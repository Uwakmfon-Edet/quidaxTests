const URL = "https://demo.seleniumeasy.com/";
const btn_startPracticing = "#btn_basic_example";
const popup = ".at-cm-no-button";
const link_inputForms = ":nth-child(3) > :nth-child(1) > [href='#']";
const link_ajaxFormSubmit =
  ":nth-child(3) > :nth-child(1) > ul > :nth-child(6) > a";
const txt_Name = "#title";
const txt_Comment = "#description";
const btn_Submit = "#btn-submit";
const display_successMessage = "#submit-control";

class ajaxFormPage {
  static loadURL() {
    cy.visit(URL);
  }
  static verifyLandingPage() {
    cy.get(btn_startPracticing).should("be.visible");
  }
  static closePopup(){
    cy.get(popup).click();
  }
  static clickInputForm() {
    cy.get(link_inputForms).click();
  }
  static clickAjaxForm() {
    cy.get(link_ajaxFormSubmit).click();
  }
  static enterName() {
    cy.get(txt_Name).type("Test Name");
  }
  static enterComment() {
    cy.get(txt_Comment).type("Test Comment");
  }
  static clickSubmit() {
    cy.get(btn_Submit).click();
  }
  static verifySubmit() {
    cy.get(display_successMessage).should("be.visible");
    cy.get(display_successMessage).contains("Form submited Successfully!");
  }
}
export default ajaxFormPage;
