import "./Features.css";

function Features() {

  const features = [
    {
      title: "AI Automation",
      text: "Automate repetitive tasks, improve workflows, and increase business productivity with intelligent automation."
    },
    {
      title: "Workflow Management",
      text: "Create efficient processes and manage daily operations from one connected platform."
    },
    {
      title: "Business Analytics",
      text: "Turn business data into meaningful insights and make smarter decisions."
    },
    {
      title: "Team Collaboration",
      text: "Help teams work together with connected tools and organized business operations."
    },
    {
      title: "Data Management",
      text: "Manage important business information securely with centralized data control."
    },
    {
      title: "Smart Integrations",
      text: "Connect your favorite tools and build a flexible business ecosystem."
    }
  ];


  return (

    <main className="features-page">


      <section className="features-hero">

        <span>
          BRIQONA OS FEATURES
        </span>

        <h1>
          Powerful Features For
          <br />
          <strong>Smarter Business Growth</strong>
        </h1>

        <p>
          Briqona OS combines artificial intelligence, automation,
          analytics, and secure business tools into one powerful
          operating system.
        </p>

      </section>



      <section className="features-section">

        <h2>
          Everything You Need In One Platform
        </h2>


        <div className="features-grid">

          {
            features.map((item,index)=>(

              <div 
              className="feature-card"
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




      <section className="automation-section">

        <div>

          <h2>
            Automate. Analyze. Grow.
          </h2>

          <p>
            Reduce manual work, improve efficiency, and give your
            team powerful tools to focus on growth.
          </p>

        </div>


        <div className="feature-box">

          <h3>
            Intelligent Operations
          </h3>

          <p>
            A connected system designed for modern businesses.
          </p>

        </div>

      </section>




      <section className="security-feature">

        <h2>
          Built With Security In Mind
        </h2>

        <p>
          Protect your business operations with reliable technology,
          secure access controls, and responsible data practices.
        </p>

      </section>




      <section className="features-cta">

        <h2>
          Ready To Transform Your Business?
        </h2>

        <p>
          Start using Briqona OS today.
        </p>

        <button>
          Start Free
        </button>

      </section>


    </main>

  );

}

export default Features;
