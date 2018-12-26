import React, { Component } from 'react';
import firebase from '../firebase';
import Header from '../sections/Header';

class ChatContainer extends Component {

  state = { newMessage: '' };

  handleInputChange = e => {
    this.setState({ newMessage: e.target.value });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.newMessage);
    this.setState({ newMessage: '' });
  };

  // Send message by pressing Enter key
  handleKeyDown = e => {
    if (Object.is(e.key, 'Enter')) {
      e.preventDefault();
      this.handleSubmit();
    }
  };

  
  handleLogout = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div id="ChatContainer" className="inner-container">
        <Header> 
          <button className="red" onClick={this.handleLogout} >Logout</button>
        </Header>

        <div id="message-container">
        </div>

        <div id="chat-input">
          <textarea 
            placeholder="Your message goes here..."
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
            value={this.state.newMessage}
          />
          <button onClick={this.handleSubmit}>
            <svg viewBox="0 0 24 24">
              <path fill="#424242" d="M2,21L23,12L2,3V10L17,12,L2,14V21Z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default ChatContainer;
