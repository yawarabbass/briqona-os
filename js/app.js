// =========================================
// BRIQONA — MASTER JAVASCRIPT
// PART 1
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  /*
   * Smooth scrolling
   */
  const links = document.querySelectorAll(
    'a[href^="#"]'
  );

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#" ||
        targetId.length < 2
      ) {
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


  /*
   * Current year
   */
  const yearElements = document.querySelectorAll(
    "[data-current-year]"
  );

  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });


  /*
   * Header shadow on scroll
   */
  const header = document.querySelector(
    ".site-header"
  );

  if (header) {
    const updateHeader = () => {
      if (window.scrollY > 10) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    };

    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );

    updateHeader();
  }


  /*
   * Prevent empty placeholder links
   */
  const emptyLinks = document.querySelectorAll(
    'a[href="#"]'
  );

  emptyLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });


  /*
   * Simple page-ready state
   */
  document.documentElement.classList.add(
    "briqona-ready"
  );
});
// =========================================
// BRIQONA — MOBILE MENU
// PART 2
// =========================================

const mobileMenuButton = document.querySelector(
  ".mobile-menu-button"
);

const mobileNav = document.querySelector(
  ".mobile-nav"
);

if (mobileMenuButton && mobileNav) {
  mobileMenuButton.addEventListener(
    "click",
    () => {
      const isOpen =
        mobileNav.classList.toggle("is-open");

      mobileMenuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      mobileMenuButton.classList.toggle(
        "is-open",
        isOpen
      );
    }
  );


  // Mobile menu link click
  const mobileLinks =
    mobileNav.querySelectorAll("a");

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");

      mobileMenuButton.classList.remove(
        "is-open"
      );

      mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });
    }
// =========================================
// BRIQONA — DASHBOARD INTERACTIONS
// PART 3
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  // Mock dashboard navigation
  const mockNavItems = document.querySelectorAll(
    ".mock-nav"
  );

  mockNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      mockNavItems.forEach((nav) => {
        nav.classList.remove("active");
      });

      item.classList.add("active");
    });
  });


  // Dashboard action buttons
  const dashboardButtons =
    document.querySelectorAll(
      ".mock-new-button"
    );

  dashboardButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = "Created";
      
      setTimeout(() => {
        button.textContent = "New";
      }, 1400);
    });
  });


  // Pricing buttons
  const planButtons =
    document.querySelectorAll(
      ".plan-button"
    );

  planButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const originalText =
        button.textContent;

      button.textContent = "Selected ✓";

      setTimeout(() => {
        button.textContent =
          originalText;
      }, 1400);
    });
  });
});
// =========================================
// BRIQONA — CONTACT ACTIONS
// PART 4
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  // WhatsApp
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


  // Support phone
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


  // WhatsApp phone
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
});
// =========================================
// MOBILE MENU + STICKY HEADER FIX
// =========================================

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".mobile-menu-button");
  const mobileNav = document.querySelector(".mobile-nav");

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      menuButton.classList.toggle("is-open");
      mobileNav.classList.toggle("is-open");
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuButton.classList.remove("is-open");
        mobileNav.classList.remove("is-open");
      });
    });
  }
});
/* =========================================
   BRIQONA MOBILE MENU — FINAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".mobile-menu-button");
  const mainNav = document.querySelector(".main-nav");
  const navActions = document.querySelector(".nav-actions");

  if (!menuButton || !mainNav || !navActions) return;

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.classList.toggle("is-open");

    mainNav.classList.toggle("is-open", isOpen);
    navActions.classList.toggle("is-open", isOpen);

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.classList.remove("is-open");
      mainNav.classList.remove("is-open");
      navActions.classList.remove("is-open");
      menuButton.setAttribute("aria-label", "Open menu");
    });
  });
});

/* =========================================
   BRIQONA HEADER — ACTUAL IDs FIX
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (!menuToggle || !navMenu) {
    return;
  }

  menuToggle.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const isOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Open navigation"
        : "Close navigation"
    );

    navMenu.classList.toggle(
      "active",
      !isOpen
    );
  });
});
