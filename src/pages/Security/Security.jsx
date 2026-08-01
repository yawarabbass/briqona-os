import "./Security.css";


const securityFeatures = [
  {
    icon:"🔒",
    title:"Data Protection",
    text:"Your business information is protected with modern security practices."
  },

  {
    icon:"🛡️",
    title:"Enterprise Security",
    text:"Built with security standards designed for growing organizations."
  },

  {
    icon:"👤",
    title:"Access Control",
    text:"Manage user permissions and keep sensitive information secure."
  },

  {
    icon:"☁️",
    title:"Secure Cloud",
    text:"Reliable cloud infrastructure for safe and scalable operations."
  },

];


function Security(){

return (

<main className="security-page">


<section className="security-hero">

<span>
BRIQONA OS SECURITY
</span>


<h1>
Security You Can
<em> Trust</em>
</h1>


<p>
Your business data deserves the highest level of protection.
Briqona OS is designed with security, reliability and privacy
at its core.
</p>


</section>




<section className="security-grid">


{securityFeatures.map((item)=>(

<div 
className="security-card"
key={item.title}
>

<div className="security-icon">
{item.icon}
</div>


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


</div>

))}


</section>




<section className="security-cta">


<h2>
Your Business. Protected Always.
</h2>


<p>
Operate confidently with a secure business operating system.
</p>


<a href="/contact">
Contact Security Team →
</a>


</section>



</main>

);

}


export default Security;
