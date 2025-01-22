import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

function WelcomePage() {
    return (
        <section className="welcome-container">
            <div className="welcome-content">
                <h1>Welcome</h1>
                <p>
                    company elo is all about comparing different profiles, voting on them,
                    and seeing where you rank on our global leaderboard. Get started by
                    creating an account below!
                </p>
                <Link to="/signup" className="signup-button">
                    Create an Account
                </Link>
            </div>
        </section>
    );
}

export default WelcomePage;
