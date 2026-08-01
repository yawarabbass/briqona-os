import { useState } from "react";
import "./Header.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },

  {
    label: "Solutions",
    dropdown: [
      { label: "CRM", href: "/solutions/crm" },
      { label: "Finance", href: "/solutions/finance" },
      { label: "Inventory", href: "/solutions/inventory" },
      { label: "Analytics", href: "/solutions/analytics" },
      { label: "Briqona AI", href: "/solutions/ai" },
    ],
  },

  {
    label: "Industries",
    dropdown: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Construction", href: "/industries/construction" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Retail & E-commerce", href: "/industries/retail" },
      { label: "Education", href: "/industries/education" },
    ],
  },

  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label) => {
    setOpenDropdown((current) =>
      current === label ? null : label
    );
  };

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">

          {/* LOGO */}
          <a
            href="/"
            className="site-header__brand"
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

          {/* DESKTOP NAV */}
          <nav className="site-header__desktop-nav">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  className="desktop-dropdown"
                  key={item.label}
                >
                  <button type="button">
                    {item.label}
                    <span>⌄</span>
                  </button>

                  <div className="desktop-dropdown__menu">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="site-header__actions">
            <a
              className="site-header__login"
              href="/login"
            >
              Log in
            </a>

            <a
              className="site-header__button"
              href="/register"
            >
              Start Free
              <span>→</span>
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            aria-label="Open menu"
            className={
              menuOpen
                ? "site-header__menu is-open"
                : "site-header__menu"
            }
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* DARK OVERLAY */}
      <div
        className={
          menuOpen
            ? "mobile-overlay is-visible"
            : "mobile-overlay"
        }
        onClick={closeMenu}
      />

      {/* MOBILE SIDEBAR */}
      <aside
        className={
          menuOpen
            ? "mobile-sidebar is-open"
            : "mobile-sidebar"
        }
      >
        {/* SIDEBAR TOP */}
        <div className="mobile-sidebar__top">
          <a
            href="/"
            className="mobile-sidebar__brand"
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

          <button
            type="button"
            className="mobile-sidebar__close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        {/* SIDEBAR NAV */}
        <nav className="mobile-sidebar__nav">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                className="mobile-dropdown"
                key={item.label}
              >
                <button
                  type="button"
                  className="mobile-dropdown__trigger"
                  onClick={() =>
                    toggleDropdown(item.label)
                  }
                >
                  <span>{item.label}</span>

                  <span
                    className={
                      openDropdown === item.label
                        ? "arrow rotated"
                        : "arrow"
                    }
                  >
                    ⌄
                  </span>
                </button>

                <div
                  className={
                    openDropdown === item.label
                      ? "mobile-dropdown__items is-open"
                      : "mobile-dropdown__items"
                  }
                >
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={closeMenu}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* SIDEBAR BOTTOM ACTIONS */}
        <div className="mobile-sidebar__bottom">
          <a
            className="mobile-sidebar__demo"
            href="/demo"
            onClick={closeMenu}
          >
            Book a Demo
            <span>→</span>
          </a>

          <a
            className="mobile-sidebar__contact"
            href="/contact"
            onClick={closeMenu}
          >
            Contact Sales
          </a>
        </div>
      </aside>
    </>
  );
}

export default Header;
