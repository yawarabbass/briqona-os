/* =========================================================
   BRIQONA OS — MASTER APP.JS
   ========================================================= */

"use strict";


/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [
  ...parent.querySelectorAll(selector)
];


/* =========================================================
   HEADER SCROLL STATE
   ========================================================= */

const header = $(".site-header");

const updateHeader = () => {
  if (!header) return;

  header.classList.toggle("scrolled", window.scrollY > 20);
};

window.addEventListener("scroll", updateHeader, {
  passive: true
});

updateHeader();


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = $(".menu-toggle");
const navMenu = $(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  $$(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (
      !navMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}


/* =========================================================
   SMOOTH ANCHOR NAVIGATION
   ========================================================= */

$$('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    history.replaceState(null, "", targetId);
  });
});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = $$("section[id]");
const navLinks = $$('.nav-menu a[href^="#"]');

if (sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        const activeLink = $(
          `.nav-menu a[href="#${entry.target.id}"]`
        );

        if (activeLink) {
          activeLink.classList.add("active");
        }
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}


/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

const revealElements = $$(
  ".section-heading, .feature-card, .industry-card, .capability, .security-card, .price-card, .faq-list, .ai-console, .custom-business"
);

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition =
    "opacity 600ms ease, transform 600ms ease";
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.08
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================================
   FAQ — ONLY ONE OPEN AT A TIME
   ========================================================= */

const faqDetails = $$(".faq-list details");

faqDetails.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    faqDetails.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.removeAttribute("open");
      }
    });
  });
});


/* =========================================================
   EARLY ACCESS FORM
   ========================================================= */

const accessForm = $(".early-access-form");

if (accessForm) {
  accessForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = $("input[type='email']", accessForm);

    if (!input) return;

    const email = input.value.trim();

    if (!email) {
      input.focus();
      return;
    }

    if (!input.checkValidity()) {
      input.reportValidity();
      return;
    }

    const button = $("button[type='submit']", accessForm);

    if (!button) return;

    const originalText = button.textContent;

    button.disabled = true;
    button.textContent = "Request received";

    input.value = "";

    setTimeout(() => {
      button.disabled = false;
      button.textContent = originalText;
    }, 3500);
  });
}


/* =========================================================
   AI CONSOLE DEMO
   ========================================================= */

const consoleInput = $(".console-input");

if (consoleInput) {
  const consoleButton = $("button", consoleInput);

  if (consoleButton) {
    consoleButton.addEventListener("click", () => {
      const original = consoleButton.textContent;

      consoleButton.textContent = "✓";

      setTimeout(() => {
        consoleButton.textContent = original;
      }, 1500);
    });
  }
}


/* =========================================================
   DASHBOARD PULSE LINE
   ========================================================= */

const pulseLine = $(".pulse-line span");

if (pulseLine) {
  let progress = 78;
  let direction = 1;

  setInterval(() => {
    progress += direction * 0.15;

    if (progress >= 84) {
      direction = -1;
    }

    if (progress <= 75) {
      direction = 1;
    }

    pulseLine.style.width = `${progress}%`;
  }, 120);
}


/* =========================================================
   YEAR
   ========================================================= */

const yearElements = $$("[data-year]");

yearElements.forEach((element) => {
  element.textContent = new Date().getFullYear();
});


/* =========================================================
   COPY / COMMAND INTERACTION
   ========================================================= */

const commandCards = $$(".command-card");

commandCards.forEach((card) => {
  card.addEventListener("click", async () => {
    const text = $(".command-content p", card);

    if (!text) return;

    const value = text.textContent.trim();

    try {
      await navigator.clipboard.writeText(value);

      card.dataset.copied = "true";

      setTimeout(() => {
        delete card.dataset.copied;
      }, 1200);
    } catch {
      // Clipboard may be unavailable in some browsers.
    }
  });
});


/* =========================================================
   BUTTON FEEDBACK
   ========================================================= */

$$(".btn").forEach((button) => {
  button.addEventListener("pointerdown", () => {
    button.style.transform = "translateY(0)";
  });

  button.addEventListener("pointerup", () => {
    button.style.transform = "";
  });

  button.addEventListener("pointerleave", () => {
    button.style.transform = "";
  });
});


/* =========================================================
   ESCAPE KEY — CLOSE MOBILE MENU
   ========================================================= */

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (navMenu) {
    navMenu.classList.remove("open");
  }

  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", "false");
  }
});


/* =========================================================
   IMAGE LAZY LOADING
   ========================================================= */

$$("img").forEach((image) => {
  if (!image.hasAttribute("loading")) {
    image.setAttribute("loading", "lazy");
  }

  if (!image.hasAttribute("decoding")) {
    image.setAttribute("decoding", "async");
  }
});


/* =========================================================
   EXTERNAL LINKS
   ========================================================= */

$$('a[href^="http"]').forEach((link) => {
  try {
    const url = new URL(link.href);

    if (url.hostname !== window.location.hostname) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  } catch {
    // Ignore invalid URLs.
  }
});


/* =========================================================
   PAGE READY
   ========================================================= */

document.documentElement.classList.add("js-enabled");

window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});


/* =========================================================
   BRIQONA OS READY
   ========================================================= */

console.log(
  "%cBRIQONA OS%c — Interface initialized.",
  "color:#d8ff45;font-weight:800;",
  "color:#a8afbd;"
);
