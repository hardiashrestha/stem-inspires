import React from 'react';
import './StemTalk.css';
import { Icon } from '@iconify/react'; // Install this package using npm install @iconify/react
import flyerImage from '../assets/STEMTALK.jpg'; // Import the flyer image

const StemTalk = () => {
    return (
        <div className="stem-talk-container">
            <header className="header">
                <h1>STEM TALK Series</h1>
                <Icon icon="mdi:microphone" className="icon" />
            </header>

            <section className="flyer-section">
                {/* Use the imported image */}
                <img src={flyerImage} alt="STEM Talk Flyer" className="flyer-image" />
                <p className="event-info">
                    Join us for our exciting STEM TALK series where we explore innovative ideas and inspiring stories from leaders in science, technology, engineering, and mathematics.
                </p>
            </section>

            <section className="video-section">
                <h2>Watch Our Talks</h2>
                {/* Embed YouTube videos using their IDs */}
                <YoutubeEmbed embedId="LNHBMFCzznE" />
                <YoutubeEmbed embedId="JsC9ZHi79jo" />
            </section>
        </div>
    );
};

const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`YouTube Video ${embedId}`}
        />
    </div>
);

export default StemTalk;
