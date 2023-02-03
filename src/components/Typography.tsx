import styled, { css } from 'styled-components';
import {
  WITH_LOW_TEXT_SHADOW_STYLE,
  WITH_TEXT_SHADOW_STYLE,
} from '../constants/css/shadow';
import React from 'react';
import { WINDOW_BREAKPOINT_WIDTH_PX } from '../constants/breakpoint';

const headingStyle = css<{ hasTextShadow?: boolean }>`
  ${({ hasTextShadow }) => (hasTextShadow ? WITH_TEXT_SHADOW_STYLE : undefined)}
  text-transform: uppercase;
`;

const withDynamicStyles = css<{
  margin?: string;
  maxWidth?: string;
  textAlign?: string;
}>`
  margin: ${({ margin }) => margin};
  max-width: ${({ maxWidth }) => maxWidth};
  text-align: ${({ textAlign }) => textAlign};
`;

type TypeographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

interface Props {
  children: React.ReactNode;
  hasTextShadow?: boolean;
  margin?: string;
  maxWidth?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'inherit';
  type: TypeographyType;
}

type StyledTypography = Omit<Props, 'type'>;

const StyledH1 = styled.h1<StyledTypography>`
  ${headingStyle}
  ${withDynamicStyles}
  font-size: 78px;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    font-size: 48px;
  }
`;

const StyledH2 = styled.h2<StyledTypography>`
  ${headingStyle}
  ${withDynamicStyles}
  font-size: 36px;
`;

const StyledH3 = styled.h3<StyledTypography>`
  ${headingStyle}
  ${withDynamicStyles}
  font-size: 18px;
`;

const StyledH4 = styled.h4<StyledTypography>`
  ${headingStyle}
  ${withDynamicStyles}
  font-size: 14px;
`;

const StyledP = styled.p<StyledTypography>`
  ${withDynamicStyles}
  ${({ hasTextShadow }) =>
    hasTextShadow ? WITH_LOW_TEXT_SHADOW_STYLE : undefined}
  font-size: 16px;
  font-weight: 500;
`;

const Typography: React.FC<Props> = ({
  hasTextShadow = true,
  margin,
  type,
  ...props
}) => {
  switch (type) {
    case 'h1':
      return (
        <StyledH1
          hasTextShadow={hasTextShadow}
          margin={margin ?? '48px 12px 12px'}
          {...props}
        />
      );
    case 'h2':
      return (
        <StyledH2
          hasTextShadow={hasTextShadow}
          margin={margin ?? '36px 12px 12px'}
          {...props}
        />
      );
    case 'h3':
      return (
        <StyledH3
          hasTextShadow={hasTextShadow}
          margin={margin ?? '24px 12px 12px'}
          {...props}
        />
      );
    case 'h4':
      return (
        <StyledH4
          hasTextShadow={hasTextShadow}
          margin={margin ?? '18px 12px 12px'}
          {...props}
        />
      );
    case 'p':
    default:
      return (
        <StyledP
          hasTextShadow={hasTextShadow}
          margin={margin ?? '12px'}
          {...props}
        />
      );
  }
};

export default Typography;
