import React, { useEffect } from "react";
import "../styles/home.css";

const solutions = [
  {
    icon: "01",
    title: "Business Intelligence",
    text: "Turn scattered business data into clear decisions and useful insights.",
  },
  {
    icon: "02",
    title: "AI Automation",
    text: "Automate repetitive workflows and give your team more time.",
  },
  {
    icon: "03",
    title: "Operations",
    text: "Bring tasks, processes and performance into one simple workspace.",
  },
  {
    icon: "04",
    title: "Customer Experience",
    text: "Create smoother customer journeys with smarter workflows.",
  },
  {
    icon: "05",
    title: "Growth & Marketing",
    text: "Understand what drives growth and find your best opportunities.",
  },
  {
    icon: "06",
    title: "Finance & Performance",
    text: "See the numbers that matter and identify areas to improve.",
  },
];

const features = [
  {
    number: "01",
    title: "One workspace",
    text: "Keep important business information, workflows and performance together.",
  },
  {
    number: "02",
    title: "AI-assisted decisions",
    text: "Ask questions in plain language and get useful recommendations.",
  },
  {
    number: "03",
    title: "Simple automation",
    text: "Build practical automations around the work your team already does.",
  },
  {
    number: "04",
    title: "Real-time visibility",
    text: "Understand what is happening without chasing spreadsheets.",
  },
  {
    number: "05",
    title: "Built to scale",
    text: "Start small and add capabilities as your business grows.",
  },
];

export default function Home() {
  useEffect(() => {
    const header = document.querySelector(".site-header");

    const revealElements =
      document.querySelectorAll("[data-reveal]");

    const handleScroll = () => {
      if (!header) return;

      header.classList.toggle(
        "is-scrolled",
        window.scrollY > 20
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <main className="home-page">
          {/* =========================
          HERO
          ========================= */}

      <section className="hero">
        <div className="container">
          <div className="hero-grid">

            <div className="hero-copy" data-reveal>

              <span className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                The smarter business operating system
              </span>

              <h1 className="hero-title">
                Run your business
                <br />
                with{" "}
                <span className="gradient-text">
                  clarity.
                </span>
              </h1>

              <p className="hero-description">
                Briqona brings intelligence, automation,
                operations and business performance into
                one simple workspace built for modern teams.
              </p>

              <div className="hero-actions">

                <a
                  href="/book-demo"
                  className="button button-primary"
                >
                  Book a demo
                  <span>→</span>
                </a>

                <a
                  href="#solutions"
                  className="hero-secondary"
                >
                  Explore solutions
                  <span>↓</span>
                </a>

              </div>

              <div className="hero-note">
                <span className="hero-note-check">
                  ✓
                </span>

                Start simple. Scale when you are ready.
              </div>

            </div>

            <div className="hero-visual" data-reveal>

              <div className="hero-glow" />

              <div className="hero-dashboard">
                <div className="dashboard-window">

                  <div className="dashboard-topbar">
                    <div className="window-dots">
                      <span />
                      <span />
                      <span />
                    </div>

                    <span className="dashboard-top-title">
                      Briqona OS
                    </span>
                  </div>

                  <div className="dashboard-body">

                    <aside className="dashboard-sidebar">
                      <div className="dashboard-sidebar-logo" />

                      <div className="dashboard-side-item active">
                        <i className="dashboard-side-icon" />
                        Overview
                      </div>

                      <div className="dashboard-side-item">
                        <i className="dashboard-side-icon" />
                        Analytics
                      </div>

                      <div className="dashboard-side-item">
                        <i className="dashboard-side-icon" />
                        Automation
                      </div>

                      <div className="dashboard-side-item">
                        <i className="dashboard-side-icon" />
                        Customers
                      </div>
                    </aside>

                    <main className="dashboard-content">

                      <div className="dashboard-heading">
                        <div>
                          <h3>Good morning</h3>
                          <p>
                            Here is what is happening today.
                          </p>
                        </div>

                        <span className="dashboard-status">
                          Systems healthy
                        </span>
                      </div>

                      <div className="dashboard-metrics">

                        <div className="metric-card">
                          <span className="metric-label">
                            Revenue
                          </span>

                          <strong className="metric-value">
                            $48.2K
                          </strong>

                          <span className="metric-change">
                            +18.4%
                          </span>
                        </div>

                        <div className="metric-card">
                          <span className="metric-label">
                            Customers
                          </span>

                          <strong className="metric-value">
                            1,284
                          </strong>

                          <span className="metric-change">
                            +9.7%
                          </span>
                        </div>

                        <div className="metric-card">
                          <span className="metric-label">
                            Efficiency
                          </span>

                          <strong className="metric-value">
                            91%
                          </strong>

                          <span className="metric-change">
                            +6.2%
                          </span>
                        </div>

                      </div>

                    </main>

                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
        {/* =========================
          TRUST STRIP
          ========================= */}

      <section className="trust-strip">
        <div className="container">

          <div className="trust-inner">

            <span className="trust-label">
              Built around the way modern teams work
            </span>

            <div className="trust-items">

              <span className="trust-item">
                <i className="trust-item-dot" />
                Intelligence
              </span>

              <span className="trust-item">
                <i className="trust-item-dot" />
                Automation
              </span>

              <span className="trust-item">
                <i className="trust-item-dot" />
                Operations
              </span>

              <span className="trust-item">
                <i className="trust-item-dot" />
                Growth
              </span>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          AI INTELLIGENCE
          ========================= */}

      <section className="home-section ai-section">
        <div className="container">

          <div className="ai-section-grid">

            <div
              className="ai-content"
              data-reveal
            >

              <span className="section-kicker">
                Intelligence layer
              </span>

              <h2 className="section-title">
                Your business,
                <br />
                easier to understand.
              </h2>

              <p className="section-description">
                Stop jumping between disconnected tools.
                Briqona helps turn your business activity
                into clear information and practical next
                steps.
              </p>

              <div className="ai-list">

                <div className="ai-list-item">

                  <span className="ai-list-icon">
                    AI
                  </span>

                  <div>
                    <strong>
                      Ask in plain language
                    </strong>

                    <span>
                      Get answers without learning a
                      complicated analytics system.
                    </span>
                  </div>

                </div>


                <div className="ai-list-item">

                  <span className="ai-list-icon">
                    ↗
                  </span>

                  <div>
                    <strong>
                      Find opportunities
                    </strong>

                    <span>
                      Discover patterns and areas where
                      your business can improve.
                    </span>
                  </div>

                </div>


                <div className="ai-list-item">

                  <span className="ai-list-icon">
                    ✓
                  </span>

                  <div>
                    <strong>
                      Turn insight into action
                    </strong>

                    <span>
                      Move from information to a clear
                      next step.
                    </span>
                  </div>

                </div>

              </div>

            </div>


            <div
              className="ai-console-wrap"
              data-reveal
            >

              <div className="ai-console">

                <div className="ai-console-header">

                  <div className="ai-console-title">

                    <span className="ai-console-avatar">
                      AI
                    </span>

                    <div>
                      <strong>
                        Briqona Intelligence
                      </strong>

                      <span>
                        Business assistant
                      </span>
                    </div>

                  </div>

                  <span className="ai-console-status">
                    Online
                  </span>

                </div>


                <div className="ai-console-body">

                  <div className="ai-message">

                    <span className="ai-message-label">
                      Ask anything
                    </span>

                    <p>
                      Which part of my business should I
                      focus on this week?
                    </p>

                  </div>


                  <div className="ai-recommendations">

                    <div className="ai-recommendation">

                      <div>
                        <span className="ai-recommendation-number">
                          01
                        </span>

                        <span>
                          Follow up with high-value customers
                        </span>
                      </div>

                      <button type="button">
                        Open
                      </button>

                    </div>


                    <div className="ai-recommendation">

                      <div>
                        <span className="ai-recommendation-number">
                          02
                        </span>

                        <span>
                          Automate your weekly reporting
                        </span>
                      </div>

                      <button type="button">
                        Open
                      </button>

                    </div>


                    <div className="ai-recommendation">

                      <div>
                        <span className="ai-recommendation-number">
                          03
                        </span>

                        <span>
                          Review your highest growth channel
                        </span>
                      </div>

                      <button type="button">
                        Open
                      </button>

                    </div>

                  </div>


                  <div className="ai-input">

                    <span>
                      Ask Briqona anything...
                    </span>

                    <button
                      type="button"
                      aria-label="Send"
                    >
                      →
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
        {/* =========================
          SOLUTIONS
          ========================= */}

      <section
        className="home-section solutions-section"
        id="solutions"
      >
        <div className="container">

          <div className="section-heading" data-reveal>

            <span className="section-kicker">
              Solutions
            </span>

            <h2 className="section-title">
              One platform.
              <br />
              Different business needs.
            </h2>

            <p className="section-description">
              Start with the part of your business that
              needs the most attention. Expand your
              workspace as you grow.
            </p>

          </div>


          <div className="solutions-grid">

            {solutions.map((solution, index) => (
              <article
                className="solution-card"
                key={solution.title}
                data-reveal
                style={{
                  transitionDelay: `${index * 70}ms`,
                }}
              >

                <span className="solution-icon">
                  {solution.icon}
                </span>

                <h3>
                  {solution.title}
                </h3>

                <p>
                  {solution.text}
                </p>

                <span className="solution-link">
                  Explore solution →
                </span>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =========================
          FEATURES
          ========================= */}

      <section className="home-section features-section">
        <div className="container">

          <div className="features-layout">

            <div
              className="features-intro"
              data-reveal
            >

              <span className="section-kicker">
                Why Briqona
              </span>

              <h2 className="section-title">
                Powerful
                <br />
                without the
                <br />
                complexity.
              </h2>

              <p className="section-description">
                Designed for people who want better
                business systems without becoming
                technology experts.
              </p>

            </div>


            <div className="features-list">

              {features.map((feature, index) => (
                <article
                  className="feature-card"
                  key={feature.title}
                  data-reveal
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >

                  <span className="feature-number">
                    {feature.number}
                  </span>

                  <div>

                    <h3>
                      {feature.title}
                    </h3>

                    <p>
                      {feature.text}
                    </p>

                  </div>

                  <span className="feature-arrow">
                    →
                  </span>

                </article>
              ))}

            </div>

          </div>

        </div>
      </section>
      {/* =========================
          BUSINESS HEALTH
          ========================= */}

      <section className="home-section health-section">
        <div className="container">

          <div className="health-panel">

            <div
              className="health-copy"
              data-reveal
            >

              <span className="section-kicker">
                Business health
              </span>

              <h2 className="section-title">
                Know where your
                <br />
                business stands.
              </h2>

              <p className="section-description">
                Replace uncertainty with a simple view of
                the signals that matter most. Understand
                what is working, what needs attention and
                where the next opportunity is.
              </p>

              <div className="hero-actions">

                <a
                  href="/solutions"
                  className="button button-primary"
                >
                  See how it works
                  <span>→</span>
                </a>

              </div>

            </div>


            <div
              className="health-dashboard"
              data-reveal
            >

              <div className="health-dashboard-head">

                <span>
                  Overall business score
                </span>

                <strong>
                  Improving
                </strong>

              </div>


              <div className="health-dashboard-score">

                <strong>
                  82
                </strong>

                <span>
                  / 100
                </span>

              </div>


              <div className="health-progress">
                <span />
              </div>


              <div className="health-items">

                <div className="health-item">

                  <div>
                    <i />
                    <span>
                      Revenue performance
                    </span>
                  </div>

                  <strong>
                    Strong
                  </strong>

                </div>


                <div className="health-item">

                  <div>
                    <i />
                    <span>
                      Customer retention
                    </span>
                  </div>

                  <strong>
                    Watch
                  </strong>

                </div>


                <div className="health-item">

                  <div>
                    <i />
                    <span>
                      Operational efficiency
                    </span>
                  </div>

                  <strong>
                    Excellent
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          FINAL CTA
          ========================= */}

      <section className="home-section cta-section">
        <div className="container">

          <div className="cta-box" data-reveal>

            <span className="section-kicker">
              Ready when you are
            </span>

            <h2>
              Make your business
              <br />
              easier to run.
            </h2>

            <p>
              Start with the essentials. Build your
              business operating system one step at a time.
            </p>

            <div className="cta-actions">

              <a
                href="/book-demo"
                className="button button-primary"
              >
                Book a demo
                <span>→</span>
              </a>

              <a
                href="/pricing"
                className="hero-secondary"
              >
                View pricing
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          WHATSAPP FLOAT
          ========================= */}

      <a
        href="https://wa.me/"
        className="whatsapp-float"
        aria-label="Contact us on WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        ☎
      </a>

    </main>
  );
                }
