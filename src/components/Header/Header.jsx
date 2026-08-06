import "./Header.css";

import {

Menu,

Bell,

Search,

Sun,

Settings

} from "lucide-react";

export default function Header({

openSidebar,

}){

return(

<header className="master-header">

<div className="header-left">

<button

type="button"

className="header-menu"

onClick={openSidebar}

>

<Menu size={22}/>

</button>

<div className="header-search">

<Search size={18}/>

<input

type="text"

placeholder="Search anything..."

/>

</div>

</div>

<div className="header-right">

<button

type="button"

className="header-icon"

>

<Sun size={18}/>

</button>

<button

type="button"

className="header-icon"

>

<Bell size={18}/>

</button>

<button

type="button"

className="header-icon"

>

<Settings size={18}/>

</button>

<div className="header-user">

<div className="header-avatar">

BO

</div>

<div className="header-user-info">

<h4>

Owner

</h4>

<span>

Administrator

</span>

</div>

</div>

</div>

</header>

);

}
