import React from 'react';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <nav>
          <h1>Anywhere Fitness</h1>
          <div className="navLinks">
            <link to= "/login">
              <button className="login-button">Login</button>
            </link>

          </div>
        </nav>
        <div className="App">
<Route path="/login" component={Login} />


        </div>
    </div>
  );
}

export default App;
