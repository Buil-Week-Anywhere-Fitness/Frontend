// import React, { useState, useEffect, useContext } from "react";
// import {Route} from 'react-router-dom';
// import './App.css'
// import Login from './components/Login';
//import Easteregg from './components/Easteregg/easteregg';

import React, {Component} from 'react';
import EastereggGame from './components/easteregg/EastereggGame'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import {Link} from 'react-router-dom'



function App() {

  const navStyle = {
    color: 'green',
    textDecoration: 'none' //anyone knows why this not working?
  }

  return (
    <Router>
    <div className="App">
          <h1>Anywhere Fitness (This is App.jsx speaking)</h1>
          <p> Test </p>

          <nav>
          <div className="navLinks">
            <ul className="header">
              <Link style={navStyle} to="/login">
              <li>Login</li>
              </Link>
              <Link to="/">
              <li>Home</li>
              </Link>
            </ul>
          </div>
          </nav>

          <Link to='/easteregg' style={{ textDecoration: 'none' }}>
              Easteregg
          </Link>
          <Switch>
          <Route path="/easteregg" component={EastereggGame}/>
          </Switch>

    </div>
    </Router>
  );
}

export default App;
