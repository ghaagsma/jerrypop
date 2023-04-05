import React from 'react';
import styled from 'styled-components';
import { BACKGROUND_IMAGE_Z_INDEX } from '../constants/z-index';

const StyledWaveContainer = styled.div<{ heightPx: number }>`
  height: ${({ heightPx }) => heightPx}px;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: ${BACKGROUND_IMAGE_Z_INDEX};
`;

const StyledWave = styled.div<Props>`
  background-color: ${({ color }) => color};
  border-radius: 100%;
  height: ${({ heightPx }) => 4 * heightPx}px;
  right: -28%;
  position: absolute;
  top: -${({ heightPx }) => 2 * heightPx}px;
  width: 80%;
`;

interface Props {
  backgroundColor: string;
  color: string;
  heightPx: number;
}

const WaveBackground: React.FC<Props> = ({
  backgroundColor,
  color,
  heightPx,
  ...props
}) => {
  return (
    <StyledWaveContainer aria-hidden="true" heightPx={heightPx} {...props}>
      <StyledWave
        backgroundColor={backgroundColor}
        color={color}
        heightPx={heightPx}
      />
    </StyledWaveContainer>
  );
};

export default WaveBackground;
