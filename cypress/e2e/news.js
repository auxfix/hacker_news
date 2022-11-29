/* eslint-disable jest/expect-expect */
describe('Hacker News ', () => {
  it('should have the correct tile', () => {
    cy.visit('/');

    cy.title().should('include', 'Hacker News');
  });

  it('should render hacker news', () => {
    cy.findByTestId('Loader').should('not.be.empty');

    cy.wait(4000);
    cy.get('[data-testid="NewsItem"]').should('have.length', 10);
  });

  it('should render hacker news afer update', () => {
    cy.findByTestId('button').should('have.text', 'Get more news').click();
    cy.findByTestId('Loader').should('not.be.empty');
    cy.wait(4000);
    cy.get('[data-testid="NewsItem"]').should('have.length', 10);
  });
});
