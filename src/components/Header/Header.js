// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Import the custom CSS

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">NASA Space App</div>
            <nav className="header-nav">
                {/* Use Link instead of a for client-side navigation */}
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                {/* <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link> */}
            </nav>
        </header>
    );
};

export default Header;
