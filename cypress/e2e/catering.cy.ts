import { RoutePath } from '../types/route-path';

describe('catering page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Catering);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Catering · Jerrypop');
  });
});
