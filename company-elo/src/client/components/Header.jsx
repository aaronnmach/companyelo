import React from 'react';
import '../components/Header.css'; // Optional separate styling for Header

function Header() {
    return (
        <header className="header-container">
            <div className="header-left">
                <h1 className="site-title">recruit.gg</h1>
            </div>
            <div className="header-right">
                <nav>
                    {/* Could be normal links or React Router <Link> elements */}
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
