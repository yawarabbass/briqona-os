import React from "react";

const navigation = [
  { label: "Command Center", icon: "⌂" },
  { label: "Customers", icon: "◉" },
  { label: "Sales", icon: "↗" },
  { label: "Inventory", icon: "▦" },
  { label: "Finance", icon: "$" },
  { label: "HR", icon: "♙" },
  { label: "Operations", icon: "⚙" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">B</div>

        <div>
          <div className="brand-name">BRIQONA</div>
          <div className="brand-subtitle">OPERATING SYSTEM</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navigation.map((item, index) => (
          <button
            className={`nav-item ${index === 0 ? "active" : ""}`}
            key={item.label}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button className="nav-item">
          <span className="nav-icon">✦</span>
          <span>BRIQONA AI</span>
        </button>

        <button className="nav-item">
          <span className="nav-icon">?</span>
          <span>Help & Support</span>
        </button>

        <div className="user-card">
          <div className="user-avatar">A</div>

          <div>
            <div className="user-name">Business Admin</div>
            <div className="user-role">Administrator</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
