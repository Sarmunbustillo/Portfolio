import React from 'react';
import './App.css';

import Toolbar from './Components/Navigation/Toolbar/Toolbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Projects from './Components/Projects/Projects';
import Aboutme from './Components/Aboutme/Aboutme';
import Contact from './Components/Contact/Contact';

function App() {
  return (    
    <div className="app">
      <Toolbar />
      <section  >
        <LandingPage/>
      </section>
      <section id="projects" >
        <Projects />
      </section>
      <section id="aboutme" style={{paddingTop:'100px', marginTop: '-100px'}} >
        <Aboutme />
      </section>
      <section id="contact">
        <Contact />
      </section>
           
    </div>
  );
}

export default App;
