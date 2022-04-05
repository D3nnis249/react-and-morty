import './App.css';
import styled from "styled-components";
import StyledHeader from './components/Header';
import React from 'react';
import Navigation from './components/Navigation';
import StyledCard from './components/Card';

function App() {
  return (
    <div>
      <StyledHeader />
      <StyledCard />
      <Navigation />
    </div>
  );
}

export default App;
