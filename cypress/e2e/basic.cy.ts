describe('Homepage smoke tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows the hero heading', () => {
    cy.contains('h1', 'Hello Astro + Tailwind').should('be.visible');
  });

  it('renders the primary navigation with correct destinations', () => {
    const expectedLinks = [
      { label: 'Advisory', path: '/advisory' },
      { label: 'Coaching', path: '/coaching' },
      { label: 'Library', path: '/library' },
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
    ];

    expectedLinks.forEach(({ label, path }) => {
      cy.get('header nav').contains('a', label).should('have.attr', 'href', path);
    });
  });

  it('includes footer with the current year', () => {
    const currentYear = new Date().getFullYear().toString();
    cy.get('footer').contains(currentYear).should('be.visible');
  });
});
