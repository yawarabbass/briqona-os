import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

/* =========================================================
   BRIQONA — MAIN APPLICATION
   PART 1 — APP + HEADER + HOME STRUCTURE
   ========================================================= */

const app = document.querySelector("#app");
const main = document.querySelector("#main-content");

if (!app) {
  throw new Error("Briqona app root was not found.");
}

if (!main) {
  throw new Error("Briqona main content was not found.");
}


/* =========================================================
   HEADER
   ========================================================= */

const header = renderHeader();

if (header) {
  app.prepend(header);
}


/* =========================================================
   HOME PAGE
   ========================================================= */

main.innerHTML = `

  <!-- =====================================================
       HERO
       ===================================================== -->

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
        workflows, and growth tools together in one
        intelligent operating system.
      </p>


      <div class="hero-actions">

        <a
          class="button button-primary"
          href="./pages/book-demo.html"
        >
          Book a demo
          <span>→</span>
        </a>


        <a
          class="button hero-secondary-button"
          href="#solutions"
        >
          Explore solutions
        </a>

      </div>


      <div class="hero-note">

        <span>●</span>

        Built for modern businesses

      </div>


      <!-- HERO DASHBOARD -->

      <div
        class="hero-dashboard"
        data-reveal
      >

        <div class="dashboard-header">

          <div>

            <small>
              Business overview
            </small>

            <strong>
              Good morning, your business is growing.
            </strong>

          </div>


          <span class="dashboard-live">
            ● Live
          </span>

        </div>


        <div class="dashboard-stats">

          <div>

            <small>
              Revenue
            </small>

            <strong>
              $84,240
            </strong>

            <span>
              ↑ 18.4%
            </span>

          </div>


          <div>

            <small>
              Active customers
            </small>

            <strong>
              2,846
            </strong>

            <span>
              ↑ 12.8%
            </span>

          </div>


          <div>

            <small>
              Operations
            </small>

            <strong>
              94.6%
            </strong>

            <span>
              ↑ 7.2%
            </span>

          </div>

        </div>


        <div class="dashboard-chart">

          <div class="chart-title">

            <span>
              Business performance
            </span>

            <span>
              Last 30 days
            </span>

          </div>


          <div class="chart-line"></div>

        </div>


        <div class="dashboard-insight">

          <span>
            ✦
          </span>


          <p>
            AI insight: Revenue is trending upward.
            Your strongest growth is coming from
            returning customers.
          </p>

        </div>

      </div>

    </div>

  </section>


  <!-- =====================================================
       TRUST
       ===================================================== -->

  <section class="trust-section">

    <div class="container">

      <p>
        Built to bring every part of your business together
      </p>


      <div class="trust-list">

        <span>
          OPERATIONS
        </span>

        <span>
          GROWTH
        </span>

        <span>
          ANALYTICS
        </span>

        <span>
          WORKFLOWS
        </span>

        <span>
          INSIGHTS
        </span>

      </div>

    </div>

  </section>


  <!-- =====================================================
       SOLUTIONS
       ===================================================== -->

  <section
    class="home-section"
    id="solutions"
  >

    <div class="container">

      <div
        class="section-heading"
        data-reveal
      >

        <span class="section-label">
          ONE OPERATING SYSTEM
        </span>


        <h2>
          Everything your business needs,
          <span>connected.</span>
        </h2>


        <p>
          Replace disconnected tools and manual processes
          with one intelligent system designed around the
          way modern businesses actually operate.
        </p>

      </div>


      <div class="solution-grid">


        <article
          class="solution-card"
          data-reveal
        >

          <div class="solution-icon">
            ✦
          </div>


          <h3>
            AI Operations
          </h3>


          <p>
            Automate repetitive work and keep everyday
            operations moving with intelligent workflows.
          </p>


          <a href="./pages/solutions.html">
            Explore solution →
          </a>

        </article>


        <article
          class="solution-card"
          data-reveal
        >

          <div class="solution-icon">
            ↗
          </div>


          <h3>
            Business Growth
          </h3>


          <p>
            Turn customer activity and business data into
            clearer opportunities for sustainable growth.
          </p>


          <a href="./pages/industries.html">
            Explore solution →
          </a>

        </article>


        <article
          class="solution-card"
          data-reveal
        >

          <div class="solution-icon">
            ◫
          </div>


          <h3>
            Analytics
          </h3>


          <p>
            See the numbers that matter with simple,
            actionable business intelligence.
          </p>


          <a href="./pages/analytics.html">
            Explore solution →
          </a>

        </article>


        <article
          class="solution-card"
          data-reveal
        >

          <div class="solution-icon">
            ◎
          </div>


          <h3>
            Smart Workflows
          </h3>


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


  <!-- =====================================================
       HOW IT WORKS
       ===================================================== -->

  <section class="home-section how-section">

    <div class="container">

      <div
        class="section-heading centered"
        data-reveal
      >

        <span class="section-label">
          HOW IT WORKS
        </span>


        <h2>
          From complexity to
          <span>clarity.</span>
        </h2>


        <p>
          Briqona gives your team a simple way to
          understand, manage, and improve the business
          every day.
        </p>

      </div>


      <div class="steps-grid">


        <article
          class="step-card"
          data-reveal
        >

          <span>
            01
          </span>


          <h3>
            Connect
          </h3>


          <p>
            Bring your business information and workflows
            into one central operating environment.
          </p>

        </article>


        <article
          class="step-card"
          data-reveal
        >

          <span>
            02
          </span>


          <h3>
            Understand
          </h3>


          <p>
            Transform operational data into clear insights
            that help your team see what needs attention.
          </p>

        </article>


        <article
          class="step-card"
          data-reveal
        >

          <span>
            03
          </span>


          <h3>
            Grow
          </h3>


          <p>
            Automate the work, act on opportunities, and
            continuously improve how your business operates.
          </p>

        </article>


      </div>

    </div>

  </section>

  <!-- =====================================================
       PLATFORM
       ===================================================== -->

  <section class="home-section platform-section">

    <div class="container">

      <div
        class="platform-card"
        data-reveal
      >

        <div class="platform-content">

          <span class="section-label">
            THE BRIQONA PLATFORM
          </span>


          <h2>
            One platform.
            <span>More control.</span>
          </h2>


          <p>
            Give your business one intelligent foundation
            for operations, analytics, workflows, and growth.
          </p>


          <a
            class="button button-primary"
            href="./pages/platform.html"
          >
            Explore platform
            <span>→</span>
          </a>

        </div>


        <div class="platform-list">

          <div>
            <span>01</span>
            <strong>
              Centralized operations
            </strong>
          </div>


          <div>
            <span>02</span>
            <strong>
              Real-time business insights
            </strong>
          </div>


          <div>
            <span>03</span>
            <strong>
              Intelligent automation
            </strong>
          </div>


          <div>
            <span>04</span>
            <strong>
              Scalable infrastructure
            </strong>
          </div>

        </div>

      </div>

    </div>

  </section>


  <!-- =====================================================
       FINAL CTA
       ===================================================== -->

  <section class="home-cta">

    <div class="container">

      <div
        class="cta-card"
        data-reveal
      >

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
            <span>→</span>
          </a>


          <a href="./pages/pricing.html">
            View pricing →
          </a>

        </div>

      </div>

    </div>

  </section>


  <!-- =====================================================
       END HOME CONTENT
       ===================================================== -->


/* =========================================================
   FOOTER
   ========================================================= */

const footer = renderFooter();

if (footer) {
  app.appendChild(footer);
}


/* =========================================================
   INITIALIZE APPLICATION
   ========================================================= */

initializeMobileMenu();
initializeHeaderScroll();
initializeRevealAnimations();
initializeSmoothScroll();


/* =========================================================
   MOBILE MENU
   ========================================================= */

function initializeMobileMenu() {

  const menuButton = document.querySelector(
    "[data-menu-toggle]"
  );

  const navigation = document.querySelector(
    "[data-mobile-menu]"
  );

  if (!menuButton || !navigation) {
    return;
  }


  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );


  menuButton.addEventListener("click", () => {

    const isOpen =
      navigation.classList.toggle("is-open");


    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );


    document.body.classList.toggle(
      "menu-open",
      isOpen
    );

  });


  navigation
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        navigation.classList.remove(
          "is-open"
        );


        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );


        document.body.classList.remove(
          "menu-open"
        );

      });

    });

}


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

function initializeHeaderScroll() {

  const header = document.querySelector(
    "[data-site-header]"
  );

  if (!header) {
    return;
  }


  const updateHeader = () => {

    header.classList.toggle(
      "is-scrolled",
      window.scrollY > 24
    );

  };


  updateHeader();


  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );

}


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

function initializeRevealAnimations() {

  const elements =
    document.querySelectorAll(
      "[data-reveal]"
    );


  if (!elements.length) {
    return;
  }


  if (
    !("IntersectionObserver" in window)
  ) {

    elements.forEach((element) => {

      element.classList.add(
        "is-visible"
      );

    });

    return;
  }


  const observer =
    new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          entry.target.classList.add(
            "is-visible"
          );


          observerInstance.unobserve(
            entry.target
          );

        });

      },
      {
        threshold: 0.12,
        rootMargin:
          "0px 0px -50px 0px"
      }
    );


  elements.forEach((element) => {

    observer.observe(element);

  });

}


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

function initializeSmoothScroll() {

  const links =
    document.querySelectorAll(
      'a[href^="#"]'
    );


  links.forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const targetId =
          link.getAttribute("href");


        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(
            targetId
          );


        if (!target) {
          return;
        }


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });

              }
              /* =========================================================
   FLOATING CONTACT BUTTONS
   ========================================================= */

function initializeFloatingContact() {

  if (document.querySelector(".bq-floating-contact")) {
    return;
  }

  const contact = document.createElement("div");

  contact.className = "bq-floating-contact";

  contact.innerHTML = `
    <a
      class="bq-floating-whatsapp"
      href="https://wa.me/923348101110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Briqona on WhatsApp"
      title="WhatsApp"
    >
      <span aria-hidden="true">☏</span>
      <strong>WhatsApp</strong>
    </a>

    <a
      class="bq-floating-call"
      href="tel:+923355551218"
      aria-label="Call Briqona"
      title="Call Briqona"
    >
      <span aria-hidden="true">☎</span>
      <strong>Call</strong>
    </a>
  `;

  document.body.appendChild(contact);
}


/* =========================================================
   CARD INTERACTION
   ========================================================= */

function initializeCardInteractions() {

  const cards = document.querySelectorAll(
    ".solution-card, .step-card, .platform-list div"
  );

  if (!cards.length) {
    return;
  }

  cards.forEach((card) => {

    card.addEventListener("pointerenter", () => {
      card.classList.add("is-hovered");
    });

    card.addEventListener("pointerleave", () => {
      card.classList.remove("is-hovered");
    });

  });
}


/* =========================================================
   HERO DASHBOARD MOTION
   ========================================================= */

function initializeDashboardMotion() {

  const dashboard =
    document.querySelector(".hero-dashboard");

  if (!dashboard) {
    return;
  }

  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {
    return;
  }

  let ticking = false;

  const updateDashboard = () => {

    if (window.innerWidth <= 700) {
      dashboard.style.transform = "";
      ticking = false;
      return;
    }

    const scroll =
      Math.min(window.scrollY, 500);

    const offset =
      scroll * 0.025;

    dashboard.style.transform =
      `translateY(${offset}px)`;

    ticking = false;
  };


  window.addEventListener(
    "scroll",
    () => {

      if (ticking) {
        return;
      }

      window.requestAnimationFrame(
        updateDashboard
      );

      ticking = true;

    },
    {
      passive: true
    }
  );

}


/* =========================================================
   INITIALIZE FINAL INTERACTIONS
   ========================================================= */

initializeFloatingContact();
initializeCardInteractions();
initializeDashboardMotion();


/* =========================================================
   PAGE READY
   ========================================================= */

document.documentElement.classList.add(
  "briqona-ready"
);
`;
