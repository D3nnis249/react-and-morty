import React from 'react';
import styled from "styled-components";

const Navigation = () => {
  return (
    <StyledNavigation >
      <li>
        <StyledLink href="#">Homepage</StyledLink>
      </li>
      <li>
        <StyledLink href="#">Favorites</StyledLink>
      </li>
      <li>
        <StyledLink href="#">Random</StyledLink>
      </li>
    </StyledNavigation>
  );
};


const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  background-color: green;
  height: 70px;
  position: fixed;
  bottom: 0px;
  width: 100%;
  border: 2px black solid;

  
  
`;

const StyledLink = styled.a`
color: white;
text-decoration: none;
font-size: 1.5em;
`

export default Navigation;
