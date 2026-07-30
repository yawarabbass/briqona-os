import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container nav-inner">

        {/* Brand */}
        <a href="/" className="brand" aria-label="Briqona OS Home">
          <span className="brand-mark">B</span>

          <span className="brand-copy">
            <strong>BRIQONA</strong>
            <small>OPERATING SYSTEM</small>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="main-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/platform">Platform</a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <a href="/login" className="nav-login">
            Login
          </a>

          <a href="/get-started" className="btn btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`mobile-menu-button ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-nav is-open" aria-label="Mobile navigation">
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/platform" onClick={closeMenu}>Platform</a>
          <a href="/pricing" onClick={closeMenu}>Pricing</a>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>
          <a href="/login" onClick={closeMenu}>Login</a>

          <a
            href="/get-started"
            className="btn btn-primary"
            onClick={closeMenu}
          >
            Get Started
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
