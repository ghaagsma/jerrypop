import InteractiveLink from '../components/InteractiveLink';
import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const StyledLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;
`;

const StyledLink = styled(InteractiveLink)`
  height: 150px;
  width: 300px;
`;

export default function NavigationMenu() {
  const { pathname } = useLocation();

  return (
    <StyledLinks>
      {pathname !== '/' && (
        <StyledLink
          defaultText="🍿 Home 🍿"
          interactiveText="🏠 Home 🏠"
          to="/"
        />
      )}
      {pathname !== '/purchase' && (
        <StyledLink
          defaultText="🍿 Purchase 🍿"
          interactiveText="💥 Purchase 💥"
          to="/purchase"
        />
      )}
      {pathname !== '/recipes' && (
        <StyledLink
          defaultText="🍿 Recipes 🍿"
          interactiveText="🧑‍🍳 Recipes 🧑‍🍳"
          to="/recipes"
        />
      )}
    </StyledLinks>
  );
}
