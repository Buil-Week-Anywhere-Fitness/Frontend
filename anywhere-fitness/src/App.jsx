import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Logout from "./components/Logout";
import { Container } from "semantic-ui-react";
import AppHeader from "./components/App-Header";
import AppFooter from "./components/App-Footer";
import EastereggGame from './components/Game/EastereggGame'
import Signup from "./components/Signup";


function App() {

  const navStyle = {
    color: 'green',
    textDecoration: 'none' //anyone knows why this not working?
  }

  return (
    <div id="App">
      <AppHeader />
      <Container textAlign="center">
        <Router>
          <Switch>
            <Route path="/easteregg" component ={EastereggGame} attributeOnTheLeft="notNeededButWantedToShowAlternativeWay">
              {/* Using Attribute instead of closed tag */}
              {/* Putting Game above /login so anyone can easter */}
            </Route> 
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              {/* private route here */}
              <Dashboard />
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/logout">
              {/* private route here, link should only show if logged in */}
              <Logout />
            </Route>
            <Route path="/">
              {/* redirect to login if not authenticated, otherwise to dashboard */}
              <Redirect to="/login" />
            </Route>
            
          </Switch>
        </Router>
      </Container>
      <AppFooter />
    </div>
  );
}


export default App;
