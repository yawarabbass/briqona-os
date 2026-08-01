import "./Documentation.css";

function Documentation(){

const guides = [
{
title:"Getting Started",
text:"Learn how to create your account, setup your workspace, and start using Briqona OS."
},
{
title:"Platform Overview",
text:"Understand the core features, workflows, automation tools, and business modules."
},
{
title:"Account Setup",
text:"Configure your profile, teams, permissions, and business settings."
},
{
title:"Feature Guides",
text:"Explore detailed guides for automation, analytics, security, and integrations."
},
{
title:"Developer Resources",
text:"Access technical information and resources for building connected solutions."
},
{
title:"API Documentation",
text:"Learn how to connect and extend Briqona OS with powerful integrations."
}
];


return(

<main className="documentation-page">


<section className="documentation-hero">

<span>
BRIQONA OS DOCUMENTATION
</span>

<h1>
Everything You Need
<br/>
<strong>To Build Smarter</strong>
</h1>

<p>
Explore guides, resources, and technical documentation
to get the most from Briqona OS.
</p>


<div className="doc-search">

<input
type="text"
placeholder="Search documentation..."
/>

</div>


</section>




<section className="doc-guides">

<h2>
Documentation Guides
</h2>


<div className="doc-grid">

{
guides.map((item,index)=>(

<div className="doc-card" key={index}>

<h3>
{item.title}
</h3>

<p>
{item.text}
</p>

<button>
Read Guide
</button>

</div>

))
}


</div>


</section>




<section className="developer-section">

<h2>
Developer Resources
</h2>

<p>
Build powerful solutions with Briqona OS tools,
APIs, and integration capabilities.
</p>


</section>




<section className="doc-support">

<h2>
Need Help?
</h2>

<p>
Our support team is available if you need assistance.
</p>


<button>
Contact Support
</button>


</section>




<section className="documentation-cta">

<h2>
Start Building With Briqona OS
</h2>

<p>
Access powerful business technology documentation.
</p>

<button>
Get Started
</button>


</section>


</main>

);

}

export default Documentation;
