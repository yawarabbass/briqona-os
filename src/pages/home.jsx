import React from "react";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="navbar">
          <a href="/" className="brand">
            <span className="brand-mark">B</span>
            <span className="brand-text">
              BRIQONA<span>OS</span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#platform">Platform</a>
            <a href="#ai">AI</a>
            <a href="#industries">Industries</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="nav-actions">
            <a href="/pages/login.html" className="login-link">
              Log in
            </a>

            <a href="/pages/register.html" className="btn btn-primary">
              Start Free
            </a>
          </div>

          <button className="menu-button" aria-label="Open menu">
            ☰
          </button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot"></span>
              INTELLIGENT BUSINESS OPERATING SYSTEM
            </div>

            <h1>
              One Core.
              <br />
              <span>Every Business.</span>
            </h1>

            <p className="hero-description">
              Run your customers, sales, operations, inventory, finance and
              people from one connected business operating system.
            </p>

            <div className="hero-actions">
              <a href="/pages/register.html" className="btn btn-primary btn-large">
                Start Free →
              </a>

              <a href="#platform" className="btn btn-secondary btn-large">
                Explore Platform
              </a>
            </div>

            <p className="hero-note">
              Start with a free trial. Upgrade when your business is ready.
            </p>
          </div>

          <div className="hero-preview">
            <div className="preview-window">
              <div className="preview-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <strong>BRIQONA OS</strong>

                <span className="live-status">
                  ● Live
                </span>
              </div>

              <div className="preview-body">
                <aside className="preview-sidebar">
                  <div className="preview-logo">B</div>
                  <span className="active">⌂</span>
                  <span>▦</span>
                  <span>◫</span>
                  <span>◎</span>
                  <span>◈</span>
                </aside>

                <div className="preview-content">
                  <div className="preview-top">
                    <div>
                      <small>BUSINESS COMMAND</small>
                      <h3>Good morning.</h3>
                    </div>

                    <span>Today</span>
                  </div>

                  <div className="business-pulse">
                    <div>
                      <small>BUSINESS PULSE</small>
                      <strong>92%</strong>
                    </div>

                    <span className="pulse-good">Healthy</span>

                    <div className="pulse-bar">
                      <span></span>
                    </div>
                  </div>

                  <div className="metrics">
                    <div className="metric">
                      <small>Revenue</small>
                      <strong>$48,290</strong>
                      <span>↑ 18.4%</span>
                    </div>

                    <div className="metric">
                      <small>Customers</small>
                      <strong>2,841</strong>
                      <span>↑ 12.1%</span>
                    </div>

                    <div className="metric">
                      <small>Orders</small>
                      <strong>1,284</strong>
                      <span>↑ 8.7%</span>
                    </div>
                  </div>

                  <div className="ai-command">
                    <div className="ai-icon">✦</div>

                    <div>
                      <small>ASK BRIQONA AI</small>
                      <p>What needs my attention today?</p>
                    </div>

                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
