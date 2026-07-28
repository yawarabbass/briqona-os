import React from "react";

function ActivityCard({ title, description, time, icon }) {
  return (
    <div className="activity-card">
      <div className="activity-icon">{icon}</div>

      <div className="activity-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <span>{time}</span>
      </div>
    </div>
  );
}

export default ActivityCard;
