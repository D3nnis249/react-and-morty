import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <h1>React and Morty</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  height: 70px;
  justify-content: center;
  background-color: green;
  color: white;
  align-items: center;
  border: 2px black solid;
  margin-bottom: 1em;
`;

export default Header;
