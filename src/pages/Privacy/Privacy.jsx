import "./Privacy.css";

function Privacy() {

  const sections = [
    {
      title: "Information We Collect",
      text: "Briqona OS may collect information required to provide, improve, and secure our business operating platform. This may include account details, business information, and usage data."
    },
    {
      title: "How We Use Information",
      text: "We use information to improve platform performance, deliver services, enhance user experience, and maintain secure business operations."
    },
    {
      title: "Data Protection",
      text: "We follow responsible security practices to protect business information and help keep customer data safe."
    },
    {
      title: "Cookies & Analytics",
      text: "We may use cookies and analytics technologies to understand platform usage and improve our services."
    }
  ];


  return (

    <main className="privacy-page">


      <section className="privacy-hero">

        <span>
          BRIQONA OS PRIVACY
        </span>

        <h1>
          Your Data.
          <br />
          <strong>Your Control.</strong>
        </h1>

        <p>
          Briqona OS respects your privacy and is committed to
          protecting business information through responsible
          data practices and secure technology.
        </p>

      </section>



      <section className="privacy-content">

        <h2>
          Privacy Policy
        </h2>

        <p>
          This Privacy Policy explains how Briqona OS collects,
          uses, and protects information when you use our platform
          and services.
        </p>


        <div className="privacy-grid">

          {
            sections.map((item,index)=>(

              <div 
              className="privacy-card"
              key={index}
              >

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




      <section className="privacy-rights">

        <h2>
          Your Privacy Rights
        </h2>

        <p>
          Users have the right to understand how their information
          is handled, request updates, and manage their personal data
          according to applicable regulations.
        </p>


      </section>




      <section className="privacy-cta">

        <h2>
          Trust Briqona OS With Confidence
        </h2>

        <p>
          Secure technology designed for modern businesses.
        </p>

        <button>
          Start Free
        </button>

      </section>


    </main>

  );

}


export default Privacy;
