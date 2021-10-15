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

function App() {
  return (
    <div className="App">
      <header id="header" className="alt">
        <h1>Anywhere Fitness</h1>
      </header>
      <Router>
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
      </Router>
      <footer><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></footer>
    </div>
  );
}

export default App;
