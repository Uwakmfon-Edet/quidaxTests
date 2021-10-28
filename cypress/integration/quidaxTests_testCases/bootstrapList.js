import ajaxFormPage from "../../support/PageObjects/ajaxFormPage";
import bootstrapListPage from "../../support/PageObjects/bootstrapListPage";

describe("List Box -> Bootstrap List Box", function () {
  it("Verify user is on the home page", function () {
    ajaxFormPage.loadURL();
    ajaxFormPage.verifyLandingPage();
    ajaxFormPage.closePopup();
  });
  it("Clicks on List Box", function () {
    bootstrapListPage.clickListbo();
  });
  it("Clicks Bootstrap List Box", function () {
    bootstrapListPage.clickBootstraplist();
  });
  it("Adds List Items", function () {
    bootstrapListPage.addListElements();
  });
  it("Removes List Items", function () {
    bootstrapListPage.removeListElements();
  });
});
