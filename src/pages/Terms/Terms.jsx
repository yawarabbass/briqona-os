import "./Terms.css";


const terms = [
  {
    title: "Acceptance of Terms",
    text: "By using Briqona OS services, you agree to follow these terms and conditions."
  },

  {
    title: "Use of Platform",
    text: "Users must use the platform responsibly and only for lawful business activities."
  },

  {
    title: "Account Responsibility",
    text: "You are responsible for maintaining your account information and security credentials."
  },

  {
    title: "Service Availability",
    text: "We continuously improve our platform but cannot guarantee uninterrupted service at all times."
  },

  {
    title: "Data Usage",
    text: "Data is handled according to our privacy policy and security standards."
  },

];


function Terms(){

return (

<main className="terms-page">


<section className="terms-hero">

<span>
BRIQONA OS TERMS
</span>


<h1>
Terms &
<em> Conditions</em>
</h1>


<p>
Please review our terms to understand the rules,
responsibilities and guidelines for using Briqona OS.
</p>


</section>




<section className="terms-content">


{terms.map((item)=>(

<div
className="terms-box"
key={item.title}
>


<h2>
{item.title}
</h2>


<p>
{item.text}
</p>


</div>

))}


</section>




<section className="terms-cta">

<h2>
Need More Information?
</h2>


<p>
Our team is available to answer your questions.
</p>


<a href="/contact">
Contact Us →
</a>


</section>



</main>

);

}


export default Terms;
