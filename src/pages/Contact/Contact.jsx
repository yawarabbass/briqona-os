import "./Contact.css";

function Contact() {

  return (

    <main className="contact-page">


      <section className="contact-hero">

        <span>
          CONTACT BRIQONA OS
        </span>

        <h1>
          Let's Build A
          <br />
          <strong>Smarter Business Together</strong>
        </h1>

        <p>
          Have questions about Briqona OS? Our team is ready to
          help you discover the right solution for your business.
        </p>

      </section>




      <section className="contact-content">


        <div className="contact-info">

          <h2>
            Get In Touch
          </h2>

          <p>
            Connect with our team for product information,
            business solutions, and support.
          </p>


          <div className="info-box">

            <h3>
              Business Email
            </h3>

            <p>
              contact@briqona.com
            </p>

          </div>


          <div className="info-box">

            <h3>
              Support
            </h3>

            <p>
              Our team is available to help with your questions.
            </p>

          </div>


        </div>



        <div className="contact-form">


          <h2>
            Send A Message
          </h2>


          <input 
          type="text"
          placeholder="Your Name"
          />


          <input 
          type="email"
          placeholder="Your Email"
          />


          <input 
          type="text"
          placeholder="Company Name"
          />


          <textarea
          placeholder="Your Message"
          rows="5"
          ></textarea>


          <button>
            Submit Message
          </button>


        </div>


      </section>




      <section className="contact-cta">

        <h2>
          Ready To Transform Your Business?
        </h2>

        <p>
          Start your journey with Briqona OS today.
        </p>

        <button>
          Start Free
        </button>

      </section>



    </main>

  );

}

export default Contact;
