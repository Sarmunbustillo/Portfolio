import React from 'react';
import { Switch, Route } from "react-router-dom";

import LandingPage from './LandingPage/LandingPage';
import Aboutme from '../Components/Aboutme/Aboutme';
import Contact from './Contact';
import Projects from '../Components/Projects/Projects';
import Resume from './Resume';


const Main = () => {
   return (
    <Switch>
        <Route path="/Aboutme" component={Aboutme} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Resume" component={Resume} />        
        <Route exact path="/" component={LandingPage} />
    </Switch>
    );
};

export default Main;