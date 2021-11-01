describe('renders the home page', () => {
  it('navbar renders', () => {
    cy.visit('/');
    cy.get('#navbar').should('exist');
  });
  it('navbar links can be clicked', () => {
    cy.visit('/');

    cy.get('[href="/home"] > li').click();
    cy.get('[href="/about"] > li').click();
    cy.get('[href="/local/weather"] > li').click();
    cy.get('[href="/foreign/weather?lat=12.0464&lon=77.0428"] > li').click();
  });
  it('Content should exist', () => {
    cy.get('h1').should('be.visible');
    cy.get('#root > :nth-child(2) > :nth-child(2)').should('be.visible');
    cy.get('#root > :nth-child(2) > :nth-child(3)').should('be.visible');
  });
  it('Find content', () => {
    cy.get('h1').should('have.text', 'Todays Weather in:');
    cy.get('#root > :nth-child(2) > :nth-child(2)').should(
      'have.text',
      'Local Temperature is:'
    );
    cy.get('#root > :nth-child(2) > :nth-child(3)').should(
      'have.text',
      'Current Conditions are:'
    );
  });
});
