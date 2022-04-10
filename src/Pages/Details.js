import Card from './../components/Card';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Details = ({ characters }) => {
  const { id } = useParams();
  const currentCharacter = characters.find(
    character => character.id === Number(id)
  );

  const [favoriteIDs, setFavoriteIDs] = useState(
    JSON.parse(localStorage.getItem('favoriteIDs')) || []
  );

  const toggleFavorites = ({}) => {
    if (favoriteIDs.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  function addFavorite(id) {
    setFavoriteIDs([...favoriteIDs, id]);
  }

  function removeFavorite(id) {
    const updatedFavoriteIDs = favoriteIDs.filter(
      favoriteID => favoriteID !== id
    );
    setFavoriteIDs(updatedFavoriteIDs);
  }

  useEffect(() => {
    localStorage.setItem('favoriteIDs', JSON.stringify(favoriteIDs));
  }, [favoriteIDs]);

  return (
    <Wrapper>
      {currentCharacter ? (
        <Card
          key={currentCharacter.id}
          id={currentCharacter.id}
          image={currentCharacter.image}
          name={currentCharacter.name}
          gender={currentCharacter.gender}
          species={currentCharacter.species}
          status={currentCharacter.status}
          location={currentCharacter.location.name}
          origin={currentCharacter.origin.name}
        ></Card>
      ) : (
        ''
      )}
      <FavoriteButton
        onClick={toggleFavorites}
        isFavorite={favoriteIDs.includes(id)}
      >
        Save as Favorites
      </FavoriteButton>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FavoriteButton = styled.button`
  padding: 10px;
  background-color: orange;
  box-shadow: 1px 1px 5px 1px;
  border-radius: 20px;
  font-size: 15px;
  background-color: ${props => (props.isFavorite ? 'green' : '')};
`;

export default Details;
