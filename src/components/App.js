import React, { Component } from 'react';
import firebase from 'firebase';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router-dom';
import './App.css';
import LoginContainer from './LoginContainer';
import ChatContainer from './ChatContainer';

class App extends Component {
  state = { user: null };
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user });
      }
    });
  }

  render() {
    return (
      <div id="container" className="inner-container">
        <Route path='/login' component={LoginContainer} />
        <Route exact path='/' component={ChatContainer} />
      </div>
    );
  }
}

export default hot(App);
