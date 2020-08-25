/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

describe('Connections endpoint', () => {
  it('GET deve retornar status 200', () => {

    cy.api({
      method: 'GET',
      url: `${Cypress.env('API_URL')}/connections`
    }).then((connectionsResponse) => {
      expect(connectionsResponse.status).to.eq(200)
    })
  });
});