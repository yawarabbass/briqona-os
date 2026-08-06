/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Recent Activity
|--------------------------------------------------------------------------
| Enterprise Timeline
|--------------------------------------------------------------------------
*/

import {
  Building2,
  UserPlus,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

import "./RecentActivity.css";

const activities = [

  {
    id:1,
    icon:<Building2 size={18}/>,
    title:"New company registered",
    description:"Alpha Technologies joined BRIQONA OS.",
    time:"2 min ago"
  },

  {
    id:2,
    icon:<UserPlus size={18}/>,
    title:"New user created",
    description:"Administrator account created successfully.",
    time:"15 min ago"
  },

  {
    id:3,
    icon:<CreditCard size={18}/>,
    title:"Subscription upgraded",
    description:"Business plan upgraded to Enterprise.",
    time:"1 hour ago"
  },

  {
    id:4,
    icon:<ShieldCheck size={18}/>,
    title:"System backup completed",
    description:"Daily cloud backup finished successfully.",
    time:"Today"
  }

];

export default function RecentActivity(){

return(

<section className="recent-activity">

<div className="activity-header">

<div>

<span>

Platform Timeline

</span>

<h3>

Recent Activity

</h3>

</div>

</div>

<div className="activity-list">

{activities.map(activity=>(

<div
key={activity.id}
className="activity-item"
>

<div className="activity-icon">

{activity.icon}

</div>

<div className="activity-content">

<h4>

{activity.title}

</h4>

<p>

{activity.description}

</p>

</div>

<div className="activity-time">

{activity.time}

</div>

</div>

))}

</div>

</section>

);

}
