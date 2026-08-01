import "./Security.css";

function Security() {

  const securityFeatures = [
    {
      icon: "🔐",
      title: "Data Encryption",
      text: "Business information is protected with modern security practices and encrypted data protection."
    },
    {
      icon: "🛡️",
      title: "Access Control",
      text: "Manage user permissions and keep sensitive business operations secure."
    },
    {
      icon: "⚡",
      title: "Secure Authentication",
      text: "Strong authentication systems help protect accounts and prevent unauthorized access."
    },
    {
      icon: "📊",
      title: "Continuous Monitoring",
      text: "Monitor systems and operations to maintain reliability and security."
    }
  ];


  return (
    <main className="security-page">


      <section className="security-hero">

        <span>BRIQONA OS SECURITY</span>

        <h1>
          Secure Intelligence For
          <br />
          <strong>Modern Businesses</strong>
        </h1>

        <p>
          Briqona OS provides a secure AI-powered business operating
          system designed to protect data, improve control, and support
          reliable business operations.
        </p>

      </section>



      <section className="security-trust">

        <div>
          <h2>
            Enterprise Grade Security
          </h2>

          <p>
            Security is built into every part of Briqona OS. 
            Our platform helps businesses manage operations with
            confidence through secure technology and responsible
            data practices.
          </p>

        </div>


        <div className="security-box">

          <h3>
            Your Business. Protected.
          </h3>

          <p>
            Reliable infrastructure designed for growing organizations.
          </p>

        </div>

      </section>



      <section className="security-features">

        <h2>
          Security Features
        </h2>


        <div className="security-grid">

          {securityFeatures.map((item,index)=>(
            <div className="security-card" key={index}>

              <div className="icon">
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

        </div>

      </section>




      <section className="security-compliance">

        <h2>
          Privacy & Compliance
        </h2>

        <p>
          Briqona OS follows responsible security practices to help
          businesses maintain control over their information and
          digital operations.
        </p>

      </section>




      <section className="security-cta">

        <h2>
          Build A More Secure Business Today
        </h2>

        <p>
          Experience intelligent business management with confidence.
        </p>


        <button>
          Start Free
        </button>

      </section>


    </main>
  );
}


export default Security;
