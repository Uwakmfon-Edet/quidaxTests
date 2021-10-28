const link_listBox = ":nth-child(6) > [href='#']";
const link_bootstrapList = ":nth-child(6) > ul > :nth-child(1) > a"
const btn_lisItemadd1 = ".list-left > .well > .list-group > :nth-child(1)"
const btn_lisItemadd2 = ".list-left > .well > .list-group > :nth-child(2)"
const btn_lisItemRemove1 = ".list-right > .well > .list-group > :nth-child(1)"
const btn_lisItemRemove2 = ".list-right > .well > .list-group > :nth-child(2)"
const arrow_add = ".move-right"
const arrow_remove = ".move-left"

class bootstrapListPage {
  static clickListbo() {
    cy.get(link_listBox).click()
  }
  static clickBootstraplist() {
    cy.get(link_bootstrapList).click()
  }
  static addListElements() {
    cy.get(btn_lisItemadd1).click()
    cy.get(btn_lisItemadd2).click()
    cy.get(arrow_add).click()
  }
  static removeListElements() {
    cy.get(btn_lisItemRemove1).click()
    cy.get(btn_lisItemRemove2).click()
    cy.get(arrow_remove).click()
  }
}
export default bootstrapListPage;
