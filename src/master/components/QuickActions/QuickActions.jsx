/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Quick Actions
|--------------------------------------------------------------------------
| Enterprise Action Center
|--------------------------------------------------------------------------
*/

import {
  Building2,
  UserPlus,
  Package,
  FileBarChart2,
  Bot,
  Settings
} from "lucide-react";

import "./QuickActions.css";

const actions = [

  {
    id:1,
    icon:<Building2 size={22}/>,
    title:"Add Company",
    subtitle:"Create new workspace"
  },

  {
    id:2,
    icon:<UserPlus size={22}/>,
    title:"Create User",
    subtitle:"Invite administrator"
  },

  {
    id:3,
    icon:<Package size={22}/>,
    title:"Plans",
    subtitle:"Manage subscriptions"
  },

  {
    id:4,
    icon:<FileBarChart2 size={22}/>,
    title:"Reports",
    subtitle:"Platform analytics"
  },

  {
    id:5,
    icon:<Bot size={22}/>,
    title:"AI Center",
    subtitle:"Open AI Assistant"
  },

  {
    id:6,
    icon:<Settings size={22}/>,
    title:"Settings",
    subtitle:"Platform configuration"
  }

];

export default function QuickActions(){

return(

<section className="quick-actions">

<div className="quick-header">

<div>

<span>

Enterprise Shortcuts

</span>

<h3>

Quick Actions

</h3>

</div>

</div>

<div className="quick-grid">

{actions.map(action=>(

<button
key={action.id}
className="quick-card"
>

<div className="quick-icon">

{action.icon}

</div>

<div className="quick-content">

<h4>

{action.title}

</h4>

<p>

{action.subtitle}

</p>

</div>

</button>

))}

</div>

</section>

);

}
