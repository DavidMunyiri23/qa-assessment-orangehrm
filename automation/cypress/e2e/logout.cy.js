describe('Logout Flow', () => {
  it('should successfully logout from dashboard', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')

    // Click user dropdown and logout
    cy.get('.oxd-userdropdown-tab').click()
    cy.contains('Logout').click()
    cy.url().should('include', '/auth/login')
  })
})