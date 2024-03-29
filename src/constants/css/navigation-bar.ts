import { css } from 'styled-components';
import { NAVIGATION_BAR_Z_INDEX } from '../z-index';

export const NAVIGATION_BAR_STYLE = css`
  display: flex;
  z-index: ${NAVIGATION_BAR_Z_INDEX};
`;

export const NAVIGATION_BAR_CONTENT_STYLE = css`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const NAVIGATION_MENU_LIST_STYLE = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NAVIGATION_MENU_LINK_STYLE = css`
  cursor: pointer;
  display: block;
  letter-spacing: 0.25px;
  text-decoration: none;
  text-transform: uppercase;
`;

export const NAVIGATION_BAR_WORDMARK_LINK_STYLE = css`
  padding: 16px;
`;
