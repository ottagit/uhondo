import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../sections/Header';

class UserContainer extends Component {
  renderedUserEmail = false;

  getAuthor = author => {
    if (!this.renderedUserEmail) {
      this.renderedUserEmail = true;
      return <p className="author">{author}</p>
    }
  };

  render() {
    return (
      <div id="UserContainer" className="inner-container" >
        <Header>
          <Link to="/">
            <button className="red">Back to chat</button>
          </Link>
        </Header>
        { this.props.messagesLoaded ? (
          <div id="message-container">
            { this.props.messages.map(msg => {
              if (msg.user_id === this.props.userID) {
                return (
                  <div key={msg.id} className="message">
                    { this.getAuthor(msg.author) }
                    <p>{msg.msg}</p>
                  </div>
                );
              }})
            }
          </div>
        ) : (
          <div id="loading-container">
            <img src="/assets/logo.svg" alt="Logo" id="loader" />
          </div>
        )
        }
      </div>
    );
  }
}

export default UserContainer;
