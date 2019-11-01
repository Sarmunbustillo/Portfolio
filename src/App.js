import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import Main from './Components/Main';
import Toolbar from './Components/Navigation/Toolbar/Toolbar';

function App() {
  return (    
    <div className="app">
      <Toolbar/>
      
      <Main/>            
    </div>
  );
}

export default App;
