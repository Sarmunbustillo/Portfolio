import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import {Link} from "react-router-dom";

import './App.css';
import LLayout from './Components/Layout/LLayout';
import Main from './Components/Main';

function App() {
  return (    
    <div className="app">
      <LLayout/>  
      
      <Main/>            
    </div>
  );
}

export default App;
