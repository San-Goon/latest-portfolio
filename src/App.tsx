import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skill from './components/Skill';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Skill />
      <SocialLinks />
    </div>
  );
}

export default App;
