import { getFluidFontSizeStyle } from '../utilities/Style';
import styled from 'styled-components';

export const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;

export const StyledLogo = styled.img`
  animation: rotation 3s infinite ease-in-out;
  height: 40vmin;
  margin: 48px 12px 24px;
  pointer-events: none;

  @keyframes rotation {
    0%,
    100% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(2deg);
    }
  }
`;

export const StyledContent = styled.p`
  ${getFluidFontSizeStyle(13, 16)}
  margin: 12px 12px 30px;
`;

export const StyledHeading = styled.h1`
  ${getFluidFontSizeStyle(24, 78)}
  margin: 0 12px;
  text-transform: uppercase;
`;
