import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <StyledHeader>React and Morty</StyledHeader>;
};

const StyledHeader = styled.h1`
  display: flex;
  height: 70px;
  justify-content: center;
  background-color: green;
  color: white;
  align-items: center;
  border: 2px black solid;
  margin-bottom: 1em;
  margin-top: 0;
`;

export default Header;
