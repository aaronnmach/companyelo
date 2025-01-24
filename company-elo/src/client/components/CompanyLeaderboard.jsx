import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "../components/CompanyLeaderboard.css";

export default function CompanyLeaderboard() {
  // Placeholder data for the leaderboard
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState("All-Time");

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };

  useEffect(() => {
    const socket = io("http://localhost:5001");
    socket.on("connect", () => {
      console.log("Connected to socket.io server");
    })
    socket.on("leaderboard_update", (data) => {
      console.log("Received updated leaderboard:", data);
      setLeaderboard(data);
    })
    socket.on("disconnect", () => {
      console.log("Disconnected from socket.io server");
    })
    socket.on("error", (err) => {
      console.error("Socket.IO connection error:", err);
    })

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:5001/company")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error, status: ${res.status}`);
      return res.json()
    })
    .then((data) => {
      setLeaderboard(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
  }, []);

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
          {leaderboard.map((entry, index) => (
            <tr key={entry.id || entry.name}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.elo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
