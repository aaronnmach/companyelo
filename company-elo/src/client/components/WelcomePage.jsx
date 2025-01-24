import React from 'react';
import metaLogo from '../assets/mata.png';
import mckinseyLogo from '../assets/mckinsey.jpeg';
import openaiLogo from '../assets/openai1.jpg';
import netflixLogo from '../assets/netflix.png';
import databricksLogo from '../assets/databricks.png';
import lazardLogo from '../assets/lazard.jpg';
import nvidiaLogo from '../assets/nvidia3.png';
import citadelLogo from '../assets/citadel.jpg';
import stripeLogo from '../assets/stripe.jpg';
import '../components/WelcomePage.css';
import Footer from '../components/Footer';

function WelcomePage() {
    const logos = [
        { src: metaLogo, style: {} },
        { src: citadelLogo, style: { backgroundSize: "100%" } },
        { src: lazardLogo, style: {} },
        { src: openaiLogo, style: { backgroundSize: "110%", backgroundPositionX: "20%" } },
        { src: mckinseyLogo, style: {} },
        { src: netflixLogo, style: { backgroundSize: "85%" } },
        { src: databricksLogo, style: {} },
        { src: stripeLogo, style: { backgroundSize: "290%" } },
    ];

    return (
        <>
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
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="logo-card"
                            style={{
                                backgroundImage: `url(${logo.src})`,
                                ...logo.style,
                            }}
                        ></div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default WelcomePage;
