import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import Main from './Components/Main';
import Toolbar from './Components/Navigation/Toolbar/Toolbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Projects from './Components/Projects/Projects';
import About from './Components/Aboutme';
import Contact from './Components/Contact';

function App() {
  return (    
    <div className="app">
      <Toolbar />
      <section >
        <LandingPage/>
      </section>
      <section style={{height: '100vh', position: 'relative'}}>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
           
    </div>
  );
}

export default App;
