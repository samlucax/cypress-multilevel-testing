/// <reference types="cypress" />

import React from 'react';

import PageHeader from '../../src/components/PageHeader';
import { mount } from 'cypress-react-unit-test';

import { BrowserRouter as Router } from 'react-router-dom'

describe('PageHeader component', () => {
  const baseUrl = '/__root/src/assets/styles/global.css'
  const indexUrl = '/__root/src/components/PageHeader/styles.css'

  it('deve ser renderizado com sucesso', () => {
    mount(
      <Router>
        <PageHeader 
          title="QArentena 44"
          description="Trocando uma ideia sobre Cypress de ponta a ponta"
        />
      </Router>
      ,
      {
        stylesheets: [baseUrl, indexUrl]
      }
    )

    cy.get('strong').should('have.text', 'QArentena 44');

    cy.get('.header-content').as('header');
    cy.get('@header').find('strong').as('title');
    cy.get('@header').children('p').as('description');

    cy.get('@title').should('have.text', 'QArentena 44');
    cy.get('@description').should('have.text', 'Trocando uma ideia sobre Cypress de ponta a ponta');
  });
});












// react components
// componente -> menor unidade de uma interface
// peça de um quebra cabeça
// lego, com algumas peças mais versáteis -> propriedades do componente