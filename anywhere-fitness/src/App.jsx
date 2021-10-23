import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Logout from "./components/Logout";
import AppHeader from "./components/App-Header";
import AppFooter from "./components/App-Footer";
import { Header, Container, Divider } from "semantic-ui-react";

function App() {
  return (
    <div id="App">
      <Router>
        <AppHeader />
        <Container textAlign="center">
          <Switch>
            <Route path="/login">
              <Login />
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
            <Route path="/">
              {/* redirect to login if not authenticated, otherwise to dashboard */}
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Container>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
