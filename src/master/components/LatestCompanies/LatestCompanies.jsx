/* 
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Latest Companies
|--------------------------------------------------------------------------
| Enterprise Edition
|--------------------------------------------------------------------------
*/

import { Eye } from "lucide-react";

import "./LatestCompanies.css";

const companies = [

  {
    id:1,
    name:"Alpha Technologies",
    industry:"Software",
    plan:"Enterprise",
    revenue:"$18,420",
    status:"Active"
  },

  {
    id:2,
    name:"Bright Solutions",
    industry:"Retail",
    plan:"Business",
    revenue:"$9,840",
    status:"Active"
  },

  {
    id:3,
    name:"Cloud Nexus",
    industry:"Healthcare",
    plan:"Starter",
    revenue:"$2,430",
    status:"Pending"
  },

  {
    id:4,
    name:"Digital One",
    industry:"Education",
    plan:"Professional",
    revenue:"$6,280",
    status:"Active"
  }

];

export default function LatestCompanies(){

return(

<section className="latest-companies">

<div className="latest-header">

<div>

<span>

Latest Clients

</span>

<h3>

Latest Companies

</h3>

</div>

</div>

<table className="latest-table">

<thead>

<tr>

<th>Company</th>

<th>Industry</th>

<th>Plan</th>

<th>Revenue</th>

<th>Status</th>

<th></th>

</tr>

</thead>

<tbody>

{companies.map(company=>(

<tr key={company.id}>

<td>

<div className="company-info">

<div className="company-avatar">

{company.name.charAt(0)}

</div>

<div>

<strong>

{company.name}

</strong>

</div>

</div>

</td>

<td>

<span className="industry-badge">

{company.industry}

</span>

</td>

<td>

<span className="plan-badge">

{company.plan}

</span>

</td>

<td>

{company.revenue}

</td>

<td>

<span className={`status ${company.status.toLowerCase()}`}>

{company.status}

</span>

</td>

<td>

<button className="view-btn">

<Eye size={18}/>

</button>

</td>

</tr>

))}

</tbody>

</table>

</section>

);

}
