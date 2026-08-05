import "./Sidebar.css";
import { useMemo, useState } from "react";

const navigation = [

  {
    id: "dashboard",
    title: "Dashboard",
    icon: "🏠",
    path: "/dashboard",
  },

  {
    id: "companies",
    title: "Companies",
    icon: "🏢",
    path: "/companies",
  },

  {
    id: "plans",
    title: "Plans",
    icon: "📦",
    path: "/plans",
  },

  {
    id: "industries",
    title: "Industries",
    icon: "🏭",
    path: "/industries",
  },

  {
    id: "modules",
    title: "Modules",
    icon: "🧩",
    path: "/modules",
  },

  {
    id: "users",
    title: "Users",
    icon: "👥",
    path: "/users",
  },

  {
    id: "reports",
    title: "Reports",
    icon: "📊",
    path: "/reports",
  },

  {
    id: "billing",
    title: "Billing",
    icon: "💳",
    path: "/billing-admin",
  },

  {
    id: "settings",
    title: "Settings",
    icon: "⚙️",
    path: "/settings",
  },

];

export default function Sidebar({

  sidebarOpen,

  closeSidebar,

}) {

  const [collapsed, setCollapsed] =
    useState(false);

  const currentPath = useMemo(() => {

    return window.location.pathname;

  }, []);

  const toggleCollapse = () => {

    setCollapsed((prev) => !prev);

  };

  return (

    <aside

      className={`sidebar ${collapsed ? "collapsed" : ""} ${sidebarOpen ? "mobile-open" : ""}`}

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

          type="button"

          className="collapse-button"

          onClick={toggleCollapse}

        >

          {collapsed ? "➜" : "⬅"}

        </button>

      </div>

      <nav className="sidebar-menu">
                {navigation.map((item) => {

          const isActive =
            currentPath === item.path;

          return (

            <button

              key={item.id}

              type="button"

              className={`sidebar-item ${
                isActive ? "active" : ""
              }`}

              onClick={() => {

                window.location.href =
                  item.path;

                closeSidebar();

              }}

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

          );

        })}

      </nav>

      <div className="sidebar-footer">

        <button
          type="button"
          className="sidebar-item"
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
          type="button"
          className="sidebar-item"
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
          type="button"
          className="sidebar-item logout"
          onClick={() => {

            closeSidebar();

            window.location.href = "/login";

          }}
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
