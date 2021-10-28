import ajaxFormPage from "../../support/PageObjects/ajaxFormPage";
import bootstrapModalsPage from "../../support/PageObjects/bootstrapModalsPage";

describe("Alerts and Modals -> Bootstrap Modals", function () {
  it("Verify user is on the home page", function () {
    ajaxFormPage.loadURL();
    ajaxFormPage.verifyLandingPage();
    ajaxFormPage.closePopup();
  });
  it("Clicks Alerts and Modals", function () {
    bootstrapModalsPage.clickalertLink();
  });
  it("Clicks Bootstrap Modals", function () {
    bootstrapModalsPage.clickBootstrapModals();
  });
  it("Loads single Bootstrap Modal", function () {
    bootstrapModalsPage.loadSingleModal();
    bootstrapModalsPage.clickSaveChanges();
  });
  it("Loads multiple Bootstrap Modal", function () {
    bootstrapModalsPage.loadMultipleModalsl();
  });
});
