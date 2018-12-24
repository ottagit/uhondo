import React, { Component } from 'react';
import firebase from '../firebase';
import Header from '../sections/Header';

class ChatContainer extends Component {
  
  handleLogout = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div id="ChatContainer">
        <Header> 
          <button className="red" onClick={this.handleLogout} >Logout</button>
        </Header>
      </div>
    );
  }
}

export default ChatContainer;
