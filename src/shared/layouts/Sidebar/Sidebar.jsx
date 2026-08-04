import "./Sidebar.css";
import { useState } from "react";

const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: "🏠",
    active: true,
  },
  {
    id: 2,
    title: "Workspace",
    icon: "💼",
    active: false,
  },
  {
    id: 3,
    title: "Companies",
    icon: "🏢",
    active: false,
  },
  {
    id: 4,
    title: "Plans",
    icon: "📦",
    active: false,
  },
  {
    id: 5,
    title: "Industries",
    icon: "🏭",
    active: false,
  },
  {
    id: 6,
    title: "Modules",
    icon: "🧩",
    active: false,
  },
  {
    id: 7,
    title: "Users",
    icon: "👥",
    active: false,
  },
  {
    id: 8,
    title: "Reports",
    icon: "📊",
    active: false,
  },
  {
    id: 9,
    title: "Billing",
    icon: "💳",
    active: false,
  },
  {
    id: 10,
    title: "Settings",
    icon: "⚙️",
    active: false,
  },
];

export default function Sidebar() {

  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (

    <aside
      className={
        collapsed
          ? "sidebar collapsed"
          : "sidebar"
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
          onClick={toggleSidebar}
          type="button"
        >

          {collapsed ? "➜" : "⬅"}

        </button>

      </div>

      <div className="sidebar-search">

        {!collapsed && (

          <input
            type="text"
            placeholder="Search menu..."
          />

        )}

      </div>

      <nav className="sidebar-menu">
                {menuItems.map((item) => (

          <button
            key={item.id}
            className={
              item.active
                ? "sidebar-item active"
                : "sidebar-item"
            }
            type="button"
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
              Help Center
            </span>

          )}

        </button>

        <button
          className="sidebar-item logout"
          type="button"
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
