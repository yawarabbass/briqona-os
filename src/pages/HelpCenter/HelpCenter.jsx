import "./HelpCenter.css";
 

const helpItems = [

  {
    icon:"📚",
    title:"Getting Started",
    text:"Learn how to create your account and start using Briqona OS."
  },

  {
    icon:"⚙️",
    title:"Product Guides",
    text:"Explore detailed guides for platform features and tools."
  },

  {
    icon:"❓",
    title:"Frequently Asked Questions",
    text:"Find answers to common questions about Briqona OS."
  },

  {
    icon:"💬",
    title:"Contact Support",
    text:"Our support team is ready to help you anytime."
  },

];


function HelpCenter(){

return (

<main className="help-page">


<section className="help-hero">


<span>
BRIQONA OS HELP CENTER
</span>


<h1>
How Can We
<em> Help You?</em>
</h1>


<p>
Find guides, answers and resources to get the most
out of your Briqona OS experience.
</p>


</section>




<section className="help-grid">


{helpItems.map((item)=>(

<div
className="help-card"
key={item.title}
>


<div className="help-icon">
{item.icon}
</div>


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


<a href="/contact">
Learn More →
</a>


</div>

))}


</section>




<section className="help-cta">


<h2>
Still Need Help?
</h2>


<p>
Our team is always available to support your business.
</p>


<a href="/contact">
Contact Support →
</a>


</section>



</main>

);

}


export default HelpCenter;
