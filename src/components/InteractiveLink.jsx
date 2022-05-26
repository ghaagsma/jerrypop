import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import useInteraction from '../hooks/use-interaction';

const StyledLink = styled(Link)`
  align-items: center;
  background-color: #edeeff;
  border-radius: 4px;
  color: #222;
  cursor: pointer;
  display: flex;
  font-size: 36px;
  font-weight: bold;
  justify-content: center;
  letter-spacing: 0.25px;
  margin: 8px;
  padding: 24px;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: #222;
  }
`;

export default function InteractiveLink({
  className,
  defaultText,
  interactiveText,
  to,
}) {
  const [ref, isInteracting] = useInteraction();

  return (
    <StyledLink className={className} to={to} ref={ref}>
      {isInteracting ? interactiveText : defaultText}
    </StyledLink>
  );
}
