import "./About.css";

const values = [
  {
    title: "Innovation",
    text: "Building intelligent solutions that help businesses work smarter.",
    icon: "🚀",
  },
  {
    title: "Simplicity",
    text: "Making complex business operations simple and easy to manage.",
    icon: "⚡",
  },
  {
    title: "Trust",
    text: "Security, reliability, and transparency are at the core of everything we build.",
    icon: "🔒",
  },
  {
    title: "Growth",
    text: "Helping businesses scale faster with powerful technology.",
    icon: "📈",
  },
];


function About(){

  return (

    <main className="about-page">


      <section className="about-hero">

        <span>
          ABOUT BRIQONA OS
        </span>

        <h1>
          The Future of
          <em> Business Operations </em>
          Starts Here
        </h1>

        <p>
          Briqona OS is a next-generation Business Operating System
          designed to connect your teams, automate workflows, and help
          businesses make smarter decisions with intelligent technology.
        </p>

      </section>



      <section className="about-section">

        <div className="about-box">

          <h2>
            Our Mission
          </h2>

          <p>
            Our mission is to remove complexity from business management.
            We create powerful tools that allow companies to focus on
            growth while Briqona OS manages automation, operations,
            and insights.
          </p>

        </div>



        <div className="about-box">

          <h2>
            Our Vision
          </h2>

          <p>
            We believe the future belongs to connected businesses where
            people, processes, and technology work together seamlessly.
          </p>

        </div>


      </section>



      <section className="why-section">

        <h2>
          Why Choose Briqona OS?
        </h2>


        <div className="value-grid">

          {values.map((item)=>(

            <div className="value-card" key={item.title}>

              <div className="value-icon">
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



      <section className="about-cta">

        <h2>
          Ready to Transform Your Business?
        </h2>

        <p>
          Start building a smarter, faster, and more connected business today.
        </p>

        <div>

          <a href="/register">
            Start Free →
          </a>

          <a href="/demo">
            Book Demo
          </a>

        </div>


      </section>


    </main>

  );

}


export default About;
