import React from 'react';
import metaLogo from '../assets/Meta-Logo.png';
import mckinseyLogo from '../assets/mckinsey.jpeg';
import openaiLogo from '../assets/openai.png';
import netflixLogo from '../assets/netflix.jpg';
import goldmanLogo from '../assets/goldman.png';
import databricksLogo from '../assets/databricks.png';
import lazardLogo from '../assets/lazard.jpg';
import nvidiaLogo from '../assets/nvidia2.png';
import './WelcomePage.css';

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
                <div className="logo-card" style={{ backgroundImage: `url(${goldmanLogo})` }}></div>
                <div className="logo-card" style={{ backgroundImage: `url(${lazardLogo})` }}></div>
                <div className="logo-card" style={{ backgroundImage: `url(${openaiLogo})`, backgroundSize: "80%", backgroundRepeat: "no-repeat" }}></div>
                <div className="logo-card" style={{ backgroundImage: `url(${mckinseyLogo})` }}></div>
                <div className="logo-card" style={{ backgroundImage: `url(${netflixLogo})`, backgroundSize: "110%" }}></div>
                <div className="logo-card" style={{ backgroundImage: `url(${databricksLogo})` }}></div>
                <div className="logo-card" style={{ backgroundImage: `url(${nvidiaLogo})`, backgroundSize: "110%" }}></div>
            </div>
        </section>
    );
}

export default WelcomePage;
