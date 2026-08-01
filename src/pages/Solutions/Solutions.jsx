import "./Solutions.css";


const solutions = [
  {
    icon:"👥",
    title:"CRM Solution",
    text:"Manage customers, leads and relationships with intelligent CRM tools."
  },

  {
    icon:"💳",
    title:"Finance Management",
    text:"Control accounting, expenses and financial operations easily."
  },

  {
    icon:"📦",
    title:"Inventory Solution",
    text:"Track products, stock and supply chain operations in real time."
  },

  {
    icon:"📈",
    title:"Business Analytics",
    text:"Transform your data into powerful business decisions."
  },

  {
    icon:"🤖",
    title:"Briqona AI",
    text:"Use artificial intelligence to automate and improve workflows."
  },

];


function Solutions(){

return (

<main className="solutions-page">


<section className="solutions-hero">

<span>
BRIQONA OS SOLUTIONS
</span>


<h1>
Smart Solutions For
<em> Every Business</em>
</h1>


<p>
From customer management to finance and automation,
Briqona OS provides complete solutions designed
for modern organizations.
</p>


</section>




<section className="solutions-grid">


{solutions.map((item)=>(


<div 
className="solution-card"
key={item.title}
>


<div className="solution-icon">
{item.icon}
</div>


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


<a href="/register">
Explore Solution →
</a>


</div>


))}


</section>




<section className="solutions-cta">


<h2>
One Platform. Multiple Powerful Solutions.
</h2>


<p>
Connect every part of your business with Briqona OS.
</p>


<a href="/demo">
Book Demo →
</a>


</section>



</main>

);

}


export default Solutions;
