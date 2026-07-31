import { useState } from "react";
import "./Header.css";


const navItems = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];


function Header() {

  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (

    <header className="site-header">


      <div className="container site-header__inner">


        <a
          className="site-header__brand"
          href="/"
          onClick={closeMenu}
        >

          <span className="site-header__logo">

            <i />
            <i />
            <i />
            <i />

          </span>


          <span className="site-header__brand-text">

            <strong>
              BRIQONA <em>OS</em>
            </strong>

            <small>
              Business Operating System
            </small>

          </span>


        </a>



        <nav
          className={
            menuOpen
            ? "site-header__nav site-header__nav--open"
            : "site-header__nav"
          }
        >

          {navItems.map((item)=>(

            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>

          ))}



          <a
            className="mobile-start"
            href="#start"
          >
            Start Free →
          </a>


        </nav>




        <div className="site-header__actions">


          <a
            className="site-header__login"
            href="/login"
          >
            Log in
          </a>


          <a
            className="site-header__button"
            href="/register"
          >
            Start Free
            <span>
              →
            </span>
          </a>


        </div>




        <div className="mobile-login">


          <a href="/login">
            Log in
          </a>


        </div>



        <button

          className={
            menuOpen
            ? "site-header__menu site-header__menu--open"
            : "site-header__menu"
          }

          onClick={() =>
            setMenuOpen(!menuOpen)
          }

        >

          <span />
          <span />
          <span />


        </button>


      </div>


    </header>

  );

}


export default Header;
