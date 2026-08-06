import "./Sidebar.css";

import { useState } from "react";

import { NavLink } from "react-router-dom";

import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";

import menuConfig from "./MenuConfig";

import Logo from "./Logo";

export default function Sidebar({

sidebarOpen,

closeSidebar,

}){

const [collapsed,setCollapsed]=useState(false);

const toggleCollapse=()=>{

setCollapsed(!collapsed);

};

return(

<aside

className={`
sidebar
${collapsed ? "collapsed" : ""}
${sidebarOpen ? "mobile-open" : ""}
`}

>

<div className="sidebar-top">

<Logo collapsed={collapsed}/>

<button

type="button"

className="collapse-button"

onClick={toggleCollapse}

>

{collapsed ?

<ChevronRight size={18}/>

:

<ChevronLeft size={18}/>

}

</button>

</div>

<nav className="sidebar-menu">

{menuConfig.map((item)=>{

const Icon=item.icon;

return(

<NavLink

key={item.id}

to={item.path}

onClick={closeSidebar}

className={({isActive})=>

`
sidebar-item
${isActive ? "active" : ""}
`

}

>

<span className="sidebar-item-icon">

<Icon size={20}/>

</span>

{!collapsed && (

<span className="sidebar-item-title">

{item.title}

</span>

)}

</NavLink>

);

})}

</nav>

<div className="sidebar-footer">

<button

type="button"

className="sidebar-item logout"

>

<span className="sidebar-item-icon">

<LogOut size={20}/>

</span>

{!collapsed && (

<span className="sidebar-item-title">

Logout

</span>

)}

</button>

</div>

</aside>

);

}
