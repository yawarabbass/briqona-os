import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

const app = document.querySelector("#app");

if (!app) {
  throw new Error("Briqona app root was not found.");
}

const header = renderHeader();
const main = document.querySelector("#main-content");

const footer = renderFooter();

app.prepend(header);
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

  navigation
    .querySelectorAll("a")
    .forEach((link) => {
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
