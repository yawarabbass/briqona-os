export function renderHeader() {
  const header = document.createElement("header");

  header.className = "site-header";
  header.setAttribute("data-site-header", "");

  header.innerHTML = `
    <div class="container header-inner">

      <a
        class="brand"
        href="./index.html"
        aria-label="Briqona home"
      >
        <span class="brand-mark" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <span class="brand-name">
          Briqona
        </span>
      </a>

      <button
        class="menu-toggle"
        type="button"
        aria-label="Open navigation menu"
        aria-expanded="false"
        data-menu-toggle
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        class="site-nav"
        aria-label="Main navigation"
        data-mobile-menu
      >

        <div class="nav-links">

          <a href="./index.html">
            Home
          </a>

          <a href="./pages/solutions.html">
            Solutions
          </a>

          <a href="./pages/platform.html">
            Platform
          </a>

          <a href="./pages/features.html">
            Features
          </a>

          <a href="./pages/pricing.html">
            Pricing
          </a>

        </div>

        <div class="nav-actions">

          <a
            class="nav-login"
            href="./pages/login.html"
          >
            Log in
          </a>

          <a
            class="button button-small button-primary"
            href="./pages/book-demo.html"
          >
            Book a demo
          </a>

        </div>

      </nav>

    </div>
  `;

  return header;
}
