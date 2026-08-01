import "./Terms.css";

function Terms(){

const sections = [
{
title:"Acceptance Of Terms",
text:"By accessing Briqona OS services, you agree to follow these terms and conditions. If you do not agree with these terms, please do not use our services."
},
{
title:"Use Of Platform",
text:"Users must use Briqona OS responsibly and only for lawful business purposes. Misuse of the platform is not permitted."
},
{
title:"Account Responsibility",
text:"Users are responsible for maintaining account security and protecting login information."
},
{
title:"Subscriptions & Payments",
text:"Pricing, subscriptions, and payments are handled according to the selected service plan and applicable agreements."
},
{
title:"Intellectual Property",
text:"Briqona OS technology, design, branding, and software remain the property of Briqona OS."
},
{
title:"Service Availability",
text:"We continuously improve our platform but cannot guarantee uninterrupted availability at all times."
},
{
title:"Limitation Of Liability",
text:"Briqona OS is not responsible for indirect losses resulting from misuse or unauthorized access."
},
{
title:"Contact Information",
text:"For questions regarding these terms, please contact our support team."
}
];


return(

<main className="terms-page">


<section className="terms-hero">

<span>
BRIQONA OS TERMS
</span>

<h1>
Terms &
<br/>
<strong>Conditions</strong>
</h1>

<p>
Understand the rules and guidelines for using Briqona OS
services and technology solutions.
</p>

</section>




<section className="terms-content">

<h2>
Terms Of Service
</h2>

<p>
These Terms and Conditions explain the relationship between
Briqona OS and users of our platform.
</p>


<div className="terms-grid">

{
sections.map((item,index)=>(

<div className="terms-card" key={index}>

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




<section className="terms-cta">

<h2>
Questions About Our Terms?
</h2>

<p>
Our team is available to provide clarification.
</p>

<button>
Contact Us
</button>

</section>



</main>

);

}

export default Terms;
