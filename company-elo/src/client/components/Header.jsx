import React, { useState } from 'react';
import './Header.css'; // Optional separate styling for Header

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header-container">
            <div className="header-left">
                <h1 className="site-title">CareerRank</h1>
            </div>
            <div className="header-right">
                {/* Hamburger Menu Button */}
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>

                {/* Navigation Links */}
                <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/company">Leaderboard</a>
                    <a href="/compare">Compare</a>
                    <a href="/signup">Sign Up</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
