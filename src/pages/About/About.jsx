import "./About.css";

function About() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <span>ABOUT BRIQONA OS</span>

        <h1>
          Building The Future Of
          <br />
          <strong>Intelligent Business Operations</strong>
        </h1>

        <p>
          Briqona OS is an AI-powered Business Operating System designed
          to help modern companies automate workflows, manage operations,
          and make smarter decisions.
        </p>
      </section>


      <section className="about-story">

        <div>
          <h2>Our Story</h2>

          <p>
            Businesses today face complex challenges with disconnected
            systems, manual processes, and growing data needs.
          </p>

          <p>
            Briqona OS was created to bring everything together into one
            intelligent platform where teams can automate tasks, analyze
            information, and improve productivity.
          </p>

        </div>


        <div className="about-box">
          <h3>AI Powered Platform</h3>
          <p>
            One complete operating system for smarter business management.
          </p>
        </div>

      </section>



      <section className="mission">

        <div className="card">
          <h2>Our Mission</h2>
          <p>
            To empower businesses with intelligent automation,
            secure technology, and powerful tools that simplify
            everyday operations.
          </p>
        </div>


        <div className="card">
          <h2>Our Vision</h2>
          <p>
            To become a leading global business operating system
            that helps organizations grow faster and smarter.
          </p>
        </div>

      </section>



      <section className="what-we-do">

        <h2>What We Do</h2>

        <div className="grid">

          <div>
            <h3>Business Automation</h3>
            <p>
              Automate repetitive tasks and improve workflow efficiency.
            </p>
          </div>

          <div>
            <h3>AI Operations</h3>
            <p>
              Use artificial intelligence to optimize business decisions.
            </p>
          </div>

          <div>
            <h3>Data Intelligence</h3>
            <p>
              Convert business data into valuable insights.
            </p>
          </div>

          <div>
            <h3>Secure Platform</h3>
            <p>
              Enterprise-level security for modern organizations.
            </p>
          </div>

        </div>

      </section>



      <section className="why">

        <h2>Why Choose Briqona OS?</h2>

        <ul>
          <li>AI-powered business management</li>
          <li>Scalable enterprise solutions</li>
          <li>Smart workflow automation</li>
          <li>Secure and reliable technology</li>
        </ul>

      </section>



      <section className="about-cta">

        <h2>
          Build A Smarter Business With Briqona OS
        </h2>

        <p>
          Experience the future of intelligent business management.
        </p>

        <button>
          Start Free
        </button>

      </section>


    </main>
  );
}

export default About;
