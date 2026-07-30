/* =========================================================
   BRIQONA OS — GLOBAL APP
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  if (!hamburger || !mobileNav) {
    return;
  }


  /* =========================================
     MOBILE MENU
  ========================================== */

  const closeMenu = () => {

    document.body.classList.remove("menu-open");

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

    document.body.classList.add("menu-open");

    hamburger.setAttribute(
      "aria-expanded",
      "true"
    );

    hamburger.setAttribute(
      "aria-label",
      "Close menu"
    );

  };


  hamburger.addEventListener("click", () => {

    const isOpen =
      document.body.classList.contains("menu-open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }

  });


  /* =========================================
     CLOSE AFTER CLICKING A LINK
  ========================================== */

  const mobileLinks =
    mobileNav.querySelectorAll("a");

  mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {
      closeMenu();
    });

  });


  /* =========================================
     CLOSE WITH ESCAPE
  ========================================== */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
      closeMenu();
    }

  });


  /* =========================================
     CLOSE WHEN WINDOW BECOMES DESKTOP
  ========================================== */

  window.addEventListener("resize", () => {

    if (window.innerWidth > 720) {
      closeMenu();
    }

  });

});
