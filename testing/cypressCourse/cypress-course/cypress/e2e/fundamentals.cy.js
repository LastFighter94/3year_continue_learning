describe('fundamentals test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })
  it('contains correct text', () => {
    cy.getDataTest('fundamentals-header').contains(/Testing Fundamentals/i)
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
  })

  it('accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})
