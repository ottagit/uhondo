import React, { Component } from 'react';
import Header from './Header';
import firebase from '../firebase.js';

class LoginContainer extends Component {

  state = { email: "", password: "", error: "" };
  
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

  login() {
    // Login user
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).
      then(res => {
        console.log(res);
      }).
      catch(err => {
        if (err.code === 'auth/user-not-found') {
          this.signup();
        }
        else {
          this.setState({ error: "Error loging in" });
        }
      });
  }
      
  signup() {
    // Sign up user
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).
      then(res => { 
        console.log(res);
      }).
      catch(err => {
        console.log(err);
        this.setState({ error: "Error signing up" });
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ error: '' });
    if(this.state.email && this.state.password) {
      this.login();
    }
    else {
      this.setState({ error: "Please fill in both fields" });
    }
  };

  render() {
    return (
      <div id="LoginContainer" className="inner-container">
        <Header />
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
          <p className="error">{this.state.error}</p>
          <button className="red light" type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
