import "./HelpCenter.css";

function HelpCenter(){

const categories = [
{
title:"Getting Started",
text:"Learn how to create your account and begin using Briqona OS."
},
{
title:"Platform Features",
text:"Explore automation, analytics, workflows, and business tools."
},
{
title:"Account & Billing",
text:"Find information about accounts, plans, and subscriptions."
},
{
title:"Security",
text:"Understand security practices and data protection."
},
{
title:"Integrations",
text:"Learn how to connect your favorite business tools."
},
{
title:"Troubleshooting",
text:"Find solutions for common platform issues."
}
];


const faq = [
"How do I get started with Briqona OS?",
"How does AI automation work?",
"How is my business data protected?",
"How can I contact support?"
];


return(

<main className="help-page">


<section className="help-hero">

<span>
BRIQONA OS HELP CENTER
</span>

<h1>
Find Answers
<br/>
<strong>Get Expert Support</strong>
</h1>

<p>
Explore guides, resources, and answers to help you
get the most from Briqona OS.
</p>


<div className="search-box">

<input 
type="text"
placeholder="Search help articles..."
/>

</div>


</section>




<section className="help-categories">

<h2>
Browse Categories
</h2>


<div className="help-grid">

{
categories.map((item,index)=>(

<div className="help-card" key={index}>

<h3>
{item.title}
</h3>

<p>
{item.text}
</p>

</div>

))
}

</div>

</section>




<section className="faq-section">

<h2>
Frequently Asked Questions
</h2>


<div className="faq-list">

{
faq.map((item,index)=>(

<div key={index}>

<h3>
{item}
</h3>

<p>
Find detailed information and helpful guidance from our support resources.
</p>

</div>

))
}

</div>


</section>




<section className="support-section">

<h2>
Need More Help?
</h2>

<p>
Our support team is ready to help you with your questions.
</p>


<button>
Contact Support
</button>


</section>




<section className="help-cta">

<h2>
Build Smarter With Briqona OS
</h2>

<p>
Access powerful business tools with confidence.
</p>


<button>
Start Free
</button>


</section>



</main>

);

}

export default HelpCenter;
