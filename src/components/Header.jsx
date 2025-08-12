import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <img src={require("../assets/etzba.png")} alt="Logo" class="logo"/>
      <h1 className='title'>etz - load testing cli tool</h1>
    </header>
  );
}

export default Header;