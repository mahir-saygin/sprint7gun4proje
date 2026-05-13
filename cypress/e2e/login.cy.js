describe('describe E2E testing', () => {
  it('wrong email test', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-cy="input-email"]').type("deneme");
    cy.contains("Please enter a valid email address");
    cy.get('[class="invalid-feedback"]').should('have.length', '1');
    cy.get('[data-cy="input-password"]').type("12").blur()
cy.contains(/password.*4/i)
cy.get('[data-cy="input-password"]');
cy.contains("Password must be at least 4 characters long").should('have.length', '1');
cy.get('[data-cy="input-button"]').should('be.disabled');
  });

  it('wrong email test and password test', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-cy="input-email"]').type("deneme");
    cy.get('[data-cy="input-password"]').type("1");
    cy.contains("Password must be at least 4 characters long");
    cy.get('[class="invalid-feedback"]').should('have.length', '2');
    
  });

  it('no terms selected', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-cy="input-email"]').type("deneme");
    cy.get('[data-cy="input-password"]').type("1");
    cy.contains("Password must be at least 4 characters long");
    cy.get('[class="invalid-feedback"]').should('have.length', '0');
    
  })

})