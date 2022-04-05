import styled from 'styled-components';
import React from 'react';

const Card = ({ image, name }) => {
  return (
    <Wrapper>
      <ListItem>
        <img src={image} alt="Profile Img" />
        <h2>{name}</h2>
      </ListItem>
    </Wrapper>
  );
};

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  margin: 0.5em;
  list-style: none;
`;

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
`;

export default Card;
