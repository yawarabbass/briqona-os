import { NavLink } from "react-router-dom";
import sidebarMenu from "../../data/sidebarMenu";

export default function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-logo">

        <h2>BRIQONA OS</h2>

        <span>Enterprise SaaS</span>

      </div>

      <nav className="sidebar-menu">

        {sidebarMenu.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span>{item.icon}</span>

            <span>{item.title}</span>

          </NavLink>

        ))}

      </nav>

      <div className="sidebar-plan">

        <h4>Professional Plan</h4>

        <p>Unlimited Companies</p>

        <button>
          Manage Plan
        </button>

      </div>

    </div>
  );
}
