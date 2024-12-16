import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo1 from '../assets/STEM-INSPIRES-LOGO.png'; // First logo image
import logo2 from '../assets/STEM-INSPIRES-LOGO.png'; // Second logo image
import logo3 from '../assets/STEM-INSPIRES-LOGO.png'; // Third logo image
import bgImage1 from '../assets/Home-img-0.png'; // First background image
import bgImage2 from '../assets/Home-img-3.png'; // Second background image
import bgImage3 from '../assets/Home-img-5.png'; // Third background image
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const logos = [logo1, logo2, logo3];
const backgrounds = [bgImage1, bgImage2, bgImage3];
const Home = () => {
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

    useEffect(() => {
        const logoInterval = setInterval(() => {
            setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 3000); // Change logo every 3 seconds

        const bgInterval = setInterval(() => {
            setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 9000); // Change background every 9 seconds

        return () => {
            clearInterval(logoInterval);
            clearInterval(bgInterval);
        }; // Clear intervals on component unmount
    }, []);

    return (
        <div className="home-container" style={{ backgroundImage: `url(${backgrounds[currentBackgroundIndex]})` }}>
            {/* Background Overlay */}
            <div className="background-overlay"></div>

            {/* Welcome Section */}
            <h1 className="main-header">WELCOME TO STEM-INSPIRES</h1>
            <p className="sub-header">
            STEM Inspires is a student-run non-profit organization that promotes STEM learning amongst youth from underrepresented and underserved communities, building the next generation of STEM-inspired individuals.
            </p>

            {/* Buttons Section */}
            <div className="button-container">
                <Link to="/about-us" className="home-button about-us">ABOUT US</Link>
                <Link to="/contact" className="home-button contact-us">CONTACT</Link>
            </div>
            <div className="social-icons">
          <a href="mailto:bookhubtindia@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://instagram.com/bookk_hubbb" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/bookhubt/mycompany/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        </div>
    );
};

export default Home;