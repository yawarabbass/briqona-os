import { useState } from "react";
import "./Header.css";

const navItems = [

  {
    label: "Home",
    href: "/",
  },

  {
    label: "Platform",
    href: "/platform",
  },

  {
    label: "Solutions",
    dropdown: [
      {
        label: "CRM",
        href: "/solutions/crm",
      },
      {
        label: "Finance",
        href: "/solutions/finance",
      },
      {
        label: "Inventory",
        href: "/solutions/inventory",
      },
      {
        label: "Analytics",
        href: "/solutions/analytics",
      },
      {
        label: "Briqona AI",
        href: "/solutions/ai",
      },
    ],
  },

  {
    label: "Industries",
    dropdown: [
      {
        label: "Healthcare",
        href: "/industries/healthcare",
      },
      {
        label: "Construction",
        href: "/industries/construction",
      },
      {
        label: "Real Estate",
        href: "/industries/real-estate",
      },
      {
        label: "Retail & E-commerce",
        href: "/industries/retail",
      },
      {
        label: "Education",
        href: "/industries/education",
      },
    ],
  },

  {
    label: "Pricing",
    href: "/pricing",
  },

  {
    label: "About",
    href: "/about",
  },

  {
    label: "Contact",
    href: "/contact",
  },

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

item.dropdown ? (

<div 
className="nav-dropdown"
key={item.label}
>

<a href="#">
{item.label} ▾
</a>


<div className="dropdown-menu">

{item.dropdown.map((sub)=>(

<a
  key={sub.label}
  href={sub.href}
  onClick={closeMenu}
>
  {sub.label}
</a>

))}

</div>


</div>

) : (

<a
key={item.label}
href={item.href}
onClick={closeMenu}
>
{item.label}
</a>

)

))}
          


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
