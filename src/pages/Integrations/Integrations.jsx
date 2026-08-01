import "./Integrations.css";

function Integrations(){

const integrations = [
{
title:"Business Tools",
text:"Connect your essential business applications and keep operations synchronized."
},
{
title:"Communication",
text:"Integrate communication platforms to improve team collaboration."
},
{
title:"Analytics",
text:"Connect data tools and transform information into business insights."
},
{
title:"Payments",
text:"Enable smooth payment workflows with connected financial tools."
},
{
title:"Developer Tools",
text:"Build custom solutions with flexible APIs and developer resources."
},
{
title:"Custom Integrations",
text:"Create tailored integrations designed around your business needs."
}
];


return(

<main className="integrations-page">


<section className="integrations-hero">

<span>
BRIQONA OS INTEGRATIONS
</span>


<h1>
Connect Everything.
<br/>
<strong>Build Smarter Workflows</strong>
</h1>


<p>
Connect your favorite tools with Briqona OS and create
a powerful business ecosystem built for growth.
</p>


<button>
Explore Integrations
</button>


</section>




<section className="integration-section">


<h2>
Integration Categories
</h2>


<div className="integration-grid">


{
integrations.map((item,index)=>(

<div className="integration-card" key={index}>


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


<button>
Learn More
</button>


</div>

))
}


</div>


</section>




<section className="api-section">


<h2>
Powerful API & Custom Connections
</h2>


<p>
Build custom workflows and connect Briqona OS with
your existing technology stack using flexible integration tools.
</p>


</section>




<section className="ecosystem-section">


<h2>
A Growing Business Ecosystem
</h2>


<p>
Partner with Briqona OS to create connected,
efficient, and intelligent business operations.
</p>


</section>




<section className="integration-cta">


<h2>
Need A Custom Integration?
</h2>


<p>
Tell us what your business needs and our team can help.
</p>


<button>
Request Integration
</button>


</section>



</main>

);

}

export default Integrations;
