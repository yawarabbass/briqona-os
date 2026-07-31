export function renderFooter() {
  const footer = document.createElement("footer");

  footer.className = "site-footer";

  footer.innerHTML = `
    <div class="container">

      <div class="footer-main">

        <div class="footer-brand">

          <a
            class="brand footer-brand-link"
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

          <p class="footer-description">
            An AI-powered business operating system
            designed to make everyday business simpler.
          </p>

          <a
            class="footer-whatsapp"
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">◉</span>
            Chat with us on WhatsApp
          </a>

        </div>


        <div class="footer-column">

          <h3>Solutions</h3>

          <a href="./pages/solutions.html">
            All Solutions
          </a>

          <a href="./pages/industries.html">
            Industries
          </a>

          <a href="./pages/features.html">
            Features
          </a>

          <a href="./pages/platform.html">
            Platform
          </a>

        </div>


        <div class="footer-column">

          <h3>Product</h3>

          <a href="./pages/pricing.html">
            Pricing
          </a>

          <a href="./pages/analytics.html">
            Analytics
          </a>

          <a href="./pages/reports.html">
            Reports
          </a>

          <a href="./pages/api.html">
            API
          </a>

        </div>


        <div class="footer-column">

          <h3>Company</h3>

          <a href="./pages/about.html">
            About
          </a>

          <a href="./pages/contact.html">
            Contact
          </a>

          <a href="./pages/book-demo.html">
            Book a demo
          </a>

          <a href="./pages/faq.html">
            FAQ
          </a>

        </div>


        <div class="footer-column">

          <h3>Resources</h3>

          <a href="./pages/documentation.html">
            Documentation
          </a>

          <a href="./pages/security.html">
            Security
          </a>

          <a href="./pages/privacy.html">
            Privacy
          </a>

          <a href="./pages/terms.html">
            Terms
          </a>

        </div>

      </div>


      <div class="footer-payment">

        <div>
          <span class="payment-label">
            Secure payments
          </span>

          <div class="payment-methods">
            <span>VISA</span>
            <span>Mastercard</span>
            <span>PayPal</span>
            <span>Stripe</span>
          </div>
        </div>

      </div>


      <div class="footer-bottom">

        <p>
          © ${new Date().getFullYear()} Briqona.
          All rights reserved.
        </p>

        <div class="footer-legal">

          <a href="./pages/privacy.html">
            Privacy
          </a>

          <a href="./pages/terms.html">
            Terms
          </a>

          <a href="./pages/cookies.html">
            Cookies
          </a>

        </div>

      </div>

    </div>
  `;

  return footer;
}
