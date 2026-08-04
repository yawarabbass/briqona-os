import "./Sidebar.css";

const menuItems = [
  "Dashboard",
  "Workspace",
  "Companies",
  "Plans",
  "Industries",
  "Modules",
  "Users",
  "Reports",
  "Billing",
  "Settings",
];

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>BRIQONA</h2>
        <span>Operating System</span>
      </div>

      <nav className="sidebar-nav">

        {menuItems.map((item) => (
          <button
            key={item}
            className="sidebar-link"
            type="button"
          >
            <span className="sidebar-icon">◉</span>

            <span>{item}</span>
          </button>
        ))}

      </nav>

      <div className="sidebar-footer">

        <button className="sidebar-link" type="button">
          🌙 Theme
        </button>

        <button className="sidebar-link" type="button">
          ❓ Help
        </button>

        <button className="sidebar-link logout" type="button">
          ⏻ Logout
        </button>

      </div>

    </aside>
  );
}
