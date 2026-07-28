import React from "react";

function MetricCard({ title, value, trend, icon }) {
  return (
    <article className="metric-card">
      <div className="metric-card-header">
        <span>{title}</span>
        <span className="metric-card-icon">{icon}</span>
      </div>

      <div className="metric-card-value">{value}</div>

      <div className="metric-card-trend">{trend}</div>
    </article>
  );
}

export default MetricCard;
