import React, { useState } from "react";
import "../components/CompanyLeaderboard.css";

export default function CompanyLeaderboard() {
  // Placeholder data for the leaderboard
  const leaderboardData = [
    { name: "Meta", upvotes: 120 },
    { name: "OpenAI", upvotes: 105 },
    { name: "McKinsey & Company", upvotes: 90 },
    { name: "Google", upvotes: 85 },
    { name: "Apple", upvotes: 80 },
  ];

  const [period, setPeriod] = useState("All-Time");

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>

      {/* Time Period Buttons */}
      <div className="duration-buttons">
        <button
          onClick={handleClick}
          data-id="7"
          className={period === "7" ? "active" : ""}
        >
          Companies
        </button>
        <button
          onClick={handleClick}
          data-id="30"
          className={period === "30" ? "active" : ""}
        >
          Careers
        </button>
      </div>

      {/* Leaderboard Table */}
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Upvotes</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((company, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{company.name}</td>
              <td>{company.upvotes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
