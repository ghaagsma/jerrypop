// eslint-disable-next-line no-unused-vars
import { THEME } from '../theme';
import { WHITE } from '../color';
import { css } from 'styled-components';

/**
 * Be sure the styled component is passed a property named `theme` containing a
 * {@link THEME} instance.
 */
export const withTheme = css`
  background-color: ${({ theme }) => theme.mainThemeDark};
  color: ${WHITE};

  // '*' is necessary for Chrome
  *::selection {
    background-color: ${({ theme }) => theme.mainThemeMedium};
    color: ${({ theme }) => theme.textHighlight};
  }
`;
