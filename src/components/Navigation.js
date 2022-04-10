import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = ({ setToSites }) => {
  return (
    <StyledNavigation>
      <StyledLink>
        <LinkStyling onClick={setToSites} to="/">
          Home
        </LinkStyling>
      </StyledLink>
      <StyledLink>
        <LinkStyling to="/random">Random</LinkStyling>
      </StyledLink>
      <StyledLink>
        <LinkStyling to="/favorites">Favorites</LinkStyling>
      </StyledLink>
    </StyledNavigation>
  );
};

const LinkStyling = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    color: orange;
  }
`;

const StyledNavigation = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  background-color: green;
  height: 75px;
  position: fixed;
  bottom: 0;
  width: 100%;
  border: 2px black solid;
  margin-bottom: 0;
`;

const StyledLink = styled.li`
  font-size: 1.5em;
`;

export default Navigation;
