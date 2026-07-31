import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

const app = document.querySelector("#app");

if (!app) {
  throw new Error("Briqona app root was not found.");
}

const header = renderHeader();
const main = document.querySelector("#main-content");
const footer = renderFooter();

if (!main) {
  throw new Error("Briqona main content was not found.");
}

app.prepend(header);

main.innerHTML = `
  <!-- HERO -->
  <section class="hero">
    <div class="container hero-content" data-reveal>

      <div class="hero-badge">
        AI-powered business operating system
      </div>

      <h1>
        Run your business
        <span>smarter.</span>
      </h1>

      <p class="hero-description">
        Briqona brings your business operations, insights,
        workflows, and growth tools together in one intelligent
        operating system.
      </p>

      <div class="hero-actions">
        <a
          class="button button-primary"
          href="./pages/book-demo.html"
        >
          Book a demo
        </a>

        <a
          class="button hero-secondary-button"
          href="./pages/platform.html"
        >
          Explore platform
        </a>
      </div>

      <div class="hero-note">
        <span>●</span>
        Built for modern businesses
      </div>

      <!-- DASHBOARD PREVIEW -->
      <div class="hero-dashboard" data-reveal>

        <div class="dashboard-header">
          <div>
            <small>Business overview</small>
            <strong>Good morning, your business is growing.</strong>
          </div>

          <span class="dashboard-live">
            ● Live
          </span>
        </div>

        <div class="dashboard-stats">

          <div>
            <small>Revenue</small>
            <strong>$84,240</strong>
            <span>↑ 18.4%</span>
          </div>

          <div>
            <small>Active customers</small>
            <strong>2,846</strong>
            <span>↑ 12.8%</span>
          </div>

          <div>
            <small>Operations</small>
            <strong>94.6%</strong>
            <span>↑ 7.2%</span>
          </div>

        </div>

        <div class="dashboard-chart">

          <div class="chart-title">
            <span>Business performance</span>
            <span>Last 30 days</span>
          </div>

          <div class="chart-line"></div>

        </div>

        <div class="dashboard-insight">

          <span>✦</span>

          <p>
            AI insight: Revenue is trending upward.
            Your strongest growth is coming from returning customers.
          </p>

        </div>

      </div>

    </div>
  </section>


  <!-- TRUST -->
  <section class="trust-section">
    <div class="container">

      <p>
        Built to bring every part of your business together
      </p>

      <div class="trust-list">
        <span>OPERATIONS</span>
        <span>GROWTH</span>
        <span>ANALYTICS</span>
        <span>WORKFLOWS</span>
        <span>INSIGHTS</span>
      </div>

    </div>
  </section>


  <!-- SOLUTIONS -->
  <section class="home-section">
    <div class="container">

      <div class="section-heading" data-reveal>
        <span class="section-label">
          ONE OPERATING SYSTEM
        </span>

        <h2>
          Everything your business needs,
          <span>connected.</span>
        </h2>

        <p>
          Replace disconnected tools and manual processes
          with one intelligent system designed around the way
          modern businesses actually operate.
        </p>
      </div>


      <div class="solution-grid">

        <article class="solution-card" data-reveal>
          <div class="solution-icon">✦</div>

          <h3>AI Operations</h3>

          <p>
            Automate repetitive work and keep everyday
            operations moving with intelligent workflows.
          </p>

          <a href="./pages/solutions.html">
            Explore solution →
          </a>
        </article>


        <article class="solution-card" data-reveal>
          <div class="solution-icon">↗</div>

          <h3>Business Growth</h3>

          <p>
            Turn customer activity and business data into
            clearer opportunities for sustainable growth.
          </p>

          <a href="./pages/industries.html">
            Explore solution →
          </a>
        </article>


        <article class="solution-card" data-reveal>
          <div class="solution-icon">◫</div>

          <h3>Analytics</h3>

          <p>
            See the numbers that matter with simple,
            actionable business intelligence.
          </p>

          <a href="./pages/analytics.html">
            Explore solution →
          </a>
        </article>


        <article class="solution-card" data-reveal>
          <div class="solution-icon">◎</div>

          <h3>Smart Workflows</h3>

          <p>
            Connect teams, tasks, and processes so your
            business can work with less friction.
          </p>

          <a href="./pages/features.html">
            Explore solution →
          </a>
        </article>

      </div>

    </div>
  </section>


  <!-- HOW IT WORKS -->
  <section class="home-section how-section">
    <div class="container">

      <div class="section-heading centered" data-reveal>
        <span class="section-label">
          HOW IT WORKS
        </span>

        <h2>
          From complexity to
          <span>clarity.</span>
        </h2>

        <p>
          Briqona gives your team a simple way to understand,
          manage, and improve the business every day.
        </p>
      </div>


      <div class="steps-grid">

        <article class="step-card" data-reveal>
          <span>01</span>

          <h3>Connect</h3>

          <p>
            Bring your business information and workflows
            into one central operating environment.
          </p>
        </article>


        <article class="step-card" data-reveal>
          <span>02</span>

          <h3>Understand</h3>

          <p>
            Transform operational data into clear insights
            that help your team see what needs attention.
          </p>
        </article>


        <article class="step-card" data-reveal>
          <span>03</span>

          <h3>Grow</h3>

          <p>
            Automate the work, act on opportunities, and
            continuously improve how your business operates.
          </p>
        </article>

      </div>

    </div>
  </section>


  <!-- PLATFORM -->
  <section class="home-section platform-section">
    <div class="container">

      <div class="platform-card" data-reveal>

        <div class="platform-content">

          <span class="section-label">
            THE BRIQONA PLATFORM
          </span>

          <h2>
            One platform.
            <span>More control.</span>
          </h2>

          <p>
            Give your business one intelligent foundation for
            operations, analytics, workflows, and growth.
          </p>

          <a
            class="button button-primary"
            href="./pages/platform.html"
          >
            Explore platform
          </a>

        </div>


        <div class="platform-list">

          <div>
            <span>01</span>
            <strong>Centralized operations</strong>
          </div>

          <div>
            <span>02</span>
            <strong>Real-time business insights</strong>
          </div>

          <div>
            <span>03</span>
            <strong>Intelligent automation</strong>
          </div>

          <div>
            <span>04</span>
            <strong>Scalable infrastructure</strong>
          </div>

        </div>

      </div>

    </div>
  </section>


  <!-- CTA -->
  <section class="home-cta">
    <div class="container">

      <div class="cta-card" data-reveal>

        <span class="section-label">
          READY WHEN YOU ARE
        </span>

        <h2>
          Build a business that
          <span>moves smarter.</span>
        </h2>

        <p>
          Discover how Briqona can simplify your operations
          and give your team a clearer path to growth.
        </p>

        <div class="cta-actions">

          <a
            class="button button-primary"
            href="./pages/book-demo.html"
          >
            Book a demo
          </a>

          <a href="./pages/pricing.html">
            View pricing →
          </a>

        </div>

      </div>

    </div>
  </section>
`;

app.appendChild(footer);

document.addEventListener("DOMContentLoaded", () => {
  initializeMobileMenu();
  initializeScrollEffects();
  initializeRevealAnimations();
});


function initializeMobileMenu() {
  const menuButton = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-mobile-menu]");

  if (!menuButton || !navigation) return;

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    document.body.classList.toggle(
      "menu-open",
      isOpen
    );
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.classList.remove("menu-open");
    });
  });
}


function initializeScrollEffects() {
  const header = document.querySelector("[data-site-header]");

  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle(
      "is-scrolled",
      window.scrollY > 20
    );
  };

  updateHeader();

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );
}


function initializeRevealAnimations() {
  const elements = document.querySelectorAll(
    "[data-reveal]"
  );

  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      element.classList.add("is-visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");

        observerInstance.unobserve(
          entry.target
        );
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
    }
