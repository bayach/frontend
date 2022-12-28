import React from 'react';
import {BrowserRouter as Router,Redirect,Route,Switch} from "react-router-dom";
import Home from '../../pages/Home';
import Connexion from '../../pages/Connexion';
import Navbar from '../Navbar';

function index() {
  return (
    <div>
    <Router>
        <Navbar /> 
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/connexion" exact component={Connexion}/>
            <Redirect to="/" />
        </Switch>

    </Router>
    
    </div>
  );
}

export default index;