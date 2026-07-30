import React from "react";

function Header() {
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

        {/* Actions */}
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
          className="mobile-menu-button"
          aria-label="Open navigation menu"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Header;
