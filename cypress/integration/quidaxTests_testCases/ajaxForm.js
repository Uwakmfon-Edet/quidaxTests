import ajaxFormPage from "../../support/PageObjects/ajaxFormPage";

describe("Input Forms -> Ajax Form", function () {
  it("Verify user is on the home page", function () {
    ajaxFormPage.loadURL();
    ajaxFormPage.verifyLandingPage();
    ajaxFormPage.closePopup();
  });
  it("Click on Input Forms link", function () {
    ajaxFormPage.clickInputForm();
  });
  it("Click Ajax Form Submit", function () {
    ajaxFormPage.clickAjaxForm();
  });
  it("Fill form details and submit", function () {
    ajaxFormPage.enterName();
    ajaxFormPage.enterComment();
    ajaxFormPage.clickSubmit();
  });
  it("Verify form is submitted", function () {
    ajaxFormPage.verifySubmit();
  });
});
