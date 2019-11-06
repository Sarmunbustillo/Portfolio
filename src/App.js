import React from 'react';
import './App.css';

import Toolbar from './Components/Navigation/Toolbar/Toolbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Projects from './Components/Projects/Projects';
import Aboutme from './Components/Aboutme/Aboutme';
import Contact from './Components/Contact';

function App() {
  return (    
    <div className="app">
      <Toolbar />
      <section >
        <LandingPage/>
      </section>
      <section >
        <Projects />
      </section>
      <section>
        <Aboutme />
      </section>
      <section>
        <Contact />
      </section>
           
    </div>
  );
}

export default App;
