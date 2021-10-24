import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Logout from "./components/Logout";
import AppHeader from "./components/App-Header";
import AppFooter from "./components/App-Footer";
import { Container } from "semantic-ui-react";
import Home from "./components/Home";

function App() {
  return (
    <div id="App">
      <Router>
        <AppHeader />
        <Container textAlign="center">
          <Switch>
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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
