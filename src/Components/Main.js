import React from 'react';
import { Switch, Route } from "react-router-dom";

import LandingPage from './LandingPage/LandingPage';
import Aboutme from '../Components/Aboutme/Aboutme';
import Contact from '../Components/Contact/Contact';
import Projects from '../Components/Projects/Projects';


const Main = () => {
   return (
    <Switch>
        <Route path="/Aboutme" component={Aboutme} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
        <Route exact path="/" component={LandingPage} />
    </Switch>
    );
};

export default Main;