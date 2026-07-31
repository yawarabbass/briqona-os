import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

/* =========================================================
   BRIQONA — MAIN APPLICATION
   Complete Home Page
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
     BRIQONA COMMAND CENTER HERO
     ===================================================== -->

<section class="hero briqona-hero">

  <div class="hero-grid container">

    <!-- LEFT CONTENT -->
    <div class="hero-content">

      <div class="eyebrow">
        <span class="status-dot"></span>
        AI-powered business operating system
      </div>

      <h1>
        Run your business.
        <span>Think smarter.</span>
      </h1>

      <p class="hero-description">
        Briqona connects operations, customers, analytics,
        workflows, and AI intelligence in one powerful
        business operating system.
      </p>

      <div class="hero-actions">

        <a
          class="btn btn-primary btn-large"
          href="./pages/book-demo.html"
        >
          Book a demo
          <span>→</span>
        </a>

        <a
          class="btn btn-secondary btn-large"
          href="#solutions"
        >
          Explore Briqona
        </a>

      </div>

      <div class="hero-note">
        <span>●</span>
        Built for modern businesses
        <b>•</b>
        AI-powered
        <b>•</b>
        Scalable
      </div>

    </div>


    <!-- RIGHT COMMAND CENTER -->
    <div class="hero-visual">

      <div class="command-center">

        <!-- Ambient glow -->
        <div class="command-glow"></div>


        <!-- TOP BAR -->
        <div class="command-topbar">

          <div class="command-brand">

            <span class="command-logo">B</span>

            <div>
              <strong>Briqona OS</strong>
              <small>Command Center</small>
            </div>

          </div>

          <span class="command-live">
            <i></i>
            LIVE
          </span>

        </div>


        <!-- CENTER CORE -->
        <div class="command-core">

          <div class="core-ring ring-one"></div>
          <div class="core-ring ring-two"></div>

          <div class="core-center">
            <span>✦</span>
            <strong>BRIQONA</strong>
            <small>AI CORE</small>
          </div>

        </div>


        <!-- AI CARD -->
        <div class="floating-card ai-card">

          <div class="floating-icon">✦</div>

          <div>
            <small>AI INTELLIGENCE</small>
            <strong>3 growth opportunities</strong>
            <span>Detected just now</span>
          </div>

          <b class="card-arrow">↗</b>

        </div>


        <!-- REVENUE CARD -->
        <div class="floating-card revenue-card">

          <div class="card-heading">
            <small>REVENUE</small>
            <span>↑ 18.4%</span>
          </div>

          <strong class="revenue-number">$84,240</strong>

          <div class="mini-chart">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>

        </div>


        <!-- WORKFLOW CARD -->
        <div class="floating-card workflow-card">

          <div class="floating-icon">⚡</div>

          <div>
            <small>AUTOMATION</small>
            <strong>12 workflows</strong>
            <span>Running smoothly</span>
          </div>

          <div class="workflow-status"></div>

        </div>


        <!-- CUSTOMER CARD -->
        <div class="floating-card customer-card">

          <div class="customer-top">
            <small>ACTIVE CUSTOMERS</small>
            <span>+12.8%</span>
          </div>

          <strong>2,846</strong>

          <div class="customer-users">
            <span>JD</span>
            <span>AK</span>
            <span>MR</span>
            <b>+2k</b>
          </div>

        </div>


        <!-- DATA ORBIT DOTS -->
        <span class="orbit-dot dot-one"></span>
        <span class="orbit-dot dot-two"></span>
        <span class="orbit-dot dot-three"></span>

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

        <span>OPERATIONS</span>
        <span>GROWTH</span>
        <span>ANALYTICS</span>
        <span>WORKFLOWS</span>
        <span>AUTOMATION</span>

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


        <article
          class="solution-card"
          data-reveal
        >

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


        <article
          class="solution-card"
          data-reveal
        >

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


        <article
          class="solution-card"
          data-reveal
        >

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


  <!-- =====================================================
       AI OPERATIONS
       ===================================================== -->

  <section
    class="home-section"
    id="ai-operations"
  >

    <div class="container">

      <div class="section-heading" data-reveal>

        <span class="section-label">
          AI OPERATIONS
        </span>

        <h2>
          Let AI handle the
          <span>busy work.</span>
        </h2>

        <p>
          Reduce repetitive tasks, organize workflows,
          and give your team more time to focus on work
          that actually moves the business forward.
        </p>

      </div>


      <div class="steps-grid">

        <article class="step-card" data-reveal>
          <span>01</span>
          <h3>Automate</h3>
          <p>
            Turn repetitive processes into reliable
            automated workflows.
          </p>
        </article>

        <article class="step-card" data-reveal>
          <span>02</span>
          <h3>Monitor</h3>
          <p>
            Keep track of operations and identify
            issues before they become bigger problems.
          </p>
        </article>

        <article class="step-card" data-reveal>
          <span>03</span>
          <h3>Improve</h3>
          <p>
            Use intelligent insights to continuously
            improve business performance.
          </p>
        </article>

      </div>

    </div>

  </section>


  <!-- =====================================================
       PLATFORM
       ===================================================== -->

  <section
    class="home-section platform-section"
    id="platform"
  >

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
            for operations, analytics, workflows, automation,
            and growth.
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


  <!-- =====================================================
       HOW IT WORKS
       ===================================================== -->

  <section
    class="home-section how-section"
    id="how-it-works"
  >

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
          understand, manage, and improve the business.
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
            Automate work, act on opportunities, and
            continuously improve how your business operates.
          </p>

        </article>

      </div>

    </div>

  </section>


  <!-- =====================================================
       FEATURES
       ===================================================== -->

  <section
    class="home-section"
    id="features"
  >

    <div class="container">

      <div class="section-heading" data-reveal>

        <span class="section-label">
          BUILT FOR BUSINESS
        </span>

        <h2>
          Powerful tools.
          <span>Simple experience.</span>
        </h2>

        <p>
          Everything your team needs to operate with
          greater visibility and less friction.
        </p>

      </div>


      <div class="solution-grid">

        <article class="solution-card" data-reveal>
          <div class="solution-icon">⌁</div>
          <h3>Automation</h3>
          <p>
            Automate recurring processes and reduce
            unnecessary manual work.
          </p>
          <a href="./pages/features.html">
            View features →
          </a>
        </article>


        <article class="solution-card" data-reveal>
          <div class="solution-icon">◉</div>
          <h3>Analytics</h3>
          <p>
            Turn your business data into useful,
            understandable information.
          </p>
          <a href="./pages/analytics.html">
            View analytics →
          </a>
        </article>


        <article class="solution-card" data-reveal>
          <div class="solution-icon">◇</div>
          <h3>Security</h3>
          <p>
            Build business operations around a secure
            and dependable foundation.
          </p>
          <a href="./pages/security.html">
            Explore security →
          </a>
        </article>


        <article class="solution-card" data-reveal>
          <div class="solution-icon">↗</div>
          <h3>Scalability</h3>
          <p>
            Start simple and expand your operating
            environment as your business grows.
          </p>
          <a href="./pages/platform.html">
            Explore platform →
          </a>
        </article>

      </div>

    </div>

  </section>


  <!-- =====================================================
       PRICING / PACKAGES
       ===================================================== -->

  <section
    class="home-section pricing-section"
    id="pricing"
  >

    <div class="container">

      <div
        class="section-heading centered"
        data-reveal
      >

        <span class="section-label">
          SIMPLE PRICING
        </span>

        <h2>
          Start small.
          <span>Grow with Briqona.</span>
        </h2>

        <p>
          Choose the package that fits your business today.
          Upgrade whenever you need more power.
        </p>

      </div>


      <div class="solution-grid pricing-grid">


        <!-- STARTER -->

        <article
          class="solution-card pricing-card"
          data-reveal
        >

          <div class="solution-icon">01</div>

          <h3>Starter</h3>

          <p>
            For individuals and small businesses
            getting started with smarter operations.
          </p>

          <div class="pricing-price">
            <strong>$19</strong>
            <span>/ month</span>
          </div>

          <ul>
            <li>Core business dashboard</li>
            <li>Basic workflows</li>
            <li>Business insights</li>
            <li>Email support</li>
          </ul>

          <a
            class="button button-primary"
            href="./pages/pricing.html"
          >
            Start package →
          </a>

        </article>


        <!-- GROWTH -->

        <article
          class="solution-card pricing-card pricing-featured"
          data-reveal
        >

          <div class="solution-icon">02</div>

          <h3>Growth</h3>

          <p>
            For growing teams that need more automation,
            analytics, and control.
          </p>

          <div class="pricing-price">
            <strong>$49</strong>
            <span>/ month</span>
          </div>

          <ul>
            <li>Everything in Starter</li>
            <li>Advanced analytics</li>
            <li>Smart automation</li>
            <li>Priority support</li>
          </ul>

          <a
            class="button button-primary"
            href="./pages/pricing.html"
          >
            Buy now →
          </a>

        </article>


        <!-- BUSINESS -->

        <article
          class="solution-card pricing-card"
          data-reveal
        >

          <div class="solution-icon">03</div>

          <h3>Business</h3>

          <p>
            For established businesses that need
            deeper control and scalable operations.
          </p>

          <div class="pricing-price">
            <strong>$99</strong>
            <span>/ month</span>
          </div>

          <ul>
            <li>Everything in Growth</li>
            <li>Advanced workflows</li>
            <li>Team management</li>
            <li>Business automation</li>
          </ul>

          <a
            class="button button-primary"
            href="./pages/pricing.html"
          >
            Buy now →
          </a>

        </article>


        <!-- ENTERPRISE -->

        <article
          class="solution-card pricing-card"
          data-reveal
        >

          <div class="solution-icon">04</div>

          <h3>Enterprise</h3>

          <p>
            Custom solutions for organizations with
            advanced operational requirements.
          </p>

          <div class="pricing-price">
            <strong>Custom</strong>
          </div>

          <ul>
            <li>Custom infrastructure</li>
            <li>Advanced security</li>
            <li>Dedicated support</li>
            <li>Custom integrations</li>
          </ul>

          <a
            class="button button-primary"
            href="./pages/book-demo.html"
          >
            Contact sales →
          </a>

        </article>

      </div>


      <div
        class="pricing-note"
        data-reveal
      >
        <strong>Try Briqona for 3 days.</strong>
        Start with a simple package and upgrade when
        your business is ready.
      </div>

    </div>

  </section>


  <!-- =====================================================
       FAQ
       ===================================================== -->

  <section
    class="home-section faq-section"
    id="faq"
  >

    <div class="container">

      <div
        class="section-heading centered"
        data-reveal
      >

        <span class="section-label">
          FAQ
        </span>

        <h2>
          Questions?
          <span>We've got answers.</span>
        </h2>

      </div>


      <div class="faq-list">

        <details data-reveal>
          <summary>
            What is Briqona?
            <span>+</span>
          </summary>

          <p>
            Briqona is an AI-powered business operating
            system designed to bring operations, workflows,
            analytics, automation, and growth tools together.
          </p>
        </details>


        <details data-reveal>
          <summary>
            Can I start with a smaller package?
            <span>+</span>
          </summary>

          <p>
            Yes. You can start with the Starter package
            and upgrade as your business grows.
          </p>
        </details>


        <details data-reveal>
          <summary>
            Is there a trial?
            <span>+</span>
          </summary>

          <p>
            Briqona offers a 3-day starting trial so you
            can explore the experience before committing
            to a longer package.
          </p>
        </details>


        <details data-reveal>
          <summary>
            Can I book a demo?
            <span>+</span>
          </summary>

          <p>
            Yes. Use the Book a demo button to request
            a guided walkthrough of Briqona.
          </p>
        </details>

      </div>

    </div>

  </section>


  <!-- =====================================================
       FINAL CTA
       ===================================================== -->

  <section
    class="home-cta"
    id="book-demo"
  >

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
            View all pricing →
          </a>

        </div>

      </div>

    </div>

  </section>

`;


/* =========================================================
   FOOTER
   ========================================================= */

const footer = renderFooter();

if (footer) {
  app.appendChild(footer);
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function initializeMobileMenu() {

  const menuButton =
    document.querySelector("[data-menu-toggle]");

  const navigation =
    document.querySelector("[data-mobile-menu]");

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

        navigation.classList.remove("is-open");

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
   HEADER SCROLL
   ========================================================= */

function initializeHeaderScroll() {

  const header =
    document.querySelector("[data-site-header]");

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
    { passive: true }
  );

}


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

function initializeRevealAnimations() {

  const elements =
    document.querySelectorAll("[data-reveal]");

  if (!elements.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {

    elements.forEach((element) => {
      element.classList.add("is-visible");
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
        rootMargin: "0px 0px -50px 0px"
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
          document.querySelector(targetId);

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
   FLOATING CONTACT
   ========================================================= */

function initializeFloatingContact() {

  if (
    document.querySelector(
      ".bq-floating-contact"
    )
  ) {
    return;
  }

  const contact =
    document.createElement("div");

  contact.className =
    "bq-floating-contact";

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
   CARD INTERACTIONS
   ========================================================= */

function initializeCardInteractions() {

  const cards =
    document.querySelectorAll(
      ".solution-card, .step-card, .platform-list div"
    );

  if (!cards.length) {
    return;
  }

  cards.forEach((card) => {

    card.addEventListener(
      "pointerenter",
      () => {
        card.classList.add("is-hovered");
      }
    );

    card.addEventListener(
      "pointerleave",
      () => {
        card.classList.remove("is-hovered");
      }
    );

  });

}


/* =========================================================
   HERO DASHBOARD MOTION
   ========================================================= */

function initializeDashboardMotion() {

  const dashboard =
    document.querySelector(
      ".hero-dashboard"
    );

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
    { passive: true }
  );

}


/* =========================================================
   FAQ
   ========================================================= */

function initializeFAQ() {

  const items =
    document.querySelectorAll(
      ".faq-list details"
    );

  items.forEach((item) => {

    item.addEventListener(
      "toggle",
      () => {

        if (!item.open) {
          return;
        }

        items.forEach((other) => {

          if (other !== item) {
            other.removeAttribute("open");
          }

        });

      }
    );

  });

}


/* =========================================================
   INITIALIZE EVERYTHING
   ========================================================= */

initializeMobileMenu();
initializeHeaderScroll();
initializeRevealAnimations();
initializeSmoothScroll();
initializeFloatingContact();
initializeCardInteractions();
initializeDashboardMotion();
initializeFAQ();


/* =========================================================
   PAGE READY
   ========================================================= */

document.documentElement.classList.add(
  "briqona-ready"
);
