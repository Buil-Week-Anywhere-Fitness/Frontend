import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Logout from "./components/Logout";
import AppHeader from "./components/App-Header";
import AppFooter from "./components/App-Footer";
import { Container } from "semantic-ui-react";
import ClassList from "./components/ClassList";
import Home from "./components/Home";
import EastereggGame from "./components/Game/EastereggGame";
import About from "./components/About";

function App() {
  return (
    <div id="App">
      <Router>
        <AppHeader />
        <Container textAlign="center">
          <Switch>
            <Route path="/about" >
              <About />
            </Route>
            <Route path="/classlist">
              <ClassList />
            </Route>
            <Route path="/dashboard">
              {/* private route here */}
              <Dashboard />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/logout">
              {/* private route here, link should only show if logged in */}
              <Logout />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <EastereggGame/>
            </Route>
          </Switch>
        </Container>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
