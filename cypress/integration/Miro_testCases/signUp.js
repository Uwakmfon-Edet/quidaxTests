import SignupPage from "../../support/PageObjects/SignupPage";

describe("Miro SignUp Tests ", function () {
  let data;
  before(function () {
    cy.fixture("miroTestData").then(function (testData) {
      data = testData;
      return data;
    });
  });
  it("should verify user is on the home page", function () {
    SignupPage.loadURL();
    SignupPage.verifyHomepage();
  });
  it("should click on the signup button", function () {
    SignupPage.getSignupButton().click();
  });
  it("should fill the form details and submit", function () {
    SignupPage.verifyFormPage();
    SignupPage.getName().type(data.name);
    SignupPage.getEmail().type(data.email + Math.floor(Math.random() * 100) + "@gmail.com");
    SignupPage.getPAssword().type(data.password);
    SignupPage.getTermsAndConditions().click();
    SignupPage.getSubmitButton().click();
  });
  it("should send a confirmation token", function () {
    SignupPage.verifysignup();
  });
});
