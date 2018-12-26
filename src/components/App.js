import React, { Component } from 'react';
import firebase from 'firebase';
import { hot } from 'react-hot-loader/root';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import LoginContainer from './LoginContainer';
import ChatContainer from './ChatContainer';
import UserContainer from './UserContainer';

class App extends Component {
  state = { user: null };
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user });
      }
      else {
        this.props.history.push('/login');
      }
    });
  }

  handleSubmitMessage = msg => {
    // Send message to firebase 
    const data = {
      msg,
      author: this.state.user.email,
      user_id: this.state.user.uid,
      timestamp: Date.now()
    };

    firebase.
      database().
      ref('/messages').
      push(data);
  };

  render() {
    return (
      <div id="container" className="inner-container">
        <Route path='/login' component={LoginContainer} />
        <Route
          exact path='/'
          render={ () => <ChatContainer onSubmit={this.handleSubmitMessage} />}
        />
        <Route path='/users/:id' component={UserContainer} />
      </div>
    );
  }
}

export default hot(withRouter(App));
