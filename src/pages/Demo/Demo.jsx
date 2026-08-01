import "./Demo.css";

function Demo(){

return(

<main className="demo-page">


<section className="demo-hero">

<span>
BRIQONA OS DEMO
</span>

<h1>
Experience The Power Of
<br/>
<strong>Intelligent Business</strong>
</h1>

<p>
See how Briqona OS helps businesses automate workflows,
manage operations, and make smarter decisions with AI.
</p>


<button>
Request Demo
</button>


</section>




<section className="demo-benefits">


<h2>
What You Will Discover
</h2>


<div className="demo-grid">


<div className="demo-card">

<h3>
AI Automation
</h3>

<p>
Explore how intelligent automation reduces manual work
and improves productivity.
</p>

</div>



<div className="demo-card">

<h3>
Business Analytics
</h3>

<p>
See real-time insights that help you make better decisions.
</p>

</div>



<div className="demo-card">

<h3>
Smart Workflows
</h3>

<p>
Discover connected processes built for modern teams.
</p>

</div>



</div>


</section>




<section className="demo-form-section">


<div className="demo-form">


<h2>
Schedule Your Demo
</h2>


<input
type="text"
placeholder="Full Name"
/>


<input
type="email"
placeholder="Business Email"
/>


<input
type="text"
placeholder="Company Name"
/>


<input
type="text"
placeholder="Phone Number"
/>


<select>

<option>
Select Company Size
</option>

<option>
Startup
</option>

<option>
Small Business
</option>

<option>
Enterprise
</option>

</select>


<textarea
placeholder="Tell us about your business"
rows="5"
/>


<button>
Submit Request
</button>


</div>


</section>




<section className="demo-cta">

<h2>
Ready To See Briqona OS In Action?
</h2>

<p>
Book a personalized demo with our team today.
</p>


<button>
Get Started
</button>


</section>



</main>

);

}


export default Demo;
