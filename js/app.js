/* =========================================================
   BRIQONA OS — GLOBAL APP
   Header + Footer + Mobile Navigation
   ========================================================= */

document.addEventListener("DOMContentLoaded", async () => {

  /* -------------------------------------------------------
     Detect current location
     Root:
       /index.html

     Pages:
       /pages/platform.html
       /pages/about.html
       etc.
  ------------------------------------------------------- */

  const isInsidePages =
    window.location.pathname.includes("/pages/");


  /* -------------------------------------------------------
     Components are inside:
       /src/components/
  ------------------------------------------------------- */

  const componentPath =
    isInsidePages
      ? "../src/components/"
      : "./src/components/";


  /* -------------------------------------------------------
     Fix component links depending on page location
  ------------------------------------------------------- */

  const prepareComponent = (html) => {

    if (isInsidePages) {
      return html;
    }

    return html
      .replaceAll('href="../index.html"', 'href="./index.html"')
      .replaceAll('href="../pages/', 'href="./pages/');

  };


  /* -------------------------------------------------------
     Load component
  ------------------------------------------------------- */

  const loadComponent = async (fileName) => {

    try {

      const response = await fetch(
        componentPath + fileName
      );

      if (!response.ok) {

        throw new Error(
          `Could not load ${componentPath + fileName}`
        );

      }

      const html = await response.text();

      return prepareComponent(html);

    } catch (error) {

      console.error(
        "Briqona component error:",
        error
      );

      return "";

    }

  };


  /* =======================================================
     HEADER
  ======================================================= */

  const headerPlaceholder =
    document.querySelector(
      "[data-component='header']"
    );


  if (headerPlaceholder) {

    const headerHTML =
      await loadComponent("header.html");

    if (headerHTML) {

      headerPlaceholder.outerHTML =
        headerHTML;

    }

  }


  /* =======================================================
     MOBILE NAV
  ======================================================= */

  const mobilePlaceholder =
    document.querySelector(
      "[data-component='mobile-nav']"
    );


  if (mobilePlaceholder) {

    const mobileHTML =
      await loadComponent("mobile-nav.html");

    if (mobileHTML) {

      mobilePlaceholder.outerHTML =
        mobileHTML;

    }

  }


  /* =======================================================
     FOOTER
  ======================================================= */

  const footerPlaceholder =
    document.querySelector(
      "[data-component='footer']"
    );


  if (footerPlaceholder) {

    const footerHTML =
      await loadComponent("footer.html");

    if (footerHTML) {

      footerPlaceholder.outerHTML =
        footerHTML;

    }

  }


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const hamburger =
    document.getElementById("hamburger");


  const mobileNav =
    document.getElementById("mobileNav");


  if (!hamburger || !mobileNav) {

    console.log(
      "Briqona: Mobile navigation elements not found."
    );

    return;

  }


  /* -------------------------------------------------------
     Close menu
  ------------------------------------------------------- */

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


  /* -------------------------------------------------------
     Open menu
  ------------------------------------------------------- */

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


  /* -------------------------------------------------------
     Hamburger click
  ------------------------------------------------------- */

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


  /* -------------------------------------------------------
     Close after clicking mobile link
  ------------------------------------------------------- */

  mobileNav
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        closeMenu
      );

    });


  /* -------------------------------------------------------
     ESC closes menu
  ------------------------------------------------------- */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {

        closeMenu();

      }

    }
  );


  /* -------------------------------------------------------
     Close when returning to desktop
  ------------------------------------------------------- */

  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 720) {

        closeMenu();

      }

    }
  );


});
/* =========================================================
   BRIQONA OS — FLOATING WHATSAPP SUPPORT
   ========================================================= */

(function () {

  const whatsappNumber = "923348101110";

  const whatsappButton = document.createElement("a");

  whatsappButton.href =
    `https://wa.me/${whatsappNumber}`;

  whatsappButton.target = "_blank";

  whatsappButton.rel = "noopener";

  whatsappButton.className =
    "floating-whatsapp";

  whatsappButton.setAttribute(
    "aria-label",
    "Chat with Briqona OS on WhatsApp"
  );

  whatsappButton.innerHTML = `
    <span class="whatsapp-icon">✆</span>
    <span class="whatsapp-text">WhatsApp Support</span>
  `;

  document.body.appendChild(whatsappButton);

})();
