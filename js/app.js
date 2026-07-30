/* =========================================================
   BRIQONA OS
   GLOBAL COMPONENT LOADER + MOBILE MENU
   ========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

  const isPagesDirectory =
    window.location.pathname.includes("/pages/");

  const componentPath =
    isPagesDirectory
      ? "../components/"
      : "./components/";


  /* =======================================================
     LOAD COMPONENT
  ======================================================= */

  async function loadComponent(name) {

    const placeholder =
      document.querySelector(
        `[data-component="${name}"]`
      );

    if (!placeholder) {
      return null;
    }

    try {

      const response = await fetch(
        `${componentPath}${name}.html`,
        {
          cache: "no-cache"
        }
      );

      if (!response.ok) {
        throw new Error(
          `${name}.html returned ${response.status}`
        );
      }

      let html = await response.text();


      /*
       * Root index.html uses ./ paths.
       * Pages inside /pages/ use ../ paths.
       */
      if (!isPagesDirectory) {

        html = html.replaceAll(
          'href="../',
          'href="./'
        );

      }


      placeholder.outerHTML = html;

      return html;

    } catch (error) {

      console.error(
        `BRIQONA component error: ${name}`,
        error
      );

      return null;

    }

  }


  /* =======================================================
     LOAD ALL COMPONENTS
     ======================================================= */

  await loadComponent("header");

  await loadComponent("mobile-nav");

  await loadComponent("footer");


  /* =======================================================
     MOBILE MENU
     ======================================================= */

  const hamburger =
    document.getElementById("hamburger");

  const mobileNav =
    document.getElementById("mobileNav");


  if (!hamburger || !mobileNav) {

    console.warn(
      "BRIQONA: Mobile navigation elements not found."
    );

    return;

  }


  function closeMenu() {

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

  }


  function openMenu() {

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

  }


  hamburger.addEventListener(
    "click",
    () => {

      const menuIsOpen =
        document.body.classList.contains(
          "menu-open"
        );

      if (menuIsOpen) {

        closeMenu();

      } else {

        openMenu();

      }

    }
  );


  /* =======================================================
     CLOSE WHEN LINK IS CLICKED
     ======================================================= */

  mobileNav
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        closeMenu
      );

    });


  /* =======================================================
     ESCAPE KEY
     ======================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {

        closeMenu();

      }

    }
  );


  /* =======================================================
     CLOSE WHEN GOING BACK TO DESKTOP
     ======================================================= */

  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 720) {

        closeMenu();

      }

    }
  );


});
