import "./Partners.css";


const partners = [

  {
    icon:"🤝",
    title:"Technology Partners",
    text:"Collaborate with us to build powerful business solutions."
  },

  {
    icon:"🌎",
    title:"Business Partners",
    text:"Help organizations transform their operations with Briqona OS."
  },

  {
    icon:"🚀",
    title:"Solution Partners",
    text:"Deliver industry-focused solutions with our platform."
  },

  {
    icon:"💡",
    title:"Innovation Partners",
    text:"Create the future of intelligent business technology."
  },

];


function Partners(){

return (

<main className="partners-page">


<section className="partners-hero">

<span>
BRIQONA OS PARTNERS
</span>


<h1>
Grow Together
<em> With Briqona</em>
</h1>


<p>
Join our partner ecosystem and help businesses
achieve more with intelligent digital solutions.
</p>


</section>




<section className="partners-grid">


{partners.map((item)=>(

<div
className="partner-card"
key={item.title}
>


<div className="partner-icon">
{item.icon}
</div>


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


<a href="/contact">
Become Partner →
</a>


</div>

))}


</section>




<section className="partners-cta">

<h2>
Build The Future Together
</h2>


<p>
Partner with Briqona OS and create meaningful business impact.
</p>


<a href="/contact">
Contact Partnership Team →
</a>


</section>



</main>

);

}


export default Partners;
