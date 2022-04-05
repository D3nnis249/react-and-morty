import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const Card = () => {
  const [characters, setCharacters] = useState([]);
  const url = 'https://rickandmortyapi.com/api/character';

  const loadCharacters = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <Wrapper>
      <StyledCard>
        {characters.map(character => (
          <ListItem key={character.id}>
            <img src={character.image}></img>
            <h2>{character.name}</h2>
          </ListItem>
        ))}
      </StyledCard>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`;

const ListItem = styled.li`
  text-align: center;
  border: 2px solid black;
  margin: 1em;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  list-style: none;
`;

export default Card;
