import "./Careers.css";
 
function Careers() {

const benefits = [
{
title:"Innovation",
text:"Work on AI, automation and next-generation business technology."
},
{
title:"Global Impact",
text:"Build solutions that help businesses operate smarter worldwide."
},
{
title:"Career Growth",
text:"Learn new skills and grow with a technology-focused team."
},
{
title:"Flexible Culture",
text:"Enjoy a modern, collaborative and flexible work environment."
}
];


const jobs = [
"Frontend Developer",
"Backend Developer",
"AI Engineer",
"UI/UX Designer",
"Product Manager"
];


return (

<main className="careers-page">


<section className="careers-hero">

<span>
BRIQONA OS CAREERS
</span>

<h1>
Build The Future Of
<br/>
<strong>Intelligent Business</strong>
</h1>

<p>
Join Briqona OS and help us create AI-powered solutions
that transform how businesses operate.
</p>

<div className="hero-buttons">

<button>
View Positions
</button>

<button className="outline">
Apply Now
</button>

</div>

</section>




<section className="benefits">

<h2>
Why Join Briqona OS?
</h2>


<div className="benefit-grid">

{
benefits.map((item,index)=>(

<div className="benefit-card" key={index}>

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




<section className="culture">

<h2>
Our Culture
</h2>

<p>
We believe in innovation, ownership, collaboration,
and continuous learning while building products that
create real business impact.
</p>

</section>




<section className="jobs">

<h2>
Open Positions
</h2>


<div className="job-grid">

{
jobs.map((job,index)=>(

<div className="job-card" key={index}>

<h3>
{job}
</h3>

<p>
Full Time • Remote Friendly
</p>

<button>
Apply
</button>

</div>

))
}

</div>


</section>




<section className="application">

<h2>
Apply Now
</h2>

<form>


<input 
type="text"
placeholder="Full Name"
/>


<input 
type="email"
placeholder="Email Address"
/>


<input 
type="text"
placeholder="Phone Number"
/>


<input 
type="text"
placeholder="Position Applying For"
/>


<input 
type="text"
placeholder="LinkedIn Profile"
/>


<input 
type="text"
placeholder="Portfolio Website"
/>


<textarea
placeholder="Cover Letter"
rows="5"
/>



<label>
Upload CV / Resume
</label>

<input
type="file"
/>


<button>
Submit Application
</button>


</form>


</section>




<section className="process">

<h2>
Hiring Process
</h2>

<div>

<span>
1. Application Review
</span>

<span>
2. Interview
</span>

<span>
3. Technical Discussion
</span>

<span>
4. Final Decision
</span>

</div>

</section>




<section className="career-cta">

<h2>
Ready To Build The Future?
</h2>

<p>
Join Briqona OS and become part of an innovative technology team.
</p>

<button>
Apply Today
</button>

</section>



</main>

);

}

export default Careers;
