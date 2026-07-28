import React from "react";

function StatCard({ label, value, change, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <span className="stat-label">{label}</span>
        <span className="stat-icon">{icon}</span>
      </div>

      <div className="stat-value">{value}</div>

      <div className="stat-change">{change}</div>
    </div>
  );
}

export default StatCard;
