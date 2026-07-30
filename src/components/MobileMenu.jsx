import React from "react";

function MobileMenu() {
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      <a href="/">Home</a>
      <a href="/platform">Platform</a>
      <a href="/pricing">Pricing</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/login">Login</a>
      <a href="/get-started" className="btn btn-primary">
        Get Started
      </a>
    </nav>
  );
}

export default MobileMenu;
