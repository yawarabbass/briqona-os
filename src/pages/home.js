import React, { useEffect, useRef } from "react";
import "../styles/home.css";

const solutions = [
  {
    number: "01",
    title: "Business Intelligence",
    text: "Turn scattered business data into clear decisions and useful insights.",
  },
  {
    number: "02",
    title: "AI Automation",
    text: "Automate repetitive workflows and give your team more time.",
  },
  {
    number: "03",
    title: "Operations",
    text: "Bring tasks, processes and performance into one simple workspace.",
  },
  {
    number: "04",
    title: "Customer Experience",
    text: "Create smoother customer journeys with smarter workflows.",
  },
  {
    number: "05",
    title: "Growth & Marketing",
    text: "Understand what drives growth and find your best opportunities.",
  },
  {
    number: "06",
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
  const solutionsRef = useRef(null);

  useEffect(() => {
    const header = document.querySelector(".site-header");
    const revealElements = document.querySelectorAll("[data-reveal]");

    const handleScroll = () => {
      if (header) {
        header.classList.toggle("is-scrolled", window.scrollY > 20);
      }
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

    revealElements.forEach((element) => observer.observe(element));

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCardMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const handleCardLeave = (event) => {
    const card = event.currentTarget;

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <main className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">
        <div className="container">

          <div className="hero-content" data-reveal>

            <span className="hero-badge">
              The smarter business operating system
            </span>

            <h1>
              Run your business
              <br />
              with <span>clarity.</span>
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
                className="button hero-secondary-button"
              >
                Explore solutions
                <span>↓</span>
              </a>

            </div>

            <div className="hero-note">
              <span>✓</span>
              Start simple. Scale when you are ready.
            </div>

          </div>

          {/* =================================================
              HERO DASHBOARD
          ================================================= */}

          <div
            className="hero-dashboard"
            data-reveal
          >

            <div className="dashboard-header">

              <div>
                <small>Briqona OS</small>
                <strong>Business overview</strong>
              </div>

              <span className="dashboard-live">
                Live systems
              </span>

            </div>

            <div className="dashboard-stats">

              <div>
                <small>Revenue</small>
                <strong>$48.2K</strong>
                <span>+18.4%</span>
              </div>

              <div>
                <small>Customers</small>
                <strong>1,284</strong>
                <span>+9.7%</span>
              </div>

              <div>
                <small>Efficiency</small>
                <strong>91%</strong>
                <span>+6.2%</span>
              </div>

            </div>

            <div className="dashboard-chart">

              <div className="chart-title">
                <span>Business performance</span>
                <span>Last 30 days</span>
              </div>

              <div className="chart-line" />

            </div>

            <div className="dashboard-insight">

              <span>AI</span>

              <p>
                Your business performance is trending upward.
                Customer retention is the next opportunity to watch.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TRUST
      ===================================================== */}

      <section className="trust-section">

        <div className="container">

          <p>
            Built around the way modern teams work
          </p>

          <div className="trust-list">

            <span>INTELLIGENCE</span>
            <span>AUTOMATION</span>
            <span>OPERATIONS</span>
            <span>GROWTH</span>
            <span>PERFORMANCE</span>

          </div>

        </div>

      </section>


      {/* =====================================================
          AI INTELLIGENCE
      ===================================================== */}

      <section className="home-section ai-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              Intelligence layer
            </span>

            <h2>
              Your business,
              <br />
              <span>easier to understand.</span>
            </h2>

            <p>
              Stop jumping between disconnected tools.
              Briqona helps turn your business activity
              into clear information and practical next steps.
            </p>

          </div>

          <div className="platform-card">

            <div className="platform-content">

              <span className="section-label">
                Briqona Intelligence
              </span>

              <h2>
                Ask your business
                <br />
                <span>anything.</span>
              </h2>

              <p>
                Get clear answers, discover opportunities
                and move from information to action without
                complicated analytics systems.
              </p>

              <a
                href="/solutions"
                className="button button-primary"
              >
                Explore intelligence
                <span>→</span>
              </a>

            </div>

            <div className="platform-list">

              <div>
                <span>01</span>
                <strong>Ask in plain language</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Find opportunities</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Turn insight into action</strong>
              </div>

              <div>
                <span>04</span>
                <strong>See what matters in real time</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section
        className="home-section solutions-section"
        id="solutions"
        ref={solutionsRef}
      >

        <div className="container">

          <div className="section-heading centered">

            <span className="section-label">
              Solutions
            </span>

            <h2>
              One platform.
              <br />
              <span>Different business needs.</span>
            </h2>

            <p>
              Start with the part of your business that
              needs the most attention. Expand your
              workspace as you grow.
            </p>

          </div>


          <div className="solution-grid">

            {solutions.map((solution, index) => (

              <article
                className="solution-card"
                key={solution.title}
                data-reveal
                style={{
                  transitionDelay: `${index * 70}ms`,
                }}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
              >

                <div className="solution-card-glow" />

                <span className="solution-icon">
                  {solution.number}
                </span>

                <div className="solution-card-content">

                  <h3>
                    {solution.title}
                  </h3>

                  <p>
                    {solution.text}
                  </p>

                  <span className="solution-link">
                    Explore solution →
                  </span>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="home-section how-section">

        <div className="container">

          <div className="section-heading centered">

            <span className="section-label">
              How it works
            </span>

            <h2>
              Simple systems.
              <br />
              <span>Better business.</span>
            </h2>

            <p>
              Briqona is designed to make your business
              easier to understand, manage and grow.
            </p>

          </div>


          <div className="steps-grid">

            <article className="step-card" data-reveal>
              <span>01</span>

              <h3>Connect</h3>

              <p>
                Bring the important parts of your business
                into one simple workspace.
              </p>
            </article>

            <article className="step-card" data-reveal>
              <span>02</span>

              <h3>Understand</h3>

              <p>
                See the signals, patterns and opportunities
                that matter most.
              </p>
            </article>

            <article className="step-card" data-reveal>
              <span>03</span>

              <h3>Act</h3>

              <p>
                Turn insight into practical workflows,
                automation and measurable improvements.
              </p>
            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="home-section features-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              Why Briqona
            </span>

            <h2>
              Powerful without
              <br />
              <span>the complexity.</span>
            </h2>

            <p>
              Designed for people who want better business
              systems without becoming technology experts.
            </p>

          </div>


          <div className="platform-list">

            {features.map((feature) => (

              <div
                key={feature.title}
                data-reveal
              >

                <span>
                  {feature.number}
                </span>

                <strong>
                  {feature.title}
                </strong>

                <p>
                  {feature.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BUSINESS HEALTH
      ===================================================== */}

      <section className="home-section health-section">

        <div className="container">

          <div className="platform-card">

            <div className="platform-content">

              <span className="section-label">
                Business health
              </span>

              <h2>
                Know where your
                <br />
                <span>business stands.</span>
              </h2>

              <p>
                Replace uncertainty with a simple view of
                the signals that matter most. Understand
                what is working, what needs attention and
                where the next opportunity is.
              </p>

              <a
                href="/solutions"
                className="button button-primary"
              >
                See how it works
                <span>→</span>
              </a>

            </div>


            <div className="platform-list">

              <div>
                <span>82 / 100</span>
                <strong>Overall business score</strong>
              </div>

              <div>
                <span>STRONG</span>
                <strong>Revenue performance</strong>
              </div>

              <div>
                <span>WATCH</span>
                <strong>Customer retention</strong>
              </div>

              <div>
                <span>EXCELLENT</span>
                <strong>Operational efficiency</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-cta">

        <div className="container">

          <div className="cta-card" data-reveal>

            <span className="section-label">
              Ready when you are
            </span>

            <h2>
              Make your business
              <br />
              <span>easier to run.</span>
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

              <a href="/pricing">
                View pricing →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FLOATING CONTACT
      ===================================================== */}

      <div className="bq-floating-contact">

        <a
          href="https://wa.me/"
          className="bq-floating-whatsapp"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <span>☎</span>
          <strong>WhatsApp</strong>
        </a>

        <a
          href="tel:"
          className="bq-floating-call"
          aria-label="Call"
        >
          <span>⌕</span>
          <strong>Call</strong>
        </a>

      </div>

    </main>
  );
}
