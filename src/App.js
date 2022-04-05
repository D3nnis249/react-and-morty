import './App.css';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Header />
      <Card />
      <Navigation />
    </div>
  );
}

export default App;
