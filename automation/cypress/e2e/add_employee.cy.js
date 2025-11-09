describe('Add Employee Test', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
  })

  it('should add a new employee successfully', () => {
    cy.contains('PIM').click()
    cy.contains('Add Employee').click()
    cy.get('input[name="firstName"]').type('John')
    cy.get('input[name="lastName"]').type('Doe')
    cy.get('button[type="submit"]').click()
    cy.contains('Successfully Saved').should('exist')
  })
})