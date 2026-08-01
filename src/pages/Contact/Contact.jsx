import "./Contact.css";

const contactCards = [
  {
    icon: "📧",
    title: "Sales Inquiry",
    text: "For pricing, packages and business solutions.",
    email: "sales@briqona.com",
  },

  {
    icon: "🛠",
    title: "Support Center",
    text: "Need help? Our team is ready to assist you.",
    email: "support@briqona.com",
  },

  {
    icon: "🤝",
    title: "Partnership",
    text: "Interested in growing with Briqona OS?",
    email: "partners@briqona.com",
  },
];


function Contact(){

  return (

    <main className="contact-page">


      <section className="contact-hero">

        <span>
          CONTACT BRIQONA OS
        </span>

        <h1>
          Let's Build The Future Of
          <em> Your Business </em>
          Together
        </h1>

        <p>
          Have questions about Briqona OS?
          Our team is ready to help you explore smarter
          ways to manage, automate and grow your business.
        </p>

      </section>



      <section className="contact-cards">

        {contactCards.map((card)=>(

          <div className="contact-card" key={card.title}>

            <div className="contact-icon">
              {card.icon}
            </div>

            <h3>
              {card.title}
            </h3>

            <p>
              {card.text}
            </p>

            <a href={`mailto:${card.email}`}>
              {card.email}
            </a>

          </div>

        ))}

      </section>




      <section className="contact-main">


        <div className="contact-form-box">

          <h2>
            Send Us A Message
          </h2>


          <form>

            <input
              type="text"
              placeholder="Full Name"
            />


            <input
              type="email"
              placeholder="Work Email"
            />


            <input
              type="tel"
              placeholder="Phone Number"
            />


            <input
              type="text"
              placeholder="Company Name"
            />


            <select>

              <option>
                Select Industry
              </option>

              <option>
                Healthcare
              </option>

              <option>
                Construction
              </option>

              <option>
                Real Estate
              </option>

              <option>
                Retail & E-commerce
              </option>

              <option>
                Education
              </option>

              <option>
                Finance
              </option>

              <option>
                Other
              </option>

            </select>


            <input
              type="text"
              placeholder="Subject"
            />


            <textarea
              placeholder="Your Message"
            />


            <button>
              Send Message →
            </button>


          </form>

        </div>




        <div className="contact-info">


          <h2>
            Our Headquarters
          </h2>


          <p>
            Briqona OS
          </p>


          <p>
            Shahrah-e-Faisal,
            Near Nursery,
            Karachi, Pakistan
          </p>



          <div className="trust-box">

            <h3>
              Why Contact Us?
            </h3>

            <p>
              🔒 Secure Communication
            </p>

            <p>
              ⚡ Fast Response
            </p>

            <p>
              🌎 Business Support
            </p>

            <p>
              🤖 AI Powered Solutions
            </p>

          </div>


        </div>


      </section>




      <section className="contact-cta">

        <h2>
          Ready To Transform Your Operations?
        </h2>

        <p>
          Start your journey with Briqona OS today.
        </p>


        <a href="/register">
          Start Free →
        </a>


        <a href="/demo">
          Book Demo
        </a>


      </section>



    </main>

  );

}


export default Contact;
