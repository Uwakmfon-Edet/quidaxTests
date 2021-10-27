const link_alertandModals = ":nth-child(5) > [href='#']"
const link_bootstrapModals = ":nth-child(5) > ul > :nth-child(2) > a"
const btn_launchModalSingle = ":nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle='modal']"
const btn_launchModalMultiple = "[href='#myModal']"
const btn_saveChanges ="#myModal0 > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
const btn_launchModalInner = ".modal-body > .btn"
const btn_saveChanges1 = "#myModal2 > .modal-dialog > .modal-content > .modal-footer > .btn-primary"

class bootstrapModalsPage {
  static clickalertLink() {
    cy.get(link_alertandModals).click();
  }
  static clickBootstrapModals() {
    cy.get(link_bootstrapModals).click({force:true});
  }
  static loadSingleModal() {
    cy.get(btn_launchModalSingle).click();
  }
  static clickSaveChanges() {
    cy.get(btn_saveChanges).click();
  }

  static loadMultipleModalsl() {
    cy.get(btn_launchModalMultiple).click();
    cy.get(btn_launchModalInner).click();
    cy.get(btn_saveChanges1).click();
  }
}
export default bootstrapModalsPage;
