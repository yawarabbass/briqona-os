import "./Sidebar.css";
import { useState } from "react";

const menuItems = [
  { id: 1, title: "Dashboard", icon: "🏠" },
  { id: 2, title: "Workspace", icon: "💼" },
  { id: 3, title: "Companies", icon: "🏢" },
  { id: 4, title: "Plans", icon: "📦" },
  { id: 5, title: "Industries", icon: "🏭" },
  { id: 6, title: "Modules", icon: "🧩" },
  { id: 7, title: "Users", icon: "👥" },
  { id: 8, title: "Reports", icon: "📊" },
  { id: 9, title: "Billing", icon: "💳" },
  { id: 10, title: "Settings", icon: "⚙️" },
];

export default function Sidebar({
  sidebarOpen,
  closeSidebar,
}) {

  const [collapsed, setCollapsed] =
    useState(false);

  const toggleCollapse = () => {

    setCollapsed(!collapsed);

  };

  return (

    <aside

      className={
        `
        sidebar
        ${collapsed ? "collapsed" : ""}
        ${sidebarOpen ? "mobile-open" : ""}
        `
      }

    >

      <div className="sidebar-top">

        <div className="sidebar-brand">

          <div className="sidebar-logo">

            BO

          </div>

          {!collapsed && (

            <div className="sidebar-brand-text">

              <h2>

                BRIQONA OS

              </h2>

              <span>

                Enterprise Platform

              </span>

            </div>

          )}

        </div>

        <button

          className="collapse-button"

          type="button"

          onClick={toggleCollapse}

        >

          {collapsed ? "➜" : "⬅"}

        </button>

      </div>

      <nav className="sidebar-menu">
                {menuItems.map((item) => (

          <button
            key={item.id}
            type="button"
            className="sidebar-item"
            onClick={closeSidebar}
          >

            <span className="sidebar-item-icon">

              {item.icon}

            </span>

            {!collapsed && (

              <span className="sidebar-item-title">

                {item.title}

              </span>

            )}

          </button>

        ))}

      </nav>

      <div className="sidebar-footer">

        <button
          className="sidebar-item"
          type="button"
        >

          <span className="sidebar-item-icon">
            🌙
          </span>

          {!collapsed && (

            <span className="sidebar-item-title">

              Theme

            </span>

          )}

        </button>

        <button
          className="sidebar-item"
          type="button"
        >

          <span className="sidebar-item-icon">
            ❓
          </span>

          {!collapsed && (

            <span className="sidebar-item-title">

              Help

            </span>

          )}

        </button>

        <button
          className="sidebar-item logout"
          type="button"
          onClick={closeSidebar}
        >

          <span className="sidebar-item-icon">
            ⏻
          </span>

          {!collapsed && (

            <span className="sidebar-item-title">

              Logout

            </span>

          )}

        </button>

      </div>

    </aside>

  );

}
