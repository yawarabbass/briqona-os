import { useState } from "react";
import "./Header.css";

const navItems = [
  { label:"Home", href:"/" },
  { label:"Platform", href:"/platform" },

  {
    label:"Solutions",
    dropdown:[
      {label:"CRM",href:"/solutions/crm"},
      {label:"Finance",href:"/solutions/finance"},
      {label:"Inventory",href:"/solutions/inventory"},
      {label:"Analytics",href:"/solutions/analytics"},
      {label:"Briqona AI",href:"/solutions/ai"},
    ]
  },

  {
    label:"Industries",
    dropdown:[
      {label:"Healthcare",href:"/industries/healthcare"},
      {label:"Construction",href:"/industries/construction"},
      {label:"Real Estate",href:"/industries/real-estate"},
      {label:"Retail",href:"/industries/retail"},
      {label:"Education",href:"/industries/education"},
    ]
  },

  {label:"Pricing",href:"/pricing"},
  {label:"About",href:"/about"},
  {label:"Contact",href:"/contact"},
];


function Header(){

const [menuOpen,setMenuOpen]=useState(false);


return(

<header className="site-header">

<div className="container site-header__inner">


<a href="/" className="site-header__brand">

<span className="site-header__logo">
<i/>
<i/>
<i/>
<i/>
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



<nav className={menuOpen ? 
"site-header__nav open" :
"site-header__nav"}>


{navItems.map(item=>(

item.dropdown ?

<div className="nav-dropdown" key={item.label}>

<span>
{item.label} ▾
</span>


<div className="dropdown-menu">

{
item.dropdown.map(sub=>(

<a key={sub.label} href={sub.href}>
{sub.label}
</a>

))
}

</div>


</div>


:

<a key={item.label} href={item.href}>
{item.label}
</a>


))}



{/* Mobile Buttons */}

<div className="mobile-menu-buttons">


<a href="/demo">
Book a Demo
</a>


<a href="/contact">
Contact Sales
</a>


</div>


</nav>




<div className="site-header__actions">

<a href="/login">
Log in
</a>


<a className="start-btn" href="/register">
Start Free →
</a>


</div>



<button
className="menu-btn"
onClick={()=>setMenuOpen(!menuOpen)}
>

<span/>
<span/>
<span/>

</button>



</div>

</header>

)

}


export default Header;
