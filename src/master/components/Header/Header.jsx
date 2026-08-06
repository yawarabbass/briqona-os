import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="master-topbar">

      <div className="topbar-left">

        <button className="menu-btn">
          ☰
        </button>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search anything..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>

      <div className="topbar-right">

        <button className="ai-btn">
          AI Copilot
        </button>

        <button className="mission-btn">
          AI Mission Center
        </button>

        <button className="icon-btn">
          🔔
        </button>

        <button className="icon-btn">
          💬
        </button>

        <div className="profile-box">

          <div className="avatar">
            A
          </div>

          <div className="profile-info">
            <strong>Administrator</strong>
            <span>Super Admin</span>
          </div>

        </div>

      </div>

    </header>
  );
}
