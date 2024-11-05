import React from 'react';
//import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/Hero/HeroSection';

function App() {
  return (
    <div className="App">
      <HeroSection /> 
    </div>
  );
}

export default App;