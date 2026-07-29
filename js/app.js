// =========================================
// BRIQONA — MASTER JAVASCRIPT
// FINAL CLEAN VERSION
// =========================================

document.addEventListener("DOMContentLoaded", () => {

  // =========================================
  // 1. SMOOTH SCROLLING
  // =========================================

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#" || targetId.length < 2) {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });


  // =========================================
  // 2. CURRENT YEAR
  // =========================================

  const yearElements = document.querySelectorAll(
    "[data-current-year]"
  );

  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });


  // =========================================
  // 3. STICKY HEADER SHADOW
  // =========================================

  const header = document.querySelector(".site-header");

  if (header) {
    const updateHeader = () => {
      header.classList.toggle(
        "header-scrolled",
        window.scrollY > 10
      );
    };

    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );

    updateHeader();
  }


  // =========================================
  // 4. EMPTY LINKS
  // =========================================

  const emptyLinks = document.querySelectorAll(
    'a[href="#"]'
  );

  emptyLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });


  // =========================================
  // 5. MOBILE MENU
  // =========================================

  const menuButton = document.querySelector(
    ".mobile-menu-button"
  );

  const mobileNav = document.querySelector(
  ".mobile-nav"
);

if (menuButton && mobileNav) {
    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    menuButton.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  const isOpen =
    menuButton.classList.contains("is-open");

  menuButton.classList.toggle(
    "is-open",
    !isOpen
  );

  mobileNav.classList.toggle(
    "is-open",
    !isOpen
  );

  menuButton.setAttribute(
    "aria-expanded",
    String(!isOpen)
  );

  menuButton.setAttribute(
    "aria-label",
    isOpen
      ? "Open menu"
      : "Close menu"
  );
});


    // Close menu when a navigation link is clicked
    


    // Close menu when Login/Get Started is clicked

  // =========================================
  // 6. DASHBOARD NAVIGATION
  // =========================================

  const mockNavItems =
    document.querySelectorAll(".mock-nav");

  mockNavItems.forEach((item) => {
    item.addEventListener("click", () => {

      mockNavItems.forEach((nav) => {
        nav.classList.remove("active");
      });

      item.classList.add("active");
    });
  });


  // =========================================
  // 7. DASHBOARD NEW BUTTON
  // =========================================

  const dashboardButtons =
    document.querySelectorAll(
      ".mock-new-button"
    );

  dashboardButtons.forEach((button) => {
    button.addEventListener("click", () => {

      const originalText = button.textContent;

      button.textContent = "Created";

      setTimeout(() => {
        button.textContent = originalText;
      }, 1400);
    });
  });


  // =========================================
  // 8. PRICING BUTTONS
  // =========================================

  const planButtons =
    document.querySelectorAll(".plan-button");

  planButtons.forEach((button) => {
    button.addEventListener("click", () => {

      const originalText =
        button.textContent;

      button.textContent = "Selected ✓";

      setTimeout(() => {
        button.textContent = originalText;
      }, 1400);
    });
  });


  // =========================================
  // 9. WHATSAPP
  // =========================================

  const whatsappButtons =
    document.querySelectorAll(
      '[data-whatsapp], .whatsapp-button'
    );

  whatsappButtons.forEach((button) => {
    button.addEventListener("click", () => {

      const number = "923348101110";

      const message =
        "Hello Briqona, I would like to know more about your platform.";

      const url =
        "https://wa.me/" +
        number +
        "?text=" +
        encodeURIComponent(message);

      window.open(
        url,
        "_blank",
        "noopener,noreferrer"
      );
    });
  });


  // =========================================
  // 10. SUPPORT PHONE
  // =========================================

  const supportButtons =
    document.querySelectorAll(
      '[data-support-phone]'
    );

  supportButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href =
        "tel:+923355551218";
    });
  });


  // =========================================
  // 11. WHATSAPP PHONE
  // =========================================

  const whatsappPhoneButtons =
    document.querySelectorAll(
      '[data-whatsapp-phone]'
    );

  whatsappPhoneButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href =
        "tel:+923348101110";
    });
  });


  // =========================================
  // 12. PAGE READY
  // =========================================

  document.documentElement.classList.add(
    "briqona-ready"
  );

});
