import "./Sidebar.css";

export default function Logo({ collapsed = false }) {
  return (
    <div className="sidebar-logo-wrapper">

      <div className="sidebar-logo">

        BO

      </div>

      {!collapsed && (

        <div className="sidebar-logo-text">

          <h2>

            BRIQONA OS

          </h2>

          <span>

            Enterprise Platform

          </span>

        </div>

      )}

    </div>
  );
}
