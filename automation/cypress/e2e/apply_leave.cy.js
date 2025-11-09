describe('Apply Leave Test', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
  })

  it('should apply for leave successfully', () => {
    cy.contains('Leave').click()
    cy.contains('Apply').click()

    // Select leave type
    cy.get('.oxd-select-text-input').first().click()
    cy.contains('CAN - FMLA').click()

    // Pick date range
    cy.get('input[placeholder="yyyy-mm-dd"]').first().clear().type('2025-11-10')
    cy.get('input[placeholder="yyyy-mm-dd"]').eq(1).clear().type('2025-11-10')

    // Add comment
    cy.get('textarea').type('Medical leave')

    // Submit
    cy.get('button[type="submit"]').click()

    // Verify confirmation
    cy.contains('Successfully Saved').should('exist')
  })
})
