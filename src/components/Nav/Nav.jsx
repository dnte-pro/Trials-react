import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Shuttle Hub</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Nav;