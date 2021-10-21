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
import Home from "./components/Home";

import { Container } from "semantic-ui-react";
import AppHeader from "./components/App-Header";
import AppFooter from "./components/App-Footer";

const initialLoginValues = {
  username: '',
  password: '',
};


function App() {

  const [inputs, setInputs] = useState(initialValues);
  const [loginValues, setLoginValues] = useState(initialLoginValues);

  
// On change handler for the login values in Login.js
const loginChange = (name, value) => {
  setLoginValues({
    ...loginValues,
    [name]: value,
  });
};

// Login function
const onLogin = () => {
  const user = {
    username: loginValues.username,
    password: loginValues.password,
  };
  loginUser(user);
};


  return (
    <div id="App">
      <AppHeader />
      <Container textAlign="center">
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
            <Home />
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
      </Container>
      <AppFooter />
    </div>
  );
}

export default App;
