/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Master Sidebar
|--------------------------------------------------------------------------
*/

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="master-sidebar">

      <div className="master-sidebar-logo">
        <h2>BRIQONA OS</h2>
        <span>Master Panel</span>
      </div>

      <nav className="master-sidebar-nav">

        <button className="sidebar-item active">
          Dashboard
        </button>

        <button className="sidebar-item">
          Companies
        </button>

        <button className="sidebar-item">
          Plans
        </button>

        <button className="sidebar-item">
          Industries
        </button>

        <button className="sidebar-item">
          Modules
        </button>

        <button className="sidebar-item">
          Users
        </button>

        <button className="sidebar-item">
          Billing
        </button>

        <button className="sidebar-item">
          Reports
        </button>

        <button className="sidebar-item">
          AI Center
        </button>

        <button className="sidebar-item">
          Settings
        </button>

      </nav>

    </aside>
  );
          }
