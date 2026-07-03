describe('Timeline Component Responsive and Scroll Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174/');
  });

  it('should display timeline content correctly on desktop', () => {
    cy.viewport(1280, 800); // Desktop viewport
    cy.get('h2').contains('My Work Experiences').should('be.visible');
    cy.get('.c-space.section-spacing').within(() => {
      cy.get('div').should('exist');
    });
    // Check desktop specific elements visible
    cy.get('.md\\:flex').should('be.visible');
    cy.get('.md\\:hidden').should('not.be.visible');
  });

  it('should display timeline content correctly on mobile', () => {
    cy.viewport(375, 667); // Mobile viewport
    cy.get('h2').contains('My Work Experiences').should('be.visible');
    // Check mobile specific elements visible
    cy.get('.md\\:hidden').should('be.visible');
    cy.get('.md\\:flex').should('not.be.visible');
  });

  it('should animate timeline progress on scroll', () => {
    cy.viewport(1280, 800);
    cy.scrollTo('bottom');
    cy.get('div.w-\\[2px\\]').should('have.css', 'opacity').and('not.eq', '0');
  });
});
