import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling
import amy from '../assets/team_amy.jpg';
import aditi from '../assets/team_aditi.jpeg';
import emma from '../assets/team_emma.jpg';
import harish from '../assets/team_harish.jpg';
import zaid from '../assets/team_zaid.jpg';
import maya from '../assets/team_maya.jpg';
import ishita from '../assets/team_ishita.jpg';
import poojit from '../assets/team_poojit.jpg';
import shrestha from '../assets/team_shrestha.jpeg';
import dhakshata from '../assets/team_dhakshata.jpg';

const teamMembers = [
    {
        name: 'Amy Lin',
        role: 'Founder & Co-president',
        description: 'Amy is a senior at Princeton High School in New Jersey, USA. Both inside and outside of school, she enjoys learning about STEM, whether it be reading up on black holes or collecting data for a science project. Amy hopes that STEM inspires others the same way it inspired her to be curious, creative, and persevering.',
        image: amy,
    },
    {
        name: 'Aditi Menon',
        role: 'Founder & Co-president',
        description: 'Aditi is a senior at South Brunswick High School in New Jersey, USA. As a STEM enthusiast, it brings her lots of joy to help others understand the developing world we live in. She says that STEM inspires is one of the ways we, as high schoolers, can reach the people who could need the knowledge.',
        image: aditi,
    },
    {
        name: 'Emma Li',
        role: 'Founding Member & Program Director',
        description: 'Emma is a junior at Princeton High School in New Jersey, USA and a founding member of STEM INSPIRES.  STEM has provided a community for her in ways that she didn’t even expect. Emma hopes to grow and nurture a similar community through STEM Inspires, creating a welcoming space for students to be supported in their STEM journey.',
        image: emma,
    },
    {
        name: 'Harish Anand',
        role: 'Event Coordinator',
        description: 'Harish is a senior at Hillsborough High School in New Jersey, USA. He’s interested in computer science, especially within areas of cybersecurity and AI. Outside of STEM, Harish enjoys biking and playing video games with his friends.',
        image: harish,
    },
    {
        name: 'Zaid Yusuf',
        role: 'Program Director',
        description: 'Zaid is a junior at Travis High School in Texas, USA., who hopes to major in mechanical engineering in the future. He hopes to help young students gain access to STEM opportunities and make an impact in the community by planning engaging and impactful programs.',
        image: zaid,
    },
    {
        name: 'Maya Hagt',
        role: 'Education Specialist',
        description: 'Maya is a senior at Princeton High School in New Jersey, USA with a love of any and all things chemistry. Maya specializes in designing our curriculums for any STEM Inspires events that involve interactive activities, with expertise in creating unique science experiments for elementary students. She is majoring in biochemistry and psychology and planning on attending medical school. Her favorite hobbies include playing ice hockey, running with her dog and trying new activities.',
        image: maya,
    },
    {
        name: 'Ishita Vinay',
        role: 'Media Team Lead',
        description: 'Ishita is a senior at West Windsor-Plainsboro High School South in New Jersey, USA, with a passion for both community service and educating others. A dedicated student of Indian classical dance for over 11 years, she also volunteers at her studio to teach younger students. Ishita enjoys reading and watching films, but her long-term goal is to pursue a career in business, with a strong focus on integrating STEM into her community outreach and educational efforts.',
        image: ishita,
    },
    {
        name: 'Poojit M',
        role: 'Marketing Director',
        description: 'Poojit is a senior at West Windsor Plainsboro High School South in New Jersey, USA. His passion lies in STEM research and he loves to delve deeper into the problems of public health and explore molecular biology.',
        image: poojit,
    },
    {
        name: 'Shrestha Hardia',
        role: 'Technology Director',
        description: 'Shrestha is a recent graduate of  Jawaharlal Nehru School (S.W.) in Bhopal, India, with a deep passion for STEM, particularly in the fields of artificial intelligence and machine learning. Whether developing innovative tech projects or conducting research on topics like Deep Learning in Dermatological Diseases Classfication, Shrestha is driven by a desire to leverage technology to address real-world challenges.',
        image: shrestha,
    },
    {
        name: 'Dhakshata Sathyamurthy',
        role: 'Operations Director',
        description: 'Dhakshata is a senior at Centennial High School in Texas, USA, with a deep passion for STEM who seeks to provide opportunities for others to experience the beauties of it as well. She is incredibly excited to work with STEM Inspires and help others gain a passion for STEM.',
        image: dhakshata,
    },
    // Events Team Members
    {
        name: 'Harish Anand',
        role: 'Event Coordinator',
        description: 'Harish is a senior at Hillsborough High School in New Jersey, USA. He’s interested in computer science, especially within areas of cybersecurity and AI. Outside of STEM, Harish enjoys biking and playing video games with his friends.',
        image: harish,
    },
    {
        name: 'Zaid Yusuf',
        role: 'Events Team',
        description: 'Events Member 2 helps organize workshops and events.',
        image: zaid,
    },
    {
        name: 'Maya Hagt',
        role: 'Education Specialist',
        description: 'Maya is a senior at Princeton High School in New Jersey, USA with a love of any and all things chemistry. Maya specializes in designing our curriculums for any STEM Inspires events that involve interactive activities, with expertise in creating unique science experiments for elementary students. She is majoring in biochemistry and psychology and planning on attending medical school. Her favorite hobbies include playing ice hockey, running with her dog and trying new activities.',
        image: maya,
    },
];

const AboutUs = () => {
    return (
        <div className="team-container">
            <h1 className="team-header">MEET OUR TEAM</h1>

            <section className="founders-section">
                <h2 className="section-title">Founders</h2>
                <div className="team-members">
                    {teamMembers.slice(0,3).map(member => (
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
                <h2 className="section-title">Events Team</h2>
                <div className="team-members">
                    {teamMembers.slice(3, 6).map(member => (
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
                <h2 className="section-title">Media Team</h2>
                <div className="team-members">
                    {teamMembers.slice(6, 10).map(member => (
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
