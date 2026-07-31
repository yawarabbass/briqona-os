import { useState } from "react";
import "./Header.css";

const navItems = [
  {
    label: "Platform",
    dropdown: [
      "Dashboard",
      "CRM",
      "Projects",
      "Finance",
      "Inventory",
      "Analytics",
    ],
  },
  {
    label: "Solutions",
    dropdown: [
      "Business Management",
      "Workflow Automation",
      "Data Intelligence",
      "AI Assistant",
    ],
  },
  {
    label: "Industries",
    dropdown: [
      "Healthcare",
      "Construction",
      "Real Estate",
      "Retail & E-commerce",
      "Education",
      "Hospitality",
      "Agencies",
      "Legal",
    ],
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">

        <a
          className="site-header__brand"
          href="/"
          onClick={closeMenu}
        >
          <span className="site-header__logo">
            <i />
            <i />
            <i />
            <i />
          </span>

          <span className="site-header__brand-text">
            <strong>
              BRIQONA <em>OS</em>
            </strong>

            <small>
              Business Operating System
            </small>
          </span>
        </a>


        <nav
          className={`site-header__nav ${
            menuOpen ? "site-header__nav--open" : ""
          }`}
        >

          <a href="/" onClick={closeMenu}>
            Home
          </a>


          {navItems.map((item, index) => (
            <div
              className="nav-dropdown"
              key={item.label}
              onMouseEnter={() =>
                setActiveDropdown(index)
              }
              onMouseLeave={() =>
                setActiveDropdown(null)
              }
            >

              <button
                className="nav-dropdown__button"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === index
                      ? null
                      : index
                  )
                }
              >
                {item.label}
                <span>⌄</span>
              </button>


              {activeDropdown === index && (
                <div className="nav-dropdown__menu">

                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      onClick={closeMenu}
                    >
                      {subItem}
                    </a>
                  ))}

                </div>
              )}

            </div>
          ))}


          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

        </nav>


        <div className="site-header__actions">

          <a
            className="site-header__login"
            href="#login"
          >
            Log in
          </a>


          <a
            className="site-header__button"
            href="#start"
          >
            Start Free
            <span>→</span>
          </a>

        </div>


        <button
          className={`site-header__menu ${
            menuOpen
              ? "site-header__menu--open"
              : ""
          }`}
          type="button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}

export default Header;
