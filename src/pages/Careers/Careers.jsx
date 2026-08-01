import "./Careers.css";


const jobs = [

  {
    title:"Frontend Developer",
    type:"Full Time",
    text:"Build modern and responsive interfaces for Briqona OS."
  },

  {
    title:"AI Engineer",
    type:"Full Time",
    text:"Create intelligent solutions powered by artificial intelligence."
  },

  {
    title:"Business Analyst",
    type:"Remote",
    text:"Help businesses improve operations with smart insights."
  },

];


function Careers(){

return (

<main className="careers-page">


<section className="careers-hero">

<span>
BRIQONA OS CAREERS
</span>


<h1>
Build The Future
<em> With Us</em>
</h1>


<p>
Join our team and help create the next generation
of business operating systems.
</p>


</section>




<section className="careers-grid">


{jobs.map((job)=>(

<div
className="career-card"
key={job.title}
>

<small>
{job.type}
</small>


<h3>
{job.title}
</h3>


<p>
{job.text}
</p>


<a href="/contact">
Apply Now →
</a>


</div>

))}


</section>




<section className="careers-cta">

<h2>
Ready To Join Briqona?
</h2>


<p>
Become part of an innovative technology team.
</p>


<a href="/contact">
Contact HR →
</a>


</section>



</main>

);

}


export default Careers;
