describe('Test Admin DashBoard', () => {
  
  beforeEach(()=>{
    cy.visit('/')
  })

  it('Visits the initial project page', () => {
    cy.contains('Login')
  })

  it('should have correct labels', () => {
    cy.contains('label', 'Email')
    cy.contains('label', 'Password')
  })

  it('should login with email and password', function() {
    cy.get('input[formControlName=email]').type("admin@example.com")
    cy.get('input[formControlName=password]').type("admin123")
    cy.get('#loginBtn').click()
    cy.get('.navbar-nav li').should('have.length', 6)  
  });

  it('should redirect admin user to the dashboard page if they provided correct credentials', () => {
    cy.get('input[formControlName=email]').type("admin@example.com")
    cy.get('input[formControlName=password]').type("admin123")
    cy.get('#loginBtn').click()
    cy.url().should('be.equal', 'http://localhost:4200/users')
  })

})
