import React from 'react';
import Login from './components/Login';
import About from './components/About';


function App() {
  return (
    <div className="App">
        <nav>
          <h1>Anywhere Fitness</h1>
          <div className="navLinks">
            <link to= "/about">
              <button className="about-button">About</button>
            </link>
            <link to= "/login">
              <button className="login-button">Login</button>
            </link>

          </div>
        </nav>
        <div className="App">
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />


        </div>
    </div>
  );
}

export default App;
