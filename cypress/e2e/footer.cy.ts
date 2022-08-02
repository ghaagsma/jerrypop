import { RoutePath } from '../types/route-path';
import { verifyThemeToggle } from '../utilities/theme-toggle';

describe('footer tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Home);
  });

  it('displays the appropriate footer content', () => {
    cy.get('footer p').should(
      'have.text',
      `© ${new Date().getFullYear()} Jerrypop, LLC`,
    );
    cy.get('button[aria-label="Toggle color scheme"]').should('have.length', 1);
    cy.get('footer')
      .find('a')
      .eq(0)
      .should('have.attr', 'href', 'https://www.facebook.com/craftpopcorn/');
    cy.get('footer')
      .find('a')
      .eq(1)
      .should('have.attr', 'href', 'https://www.instagram.com/craftpopcorn/');
    cy.get('footer')
      .find('a')
      .eq(2)
      .should(
        'have.attr',
        'href',
        'https://www.youtube.com/channel/UC_3oErdLxGZgeTf8nrwsD3A',
      );
  });

  it('toggles the website theme on toggle button click', () => {
    verifyThemeToggle('button[aria-label="Toggle color scheme"]');
  });
});
