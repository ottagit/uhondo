import React, { Component } from 'react';
import Header from '../sections/Header';

class ChatContainer extends Component {
  render() {
    return (
      <div id="ChatContainer">
        <Header />
        <p>Hello from ChatContainer</p>
      </div>
    );
  }
}

export default ChatContainer;
