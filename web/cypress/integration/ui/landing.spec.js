/// <reference types="cypress" />

context('Landing Page', () => {
  it('Acessar a página inicial com conexões realizadas', () => {
    cy.visit('/');

    cy.get('span.total-connections').should('contain.text', '5');
  });

  it('Acessar a página inicial sem conexões', () => {
    const total4Example = 999;

    // mocks
    cy.server();
    cy.route({
      method: 'GET',
      url: `**/connections`,
      response: { total: total4Example },
      status: 200
    }).as('GETConnections');

    cy.visit('/');

    cy.get('span.total-connections').should('contain.text', `${total4Example}`);
  });
});