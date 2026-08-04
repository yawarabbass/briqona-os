import "./Header.css";
import { useState } from "react";

export default function Header() {

  const [search, setSearch] = useState("");

  return (

    <header className="master-header">

      <div className="header-left">

        <button
          className="hamburger-button"
          type="button"
          aria-label="Open Menu"
        >
          ☰
        </button>

        <div className="header-search">

          <span className="search-icon">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>

      <div className="header-right">

        <button
          className="header-action"
          type="button"
          aria-label="Notifications"
        >

          🔔

          <span className="notification-dot">
            3
          </span>

        </button>

        <button
          className="header-action"
          type="button"
          aria-label="Messages"
        >

          💬

          <span className="notification-dot">
            5
          </span>

        </button>

        <button
          className="header-action"
          type="button"
          aria-label="Theme"
        >

          🌙

        </button>

        <div className="header-profile">

          <div className="profile-avatar">

            BO

          </div>

          <div className="profile-info">

            <h4>

              Admin

            </h4>

            <span>

              Super Administrator

            </span>

          </div>

        </div>

      </div>

    </header>

  );

}
