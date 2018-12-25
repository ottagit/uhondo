import React from 'react';

const Header = (props) => {
  return (
    <div id="Header">
      <img src="../../assets/logo.png" alt="Logo" />
      <h1>Uhondo</h1>
      {props.children}
    </div>
  );
};

export default Header;
