
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Logo</div>
        <div className="blog-title">Laksh's Blog</div>
      </div>
      <div className="tagline">
        <h1>Welcome to Laksh's Blog</h1>
        <p>This is a simple blog application built with React.</p>
      </div>
    </header>
  );
}

export default Header;
