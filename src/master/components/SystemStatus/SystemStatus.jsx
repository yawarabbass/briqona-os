/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| System Status
|--------------------------------------------------------------------------
| Enterprise Monitoring
|--------------------------------------------------------------------------
*/

import {
  Server,
  Database,
  HardDrive,
  Bot,
  Mail,
  Cloud
} from "lucide-react";

import "./SystemStatus.css";

const systems = [

  {
    id:1,
    icon:<Server size={20}/>,
    name:"API Server",
    status:"Operational",
    uptime:"99.99%"
  },

  {
    id:2,
    icon:<Database size={20}/>,
    name:"Database",
    status:"Healthy",
    uptime:"100%"
  },

  {
    id:3,
    icon:<HardDrive size={20}/>,
    name:"Storage",
    status:"Normal",
    uptime:"99.95%"
  },

  {
    id:4,
    icon:<Bot size={20}/>,
    name:"AI Engine",
    status:"Running",
    uptime:"99.97%"
  },

  {
    id:5,
    icon:<Mail size={20}/>,
    name:"Email Queue",
    status:"Online",
    uptime:"99.98%"
  },

  {
    id:6,
    icon:<Cloud size={20}/>,
    name:"Cloudflare",
    status:"Protected",
    uptime:"100%"
  }

];

export default function SystemStatus(){

return(

<section className="system-status">

<div className="system-header">

<div>

<span>

Infrastructure Health

</span>

<h3>

System Status

</h3>

</div>

</div>

<div className="system-list">

{systems.map(system=>(

<div
key={system.id}
className="system-item"
>

<div className="system-left">

<div className="system-icon">

{system.icon}

</div>

<div>

<h4>

{system.name}

</h4>

<p>

Uptime {system.uptime}

</p>

</div>

</div>

<span className="system-badge">

● {system.status}

</span>

</div>

))}

</div>

</section>

);

}
