import React from "react";
import "./CompanyLeaderboard.css";

const CompanyLeaderboard = () => {
  // Example data for the leaderboard
  const leaderboardData = [
    { name: "Meta", upvotes: 120, movement: "up" },
    { name: "OpenAI", upvotes: 105, movement: "double-up" },
    { name: "McKinsey & Company", upvotes: 90, movement: "down" },
    { name: "Google", upvotes: 85, movement: "double-down" },
    { name: "Apple", upvotes: 80, movement: "up" },
  ];

  // Function to render movement arrows
  const renderMovement = (movement) => {
    switch (movement) {
      case "up":
        return <span className="arrow up">↑</span>;
      case "down":
        return <span className="arrow down">↓</span>;
      case "double-up":
        return (
          <span className="arrow double-up">
            ↑<br />↑
          </span>
        );
      case "double-down":
        return (
          <span className="arrow double-down">
            ↓<br />↓
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section className="leaderboard-page">
      <h1 className="leaderboard-title">Company Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Upvotes</th>
            <th>Ranking Movement</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((company, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{company.name}</td>
              <td>{company.upvotes}</td>
              <td>{renderMovement(company.movement)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CompanyLeaderboard;
