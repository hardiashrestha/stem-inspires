import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create a CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">STEM Inspires</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/join">Join Us</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/donate" className="cta-button">Donate</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;