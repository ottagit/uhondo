import React, { Component } from 'react';

class LoginContainer extends Component {

  state = { email: "", password: "" };
  
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.prevenDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div id="LoginContainer" className="inner-container">
        <div id="Header">
          <img src="/assets/logo.png" alt="Logo" />
          <h1>Uhondo</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <p>Enter email and password to Sign in or Sign up</p>
          <input
            onChange={this.handleEmailChange}
            value={this.state.email}
            type="text"
            placeholder="Your email"
          />
          <input
            onChange={this.handlePasswordChange}
            value={this.state.password}
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
