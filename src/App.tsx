import React from 'react';
import './App.css';
import HeroSection from './components/Hero/HeroSection';

function App() {
  return (
    <div className="App">
      <HeroSection /> 
    </div>
  );
}

export default App;

/*import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/Hero/HeroSection';
import SignUp from './components/Hero/SignUp'; // Import your SignUp component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/SignUp" element={<SignUp />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/