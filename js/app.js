/* =========================================================
   BRIQONA OS — GLOBAL APP
   Components + Mobile Navigation
   ========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

  /*
   * Detect whether the current page is inside /pages/
   */
  const isInsidePages =
    window.location.pathname.includes("/pages/");

  const componentPath =
    isInsidePages ? "../components/" : "./components/";

  /*
   * Fix links coming from reusable components.
   * Components use ../ paths because they are stored inside
   * the components folder.
   */
  const prepareComponent = (html) => {

    if (isInsidePages) {
      return html;
    }

    return html.replaceAll(
      'href="../',
      'href="./'
    );

  };


  /*
   * Load one reusable component
   */
  const loadComponent = async (fileName) => {

    try {

      const response = await fetch(
        componentPath + fileName
      );

      if (!response.ok) {
        throw new Error(
          `Could not load ${fileName}`
        );
      }

      const html = await response.text();

      return prepareComponent(html);

    } catch (error) {

      console.error(
        `Briqona component error:`,
        error
      );

      return "";

    }

  };


  /*
   * Load reusable Header
   */
  const headerPlaceholder =
    document.querySelector("[data-component='header']");

  const oldHeader =
    document.querySelector(".site-header");

  if (headerPlaceholder) {

    const headerHTML =
      await loadComponent("header.html");

    headerPlaceholder.outerHTML = headerHTML;

  } else if (oldHeader) {

    const headerHTML =
      await loadComponent("header.html");

    if (headerHTML) {
      oldHeader.outerHTML = headerHTML;
    }

  }


  /*
   * Load reusable Mobile Navigation
   */
  const mobilePlaceholder =
    document.querySelector(
      "[data-component='mobile-nav']"
    );

  const oldMobileNav =
    document.querySelector(".mobile-nav");

  if (mobilePlaceholder) {

    const mobileHTML =
      await loadComponent("mobile-nav.html");

    mobilePlaceholder.outerHTML = mobileHTML;

  } else if (oldMobileNav) {

    const mobileHTML =
      await loadComponent("mobile-nav.html");

    if (mobileHTML) {
      oldMobileNav.outerHTML = mobileHTML;
    }

  }


  /*
   * Load reusable Footer
   */
  const footerPlaceholder =
    document.querySelector(
      "[data-component='footer']"
    );

  const oldFooter =
    document.querySelector(".site-footer");

  if (footerPlaceholder) {

    const footerHTML =
      await loadComponent("footer.html");

    footerPlaceholder.outerHTML = footerHTML;

  } else if (oldFooter) {

    const footerHTML =
      await loadComponent("footer.html");

    if (footerHTML) {
      oldFooter.outerHTML = footerHTML;
    }

  }


  /*
   * MOBILE MENU
   */
  const hamburger =
    document.getElementById("hamburger");

  const mobileNav =
    document.getElementById("mobileNav");


  if (!hamburger || !mobileNav) {
    return;
  }


  const closeMenu = () => {

    document.body.classList.remove(
      "menu-open"
    );

    hamburger.setAttribute(
      "aria-expanded",
      "false"
    );

    hamburger.setAttribute(
      "aria-label",
      "Open menu"
    );

  };


  const openMenu = () => {

    document.body.classList.add(
      "menu-open"
    );

    hamburger.setAttribute(
      "aria-expanded",
      "true"
    );

    hamburger.setAttribute(
      "aria-label",
      "Close menu"
    );

  };


  hamburger.addEventListener(
    "click",
    () => {

      const isOpen =
        document.body.classList.contains(
          "menu-open"
        );

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }

    }
  );


  /*
   * Close menu after selecting a page
   */
  mobileNav
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        closeMenu
      );

    });


  /*
   * ESC closes menu
   */
  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {
        closeMenu();
      }

    }
  );


  /*
   * Close menu when returning to desktop
   */
  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 720) {
        closeMenu();
      }

    }
  );

});
