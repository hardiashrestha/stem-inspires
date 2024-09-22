import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1 className="main-header">WELCOME TO BOOKHUB</h1>
            <p className="sub-header">A Non-Profit Organization To Support YOUNG WRITERS</p>
            
            <Link to="/about-us" className="button about-us">ABOUT US</Link>
            <Link to="/contact" className="button contact-us">CONTACT</Link>
        </div>
    );
};

export default Home;