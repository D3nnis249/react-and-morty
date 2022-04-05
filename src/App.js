import './App.css';
import Header from './components/Header';
import React from 'react';
import Navigation from './components/Navigation';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Header />
      <Card />
      <Card />
      <Navigation />
    </div>
  );
}

export default App;
