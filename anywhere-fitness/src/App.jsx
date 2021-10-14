import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import axios from "axios";
import PrivateRoute from './components/PrivateRoute'

import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import RegistrationForm from './components/RegistrationForm';
import About from './components/About';
import ClassList from './components/ClassList';
import Contact from './components/Contact';
import ClassDetail from './components/ClassDetail';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
    <div className="App">
        <nav>
        <h1 >Anywhere Fitness</h1>
        <div className="nav-links">
        <NavLink exact to="/classlist">
            Classes
          </NavLink>
        <NavLink exact to="/dashboard">
            Dashboard
          </NavLink>
        
          <NavLink exact to="/login">
            Login
          </NavLink>
          <NavLink to="/registrationform">
            Register
            </NavLink>
          <NavLink to="/logout">
            Logout
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
        </div>
      </nav>
      
      <Switch>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route path='/logout' component={Logout}/>
        
        <Route path='/about' component={About}/>
        <Route path='/classlist' component={ClassList}/>
        <Route path='/registrationform' component={RegistrationForm}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
