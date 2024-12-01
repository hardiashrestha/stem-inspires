import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
const teamMembers = [
    {
        name: 'Founder 1',
        role: 'Co-Founder',
        description: 'Founder 1 has extensive experience in STEM education and community outreach.',
        image: image1, // Replace with actual image path
    },
    {
        name: 'Founder 2',
        role: 'Co-Founder',
        description: 'Founder 2 is passionate about inspiring youth through innovative programs.',
        image: image1, // Replace with actual image path
    },
    {
        name: 'Founder 3',
        role: 'Co-Founder',
        description: 'Founder 3 has a background in engineering and education.',
        image: image1, 
    },
    {
        name: 'Media Member 1',
        role: 'Media Team',
        description: 'Media Member 1 creates engaging content for our social media platforms.',
        image: image2, // Replace with actual image path
    },
    {
        name: 'Media Member 2',
        role: 'Media Team',
        description: 'Media Member 2 manages our visual branding and marketing materials.',
        image: image2, // Replace with actual image path
    },
    {
        name: 'Media Member 3',
        role: 'Media Team',
        description: 'Media Member 3 specializes in photography and videography.',
        image: image2, // Replace with actual image path
    },
    {
        name: 'Media Member 4',
        role: 'Media Team',
        description: 'Media Member 4 is responsible for editing and producing videos.',
        image: image2, // Replace with actual image path
    },
    {
        name: 'Media Member 5',
        role: 'Media Team',
        description: 'Media Member 5 assists in content creation and strategy.',
        image: image2, // Replace with actual image path
    },
    {
        name: 'Media Member 6',
        role: 'Media Team',
        description: 'Media Member 6 handles our online presence and engagement.',
        image: image2, // Replace with actual image path
    },
    // Events Team Members
    {
        name: 'Events Member 1',
        role: 'Events Team',
        description: 'Events Member 1 coordinates our community outreach programs.',
        image: image3, // Replace with actual image path
    },
    {
        name: 'Events Member 2',
        role: 'Events Team',
        description: 'Events Member 2 helps organize workshops and events.',
        image: image3, // Replace with actual image path
    },
    {
        name: 'Events Member 3',
        role: 'Events Team',
        description: 'Events Member 3 manages logistics for our events.',
        image: image3, // Replace with actual image path
    },
    {
        name: 'Events Member 4',
        role: 'Events Team',
        description: 'Events Member 4 engages with participants to ensure a great experience.',
        image: image3, // Replace with actual image path
    }
];

const AboutUs = () => {
    return (
        <div className="team-container">
            <h1 className="team-header">MEET OUR TEAM</h1>

            <section className="founders-section">
                <h2>Founders</h2>
                <div className="team-members">
                    {teamMembers.slice(0, 3).map(member => (
                        <div className="team-member" key={member.name}>
                            <img src={member.image} alt={member.name} className="member-image" />
                            <h3>{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="media-team-section">
                <h2>Media Team</h2>
                <div className="team-members">
                    {teamMembers.slice(3, 9).map(member => (
                        <div className="team-member" key={member.name}>
                            <img src={member.image} alt={member.name} className="member-image" />
                            <h3>{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="events-team-section">
                <h2>Events Team</h2>
                <div className="team-members">
                    {teamMembers.slice(9).map(member => (
                        <div className="team-member" key={member.name}>
                            <img src={member.image} alt={member.name} className="member-image" />
                            <h3>{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Add more sections as needed */}
            
        </div>
    );
};

export default AboutUs;