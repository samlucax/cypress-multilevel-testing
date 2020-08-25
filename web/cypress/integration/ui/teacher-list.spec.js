/// <reference types="cypress" />

context('TeacherList', () => {
  it('Acessar a listagem de professores disponíveis ', () => {
    cy.visit('http://localhost:3000/study');
  });
});