import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/STEM-INSPIRES-Home.png';
import image1 from '../assets/Home-img-2.png'; 
import image2 from '../assets/Home-img-3.png'; 
import image3 from '../assets/Home-img-4.png'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <h1 className="main-header">WELCOME TO STEM-INSPIRES</h1>
            <p className="sub-header">STEM Inspires is a student-run non-profit organization that promotes STEM learning amongst youth from underrepresented and underserved communities, building the next generation of STEM-inspired individuals.</p>

            <Slider {...settings} style={{ width: '475px', height: '480.22px', position: 'absolute', left: '885.06px', top: '100.56px' }}>
                <div>
                    <img src={logo} alt="Home" style={{ width: '475px', height: '480.22px' }} />
                </div>
                <div>
                    <img src={image1} alt="Slide 1" style={{ width: '475px', height: '480.22px' }} />
                </div>
                <div>
                    <img src={image2} alt="Slide 2" style={{ width: '475px', height: '480.22px' }} />
                </div>
                <div>
                    <img src={image3} alt="Slide 3" style={{ width: '475px', height: '480.22px' }} />
                </div>
            </Slider>

            <Link to="/about-us" className="button about-us">ABOUT US</Link>
            <Link to="/contact" className="button contact-us">CONTACT</Link>
        </div>
    );
};

export default Home;