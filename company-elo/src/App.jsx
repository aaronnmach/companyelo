import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './client/components/Header';
import WelcomePage from './client/components/WelcomePage';
import SignUpPage from './client/components/SignUpPage';
import ComparisonSection from './client/components/ComparisonSection';
import CompanyLeaderboard from './client/components/CompanyLeaderboard';
import Footer from './client/components/Footer';
import './App.css';

function App() {
  const location = useLocation(); // Get the current route

  return (
    <div>
      {/* Header is always at the top */}
      <Header />

      {/* Main routes */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/company" element={<CompanyLeaderboard />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/compare" element={<ComparisonSection />} />
        {/* Add more routes as needed */}
      </Routes>

      {/* Conditionally render Footer only for the Welcome Page */}
      {location.pathname === '/' && <Footer />}
    </div>
  );
}

// Wrap App with Router to provide routing context
function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
