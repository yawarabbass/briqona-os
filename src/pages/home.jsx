import React from "react";

const features = [
  {
    icon: "▦",
    title: "Business Platform",
    text: "Manage your business operations from one organized workspace.",
  },
  {
    icon: "◈",
    title: "Smart Solutions",
    text: "Simple tools designed to help businesses work faster and smarter.",
  },
  {
    icon: "◎",
    title: "Analytics",
    text: "Understand your business with clear and useful insights.",
  },
  {
    icon: "⚡",
    title: "Built for Growth",
    text: "A scalable foundation ready for future web, mobile and business needs.",
  },
];

const payments = [
  "JazzCash",
  "Easypaisa",
  "UPaisa",
  "VISA",
  "Mastercard",
];

function Home() {
  return (
    <div className="home-page">
      {/* HEADER */}
      <header className="home-header">
        <a href="/" className="home-brand">
          <span className="home-brand-mark">B</span>

          <span>
            <strong>BRIQONA</strong>
            <small>BUSINESS OS</small>
          </span>
        </a>

        <nav className="home-nav">
          <a href="#platform">Platform</a>
          <a href="#solutions">Solutions</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="home-header-actions">
          <a href="/pages/login.html" className="home-login">
            Login
          </a>

          <a href="/pages/register.html" className="home-register">
            Get Started
          </a>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="home-hero" id="platform">
          <div className="home-hero-content">
            <div className="home-badge">
              <span></span>
              Smart Business Operating System
            </div>

            <h1>
              Run your business
              <br />
              <span>smarter with Briqona.</span>
            </h1>

            <p>
              Briqona brings your business tools, operations, analytics and
              resources together in one modern platform built for simplicity,
              productivity and growth.
            </p>

            <div className="home-hero-buttons">
              <a href="/pages/register.html" className="home-btn-primary">
                Get Started
                <span>→</span>
              </a>

              <a href="/pages/book-demo.html" className="home-btn-secondary">
                Book a Demo
              </a>
            </div>

            <div className="home-trust">
              <span>✓ Easy to use</span>
              <span>✓ Built for businesses</span>
              <span>✓ Ready to scale</span>
            </div>
          </div>

          {/* DASHBOARD PREVIEW */}
          <div className="home-dashboard-preview">
            <div className="preview-window">
              <div className="preview-topbar">
                <div className="preview-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <span>Briqona Dashboard</span>

                <div className="preview-avatar">B</div>
              </div>

              <div className="preview-body">
                <aside className="preview-sidebar">
                  <div className="preview-logo">B</div>

                  <div className="preview-menu active">⌂</div>
                  <div className="preview-menu">▦</div>
                  <div className="preview-menu">◈</div>
                  <div className="preview-menu">◫</div>
                  <div className="preview-menu">⚙</div>
                </aside>

                <div className="preview-content">
                  <div className="preview-heading">
                    <div>
                      <small>OVERVIEW</small>
                      <h3>Good morning, welcome back.</h3>
                    </div>

                    <button>+ New</button>
                  </div>

                  <div className="preview-stats">
                    <div>
                      <small>Total Revenue</small>
                      <strong>$24,680</strong>
                      <span>+12.8%</span>
                    </div>

                    <div>
                      <small>Customers</small>
                      <strong>1,248</strong>
                      <span>+8.4%</span>
                    </div>

                    <div>
                      <small>Orders</small>
                      <strong>684</strong>
                      <span>+14.2%</span>
                    </div>
                  </div>

                  <div className="preview-chart">
                    <div className="preview-chart-head">
                      <strong>Business Performance</strong>
                      <span>Last 7 months</span>
                    </div>

                    <div className="bars">
                      <i style={{ height: "35%" }}></i>
                      <i style={{ height: "48%" }}></i>
                      <i style={{ height: "42%" }}></i>
                      <i style={{ height: "62%" }}></i>
                      <i style={{ height: "58%" }}></i>
                      <i style={{ height: "76%" }}></i>
                      <i style={{ height: "92%" }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="home-section" id="features">
          <div className="home-section-heading">
            <div>
              <span className="home-eyebrow">WHY BRIQONA</span>

              <h2>
                Everything you need
                <br />
                <span>to move forward.</span>
              </h2>
            </div>

            <p>
              One professional ecosystem for managing, understanding and
              growing your business.
            </p>
          </div>

          <div className="home-feature-grid">
            {features.map((feature) => (
              <article className="home-feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

                <a href="/pages/features.html">
                  Explore <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="home-solutions" id="solutions">
          <div className="solution-copy">
            <span className="home-eyebrow">ONE PLATFORM</span>

            <h2>
              Built around the
              <br />
              <span>way businesses work.</span>
            </h2>

            <p>
              From customers and products to analytics, reports and daily
              operations, Briqona gives your team a connected workspace.
            </p>

            <a href="/pages/platform.html" className="home-btn-primary">
              Explore Platform
              <span>→</span>
            </a>
          </div>

          <div className="solution-list">
            <div>
              <span>01</span>
              <strong>Business Management</strong>
              <p>Keep essential business information organized.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Customers & Orders</strong>
              <p>Manage customers, orders and everyday activity.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Reports & Analytics</strong>
              <p>Turn business activity into useful insights.</p>
            </div>

            <div>
              <span>04</span>
              <strong>Resources & Support</strong>
              <p>Access documentation, help and business resources.</p>
            </div>
          </div>
        </section>

        {/* PRICING CTA */}
        <section className="home-cta" id="pricing">
          <div>
            <span className="home-eyebrow">READY WHEN YOU ARE</span>

            <h2>
              Start building a
              <br />
              <span>smarter business.</span>
            </h2>

            <p>
              Explore Briqona and discover a simpler way to manage your
              business.
            </p>
          </div>

          <div className="home-cta-actions">
            <a href="/pages/register.html" className="home-btn-primary">
              Create Account
              <span>→</span>
            </a>

            <a href="/pages/pricing.html" className="home-btn-secondary">
              View Pricing
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="home-footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="home-brand">
              <span className="home-brand-mark">B</span>

              <span>
                <strong>BRIQONA</strong>
                <small>BUSINESS OS</small>
              </span>
            </a>

            <p>
              Empowering businesses with simple, smart and scalable digital
              solutions.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.facebook.com/share/14jmcYDUkVt/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                f
              </a>

              <a href="#contact" aria-label="Instagram">
                ◎
              </a>

              <a href="#contact" aria-label="LinkedIn">
                in
              </a>

              <a href="#contact" aria-label="YouTube">
                ▶
              </a>

              <a href="#contact" aria-label="X">
                𝕏
              </a>

              <a
                href="https://wa.me/923348101110"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                ☎
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Platform</h4>
            <a href="/pages/platform.html">Platform</a>
            <a href="/pages/features.html">Features</a>
            <a href="/pages/products.html">Products</a>
            <a href="/pages/analytics.html">Analytics</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="/pages/about.html">About</a>
            <a href="/pages/contact.html">Contact</a>
            <a href="/pages/book-demo.html">Book a Demo</a>
            <a href="/pages/careers.html">Careers</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <a href="/pages/documentation.html">Documentation</a>
            <a href="/pages/faq.html">FAQ</a>
            <a href="/pages/security.html">Security</a>
            <a href="/pages/privacy.html">Privacy</a>
          </div>

          <div className="footer-contact">
            <h4>Get in touch</h4>

            <a href="https://wa.me/923348101110" target="_blank" rel="noreferrer">
              WhatsApp
              <strong>+92 334 8101110</strong>
            </a>

            <a href="tel:+923355551218">
              Support
              <strong>0335 5551218</strong>
            </a>

            <div className="payment-methods">
              <small>ONLINE PAYMENTS</small>

              <div>
                {payments.map((payment) => (
                  <span key={payment}>{payment}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Briqona. All rights reserved.</span>

          <span className="footer-designed">
            Designed & built professionally for Briqona
          </span>

          <div>
            <a href="/pages/terms.html">Terms</a>
            <a href="/pages/privacy.html">Privacy</a>
            <a href="/pages/cookies.html">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
