import React from "react";

function QuickAction({ title, description, icon }) {
  return (
    <button className="quick-action">
      <span className="quick-action-icon">{icon}</span>

      <span className="quick-action-content">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>

      <span className="quick-action-arrow">→</span>
    </button>
  );
}

export default QuickAction;
