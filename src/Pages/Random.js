import React, { useState } from 'react';
import Card from '../components/Card';
import styled from 'styled-components';

const RandomPage = () => {
  const [randomCharacter, setRandomCharacter] = useState('');

  const rdmChar = () => {
    const url = `https://rickandmortyapi.com/api/character/`;
    const rdmId = Math.floor(Math.random() * 19) + 1;
    fetch(url + rdmId)
      .then(response => response.json())
      .then(data => setRandomCharacter(data));
  };

  return (
    <Wrapper>
      <AllButtons
        onClick={() => {
          rdmChar();
        }}
      >
        Get a random Character
      </AllButtons>

      {randomCharacter ? (
        <Card
          key={randomCharacter.id}
          id={randomCharacter.id}
          img={randomCharacter.image}
          name={randomCharacter.name}
        />
      ) : (
        <>
          <p>Click the random Character button to get a new Card</p>
        </>
      )}
    </Wrapper>
  );
};

const AllButtons = styled.button`
  border: 2px solid black;
  border-radius: 5px;
  background-color: green;
  padding: 1em;
  text-decoration: none;
  color: white;
  font-size: 1em;
  margin-bottom: 2em;
`;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default RandomPage;
