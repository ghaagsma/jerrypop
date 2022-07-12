import {
  MAIN_LOGO_NARROW_HEIGHT_PX,
  MAIN_LOGO_WIDE_HEIGHT_PX,
  WINDOW_BREAKPOINT_WIDTH_PX,
} from '../constants/kernel-fountain';
import BackgroundWordmark from './BackgroundWordmark';
import NavigationMenu from './NavigationMenu';
import PageHeading from './PageHeading';
import React from 'react';
import { lazyDangleRotation } from '../constants/css/rotation';
import logo from '../images/colonel.svg';
import styled from 'styled-components';

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledLogo = styled.img`
  ${lazyDangleRotation}
  cursor: pointer;
  height: ${MAIN_LOGO_WIDE_HEIGHT_PX}px;
  margin: 48px 0 -24px;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    height: ${MAIN_LOGO_NARROW_HEIGHT_PX}px;
  }
`;

const StyledParagraph = styled.p`
  margin: 12px;
  max-width: 600px;
`;

export default function Home({ theme, onToggleTheme }) {
  return (
    <StyledHome>
      <StyledLogo alt="Jerrypop logo" onClick={onToggleTheme} src={logo} />
      <BackgroundWordmark fillColor={theme.mainThemeMedium} />
      <PageHeading>Poppin’ off with Jerrypop</PageHeading>
      <StyledParagraph>
        Life is too short to not eat popcorn. Jerrypop is dedicated to
        handcrafting quality popcorn in San Francisco, California.
      </StyledParagraph>
      <NavigationMenu />
    </StyledHome>
  );
}
