import './App.css';
import Header from './components/Header';
import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Random from './Pages/Random';
import Details from './Pages/Details';

function App() {
  const [characters, setCharacters] = useState([]);
  const [favoriteIDs, setFavoriteIDs] = useState(() => {
    return JSON.parse(localStorage.getItem('favoriteIDs')) || [];
  });
  const url = 'https://rickandmortyapi.com/api/character/';

  const loadCharacters = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  };

  useEffect(() => {
    localStorage.setItem('favoriteIDs', JSON.stringify(favoriteIDs));
  }, [favoriteIDs]);

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home characters={characters} />} />
        <Route
          path="/Details/:id"
          element={
            <Details
              characters={characters}
              setFavoriteIDs={setFavoriteIDs}
              favoriteIDs={favoriteIDs}
            />
          }
        />
        <Route path="/random" element={<Random characters={characters} />} />
        <Route
          path="/favorites"
          element={
            <Favorites characters={characters} favoriteIDs={favoriteIDs} />
          }
        />
      </Routes>
      <Navigation />
    </main>
  );
}

export default App;
