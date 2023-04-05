import React from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../hooks/use-window-size';

const StyledIframe = styled.iframe`
  border: none;
`;

interface Props {
  allowFullScreen?: boolean;
  defaultHeightPx: number;
  defaultWidthPx: number;
  loading?: 'lazy' | 'eager';
  sideMarginPx?: number;
  src: string;
  title: string;
}

/**
 * Component to render an iframe element with a fixed aspect ratio that is
 * responsive based on inner window width.
 */
const ResponsiveIframe: React.FC<Props> = ({
  defaultHeightPx,
  defaultWidthPx,
  sideMarginPx = 12,
  ...props
}) => {
  const aspectRatio = defaultWidthPx / defaultHeightPx;
  const windowSize = useWindowSize();
  const width = Math.min(
    defaultWidthPx,
    windowSize.innerWidth - 2 * sideMarginPx,
  );
  const height =
    width === defaultWidthPx ? defaultHeightPx : Math.ceil(width / aspectRatio);

  return <StyledIframe height={height} width={width} {...props} />;
};

export default ResponsiveIframe;
