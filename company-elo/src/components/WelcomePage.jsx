import React from 'react';
import './WelcomePage.css';

function WelcomePage() {
    return (
        <div className="welcome-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>
                        Welcome
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Faucibus in libero risus semper habitant arcu eget.
                        Et integer facilisi eget diam.
                    </p>
                    <button className="cta-button">Explore</button>
                </div>

                <div className="hero-images">
                    {/* Replace src with your actual image paths */}
                    <div className="hero-image hero-image-1">
                        <img
                            src="https://via.placeholder.com/300x400/000000/FFFFFF?text=Image+1"
                            alt="First"
                        />
                    </div>
                    <div className="hero-image hero-image-2">
                        <img
                            src="https://via.placeholder.com/300x400/999999/FFFFFF?text=Image+2"
                            alt="Second"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="feature-card">
                    {/* A placeholder icon—could be an <img> or a font icon */}
                    <div className="feature-icon">☁</div>
                    <h3>Title 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">☁</div>
                    <h3>Title 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">☁</div>
                    <h3>Title 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </section>
        </div>
    );
}

export default WelcomePage;
