import {
  DIALOG_BACKDROP,
  ICON_HOVER_BACKGROUND,
  WHITE,
} from '../constants/color';
import { DIALOG_BACKDROP_Z_INDEX, DIALOG_Z_INDEX } from '../constants/z-index';
import React from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../hooks/use-window-size';
import { withBoxShadow } from '../constants/css/shadow';

const VERTICAL_MARGIN_PX = 24;
const HORIZONTAL_MARGIN_PX = 12;
const MINIMUM_DIALOG_HEIGHT = 150;

interface StyledDialogProps {
  dialogHeight: number;
  dialogWidth: number;
}

const StyledDialog = styled.dialog<StyledDialogProps>`
  ${withBoxShadow}
  background-color: ${WHITE};
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: ${({ dialogHeight }) => dialogHeight}px;
  left: 50vw;
  margin-left: ${({ dialogWidth }) => (-1 * dialogWidth) / 2}px;
  padding: 0;
  position: fixed;
  top: ${VERTICAL_MARGIN_PX}px;
  width: ${({ dialogWidth }) => dialogWidth}px;
  z-index: ${DIALOG_Z_INDEX};
`;

const StyledDialogHeader = styled.header`
  align-items: flex-end;
  background-color: var(--main-theme-dark);
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: column;
`;

const StyledCloseButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: var(--theme-text-on-dark);
  cursor: pointer;
  display: flex;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
  height: 36px;
  justify-content: center;
  margin: 8px;
  padding: 0;
  width: 36px;

  &:hover,
  &:focus {
    background-color: ${ICON_HOVER_BACKGROUND};
  }
`;

const StyledDialogBackdrop = styled.div`
  background-color: ${DIALOG_BACKDROP};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${DIALOG_BACKDROP_Z_INDEX};
`;

interface Props {
  onCloseOrderOnlineDialog: () => void;
}

const OrderFormDialog: React.FC<Props> = ({ onCloseOrderOnlineDialog }) => {
  const { innerHeight, innerWidth } = useWindowSize();
  const dialogHeight = Math.max(
    innerHeight - 2 * VERTICAL_MARGIN_PX,
    MINIMUM_DIALOG_HEIGHT,
  );
  const defaultWidth = 600;
  const dialogWidth = Math.min(
    innerWidth - 2 * HORIZONTAL_MARGIN_PX,
    defaultWidth,
  );
  // Buffer accounts for close button height + margin, bottom dialog margin.
  const verticalBufferPx = 64;
  const formHeight = dialogHeight - verticalBufferPx;

  return (
    <>
      <StyledDialog
        dialogHeight={dialogHeight}
        dialogWidth={dialogWidth}
        open={true}
      >
        <StyledDialogHeader>
          <StyledCloseButton
            aria-label="Close"
            onClick={onCloseOrderOnlineDialog}
          >
            ✕
          </StyledCloseButton>
        </StyledDialogHeader>
        <iframe
          frameBorder="0"
          height={formHeight}
          marginHeight={0}
          marginWidth={0}
          src="https://docs.google.com/forms/d/e/1FAIpQLSdXm4aTzZVHn5RIYhC1xLy-MNtyRxohuU2tZCH-TPnU8GqGHw/viewform?embedded=true"
          title="Jerrypop Order Form"
          width={dialogWidth}
        >
          Loading…
        </iframe>
      </StyledDialog>
      <StyledDialogBackdrop onClick={onCloseOrderOnlineDialog} />
    </>
  );
};

export default OrderFormDialog;