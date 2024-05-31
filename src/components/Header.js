import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <div className="logo">My Blog</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
