import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header-container">
            <div className="header-left">
                <h1 className="site-title">recruit.gg</h1>
            </div>
            <div className="header-right">
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/company">Leaderboard</a>
                    <a href="/compare">Compare</a>
                    <a href="/signup">Sign Up</a>
                </nav>
                {/* Hamburger menu */}
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
