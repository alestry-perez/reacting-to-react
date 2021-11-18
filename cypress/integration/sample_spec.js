describe('renders the home page', () => {
  // beforeEach(() => {
  //   cy.visit('/');
  // });

  it('user log in', () => {
    cy.visit('/');
    cy.get(
      '#page_x002e_components_x002e_slingshot-login_x0023_default-username'
    ).clear();
    cy.get(
      '#page_x002e_components_x002e_slingshot-login_x0023_default-username'
    ).type('alestry_perez');
    cy.get(
      '#page_x002e_components_x002e_slingshot-login_x0023_default-password'
    ).click();
    cy.get(
      '#page_x002e_components_x002e_slingshot-login_x0023_default-password'
    ).clear();
    cy.get(
      '#page_x002e_components_x002e_slingshot-login_x0023_default-password'
    ).type('eefcx0jr');
    cy.get(
      '#page_x002e_components_x002e_slingshot-login_x0023_default-submit-button'
    ).click();
  });
  // clicks on interns demo link
  it('clicks on interns demo link', () => {
    cy.get('body').should('exist');
    cy.url().should('include', '/dashboard');
  });
});
