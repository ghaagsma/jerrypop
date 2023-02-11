// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';

Cypress.on('uncaught:exception', (err, _runnable) => {
  if (err.message.includes('ResizeObserver loop limit exceeded')) {
    /**
     * Ignores benign errors introduced by
     * [#197](https://github.com/ghaagsma/jerrypop/pull/197).
     */
    return false;
  }

  /**
   * No return statement, so that other unexpected errors still cause test
   * failures.
   */
});
