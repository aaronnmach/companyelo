import React from 'react';
import metaLogo from '../assets/mata.png';
import mckinseyLogo from '../assets/mckinsey.jpeg';
import openaiLogo from '../assets/openai1.jpg';
import netflixLogo from '../assets/netflix.png';
// import goldmanLogo from '../assets/goldman.png';
import databricksLogo from '../assets/databricks.png';
import lazardLogo from '../assets/lazard.jpg';
import nvidiaLogo from '../assets/nvidia3.png';
import citadelLogo from '../assets/citadel.jpg';
import stripeLogo from '../assets/stripe.jpg';
import '../components/WelcomePage.css';

function WelcomePage() {
    return (
        <section className="welcome-hero">
            <div className="hero-content">
                <h1>Discover the Company For You</h1>
                <p>
                    Vote to rank companies based on salary, industry influence, and career growth. Explore career ladders,
                    test your knowledge with company logos, and connect with opportunities tailored to your aspirations.
                </p>
                <button className="cta-button">Get Started</button>
            </div>
            <div className="logo-table">
                <div className="logo-card" style={{ backgroundImage: `url(${metaLogo})` }}></div>
                <div className="logo-card" style={{ backgroundImage: `url(${citadelLogo})`, backgroundSize: "100%" }}></div>
                <div className="logo-card" style={{ backgroundImage: `url(${lazardLogo})` }}></div>
                <div className="logo-card" style={{ backgroundImage: `url(${openaiLogo})`, backgroundSize: "110%", backgroundPositionX: "20%" }}></div>
                <div className="logo-card" style={{ backgroundImage: `url(${mckinseyLogo})` }}></div>
                <div className="logo-card" style={{ backgroundImage: `url(${netflixLogo})`, backgroundSize: "85%" }}></div>
                <div className="logo-card" style={{ backgroundImage: `url(${databricksLogo})` }}></div>
                <div className="logo-card" style={{ backgroundImage: `url(${stripeLogo})`, backgroundSize: "290%" }}></div>
            </div>
        </section>
    );
}

export default WelcomePage;
