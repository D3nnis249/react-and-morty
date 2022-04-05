import './App.css';
import Header from './components/Header'
import React from "react";
import NavBar from "./components/Navigation"
import Card from './components/Card';

function App() {
  return (
    <div className="App">
    <Header />  
    <Card />
    <NavBar />
    </div>
  );
}

export default App;
