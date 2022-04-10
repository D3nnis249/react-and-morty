import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Favorites = ({ characters, favoriteIDs }) => {
  return (
    <Wrapper role="list">
      {characters
        .filter(character => favoriteIDs.includes(character.id))
        .map(character => (
          <Card
            key={character.id}
            id={character.id}
            img={character.image}
            name={character.name}
          />
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Favorites;
