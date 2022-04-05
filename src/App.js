import './App.css';
import Header from './components/Header';
import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Card from './components/Card';

function App() {
  const [characters, setCharacters] = useState([]);
  const url = 'https://rickandmortyapi.com/api/character/';

  const loadCharacters = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  };

  useEffect(() => {
    loadCharacters();
  }, []);
  return (
    <div>
      <Header />
      {characters.map(character => (
        <Card
          key={character.id}
          image={character.image}
          name={character.name}
        />
      ))}
      <Navigation />
      );
    </div>
  );
}

export default App;
