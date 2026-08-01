import "./Pricing.css";

function Pricing() {

const plans = [

{
name:"Starter",
price:"$5",
desc:"Perfect for startups and small teams beginning their digital journey.",
features:[
"Business Dashboard",
"Basic AI Insights",
"Workflow Automation",
"Email Support"
],
button:"Start Free"
},


{
name:"Growth",
price:"$15",
desc:"Powerful tools for growing businesses that need automation.",
popular:true,
features:[
"Everything in Starter",
"Advanced Analytics",
"AI Business Assistant",
"Team Collaboration",
"Priority Support"
],
button:"Get Started"
},


{
name:"Enterprise",
price:"$30",
desc:"Complete business solution for scaling organizations.",
features:[
"Unlimited Users",
"Custom Solutions",
"Advanced Security",
"API Integrations",
"Dedicated Support"
],
button:"Contact Sales"
}

];


return (

<main className="pricing-page">


<section className="pricing-hero">

<span>
BRIQONA OS PRICING
</span>


<h1>
Simple Pricing For
<br/>
<strong>Smarter Businesses</strong>
</h1>


<p>
Choose a flexible plan designed to help your business grow
with AI-powered automation and intelligent tools.
</p>


</section>



<section className="pricing-section">


<div className="pricing-grid">


{
plans.map((plan,index)=>(


<div
key={index}
className={`pricing-card ${plan.popular ? "popular":""}`}
>


{
plan.popular &&
<div className="popular-badge">
MOST POPULAR
</div>
}



<h2>
{plan.name}
</h2>


<h3>
{plan.price}
<span>
/month
</span>
</h3>


<p>
{plan.desc}
</p>



<ul>

{
plan.features.map((feature,i)=>(

<li key={i}>
✓ {feature}
</li>

))
}

</ul>



<button>
{plan.button}
</button>



</div>


))
}


</div>


</section>




<section className="pricing-cta">


<h2>
Ready To Grow Your Business?
</h2>


<p>
Start with Briqona OS today and build smarter workflows.
</p>


<button>
Start Free
</button>


</section>



</main>

);

}


export default Pricing;
