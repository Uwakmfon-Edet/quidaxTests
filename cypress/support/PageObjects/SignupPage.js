const URL = "https://miro.com/";
const btn_signUp = "#Sign-up-free";
const txt_Name = "#name";
const txt_Email = "#email";
const txt_Password = "#password";
const chkbx_termsAndConditions =
  ":nth-child(1) > .mr-checkbox-1 > .mr-checkbox-1__wrap > .mr-checkbox-1__check";
const btn_getStarted = ".signup__submit";
const btn_signupGoogle = ".signup__btn-inner";
const txt_Code = "#code";

class SignupPage {
  static loadURL() {
    cy.visit(URL);
  }
  static verifyHomepage() {
    cy.get(btn_signUp).should("be.visible");
  }
  static getSignupButton() {
    return cy.get(btn_signUp);
  }
  static verifyFormPage() {
    cy.get(btn_signupGoogle).should("be.visible");
  }
  static getName() {
    return cy.get(txt_Name);
  }
  static getEmail() {
    return cy.get(txt_Email);
  }
  static getPAssword() {
    return cy.get(txt_Password);
  }
  static getTermsAndConditions() {
    return cy.get(chkbx_termsAndConditions);
  }
  static getSubmitButton() {
    return cy.get(btn_getStarted);
  }
  static verifysignup() {
    cy.get('h1').contains('Check your email')
    cy.get(txt_Code).should("be.visible");
  }
}
export default SignupPage;
