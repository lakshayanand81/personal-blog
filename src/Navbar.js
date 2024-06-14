
import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="logo">Logo</div>
            <div className="user-name">{props.userName}</div>
        </nav>
    );
}

export default Navbar;
