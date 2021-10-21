import React from "react";


const Login = () => {
  const { login, values, change } = props;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    login();
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };


  return ( 
  <div className="loginContainer">
      <form action="login" onSubmit={}>
          <h2>Login</h2>
          <label htmlFor="username"> Username:
              <input type="type"
                  name="username"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={onChange}
              />    
          </label>
          <label htmlFor="password"> Password:
              <input type="type"
                  name="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={onChange}
              />    
          </label>
          <button onClick={handleSubmit}>Log in</button>
      </form>
      <p>
          <img src="./scr/images/fitness.jpg" alt="Time for Fitness"
          />
      </p>
  </div>
  
  );
}

export default Login;