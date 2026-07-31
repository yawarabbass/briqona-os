import { useState } from "react";
import "./Header.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">

        <a
          className="site-header__brand"
          href="/"
          onClick={closeMenu}
          aria-label="Briqona OS Home"
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

            <small>Business Operating System</small>
          </span>
        </a>

        <nav
          className={`site-header__nav ${
            menuOpen ? "site-header__nav--open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
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
            menuOpen ? "site-header__menu--open" : ""
          }`}
          type="button"
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
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
