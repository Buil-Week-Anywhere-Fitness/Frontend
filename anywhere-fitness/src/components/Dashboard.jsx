import React from 'react';
import { Link } from 'react-router-dom';

import Login from "../components/Login";

import Contact from "../components/Contact";
import Logout from "../components/Logout";
const Dashboard = () => {


    return ( 
    
    <div>
        
        <nav>
        <h1>Anywhere Fitness</h1>
        <div className="nav-links">
          <Link to="/">
            <button className="home-button">Home</button>
          </Link>
          <Link to="/login">
            <button className="login-button">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="signup-button">Sign up</button> 
          </Link>
          <Link to="/about">
            <button className="about-button">About</button>
          </Link>
          <Link to="/contact">
            <button className="contact-button">Contact</button>
          </Link>
        </div>
      </nav>
    </div> );
}
 
export default Dashboard;