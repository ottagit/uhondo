import React, { Component } from 'react';

class LoginContainer extends Component {
  render() {
    return (
      <div id="LoginContainer" className="inner-container">
        <div id="Header">
          <img src="/assets/logo.png" alt="Logo" />
          <h1>Uhondo</h1>
        </div>
        <form>
          <p>Enter email and password to Sign in or Sign up</p>
          <input
            type="text"
            placeholder="Your email"
          />
          <input
            type="password"
            placeholder="Your password"
          />
          <button className="red light" type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
