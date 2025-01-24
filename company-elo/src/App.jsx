import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './client/components/Header';
import WelcomePage from './client/components/WelcomePage';
import SignUpPage from './client/components/SignUpPage';
import ComparisonSection from './client/components/ComparisonSection';
import CompanyLeaderboard from './client/components/CompanyLeaderboard';
import './App.css';

function App() {
  return (
    <Router>
      {/* Our Header is now always at the top */}
      <Header />

      {/* Main routes */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/company" element={<CompanyLeaderboard />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/compare" element={<ComparisonSection />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
