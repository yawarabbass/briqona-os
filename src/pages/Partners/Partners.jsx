import "./Partners.css";

function Partners() {

const partnerTypes = [
{
title:"Technology Partners",
text:"Build powerful integrations and help businesses achieve more with connected technology solutions."
},
{
title:"Solution Partners",
text:"Deliver intelligent business solutions by combining your expertise with Briqona OS."
},
{
title:"Referral Partners",
text:"Grow together by introducing businesses to modern AI-powered operations."
}
];


const benefits = [
"Expand your business opportunities",
"Access modern AI business technology",
"Create valuable customer solutions",
"Grow with a global technology ecosystem"
];


return (

<main className="partners-page">


<section className="partners-hero">

<span>
BRIQONA OS PARTNERS
</span>

<h1>
Build Stronger
<br/>
<strong>Business Partnerships</strong>
</h1>

<p>
Join the Briqona OS partner ecosystem and help businesses
transform their operations with intelligent technology.
</p>

<button onClick={() => window.location.href="/contact"}>
  Become A Partner
</button>

</section>




<section className="partner-types">

<h2>
Partner Programs
</h2>


<div className="partner-grid">

{
partnerTypes.map((item,index)=>(

<div className="partner-card" key={index}>

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




<section className="partner-benefits">

<h2>
Why Partner With Briqona OS?
</h2>


<ul>

{
benefits.map((item,index)=>(

<li key={index}>
✓ {item}
</li>

))
}

</ul>


</section>




<section className="partner-process">

<h2>
Partnership Process
</h2>


<div className="process-grid">

<div>
<strong>01</strong>
<p>Submit Partnership Request</p>
</div>


<div>
<strong>02</strong>
<p>Discuss Opportunities</p>
</div>


<div>
<strong>03</strong>
<p>Launch Partnership</p>
</div>


<div>
<strong>04</strong>
<p>Grow Together</p>
</div>


</div>


</section>




<section className="partners-cta">

<h2>
Ready To Partner With Briqona OS?
</h2>

<p>
Let's create smarter solutions for businesses worldwide.
</p>

<button onClick={() => window.location.href="/contact"}>
  Apply Now
</button>

</section>



</main>

);

}

export default Partners;
