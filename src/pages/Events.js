import React from 'react';
import Slider from 'react-slick';
import './Events.css';
import Event1 from '../assets/Event-1.png';
import Event20 from '../assets/Event-20.png';
import Event21 from '../assets/Event-21.png';
import Event30 from '../assets/Event-30.png';
import Event31 from '../assets/Event-31.png';

const eventsData = [
    {
        title: 'STEMinar Series',
        description: 'To kick off our STEMinar Series, STEM Inspires is hosting an online seminar with cybersecurity expert and web security researcher Benson Liu! He\'ll be discussing his journey through college and his work experience, as well as some of the interesting web security research he\'s conducting. Scan the QR code or use this link to register today.',
        images: [Event1, Event1], // Ensure this image is only included once
        link: 'https://www.linkedin.com/posts/bookhubt_workshop-careers-writers-activity-7266753327521042432-y0HG?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'Holiday Hackathon',
        description: 'In January 2024, STEM Inspires hosted an online Holiday Hackathon, with a prompt to create any website, program, or app that could bring positive change to the community. Students teamed up to create awesome coding projects and showcased their work to win prizes. They also had the opportunity to learn from professional guest speakers who ran workshops about topics in STEM, coding, app development, and AI.',
        images: [Event20, Event21],
        link: 'https://www.linkedin.com/in/your-post-link' // Replace with actual LinkedIn post link
    },
    {
        title: 'App development Course with MIT App Inventor',
        description: 'STEM Inspires team offered an online App Development Course to elementary and middle school students. The students learned fun coding concepts with MIT App Inventor, an app development platform that\'s beginner-friendly. The session spanned 4 classes from mid December to mid January.',
        images: [Event30, Event31],
        link: 'https://www.linkedin.com/in/your-post-link' // Replace with actual LinkedIn post link
    },
    {
        title: 'Summer STEM Exposure Program@PPS',
        description: 'In August 2023, STEM Inspires members, together with volunteers from Princeton High School, organized a 2-week long Summer STEM Exposure Program for elementary and middle school students from Princeton Public Schools. The students had fun learning app development with MIT App Inventor and exploring science through hands-on experiments. The program concluded with a highly anticipated Hackathon day with project presentations from young STEM enthusiasts!',
        images: [], // No images for this event
        link: 'https://www.linkedin.com/in/your-post-link' // Replace with actual LinkedIn post link
    },
];

const Events = () => {
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
        <div className="events-container">
            <h1 className="main-heading">EVENTS</h1>
            
            {/* Events Section */}
            <div className="events-section">
                {eventsData.map((event, index) => (
                    <div key={index} className="event-card">
                        <h3 className="event-card-title">{event.title}</h3>
                        {event.images.length > 0 && ( // Check if there are images
                            <Slider {...settings} className="event-slider">
                                {event.images.map((image, imgIndex) => (
                                    <div key={imgIndex}>
                                        <img src={image} alt={`Event ${index + 1} Image ${imgIndex + 1}`} className="slider-image" />
                                    </div>
                                ))}
                            </Slider>
                        )}
                        <p className="event-card-description">{event.description}</p>
                        <a href={event.link} target="_blank" rel="noopener noreferrer" className="more-info-button">More Info</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
