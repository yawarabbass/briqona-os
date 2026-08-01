import "./Industries.css";


const industries = [
  {
    icon: "🏥",
    title: "Healthcare",
    text: "Manage healthcare operations, patient workflows and business processes with smarter digital tools.",
  },

  {
    icon: "🏗️",
    title: "Construction",
    text: "Improve project management, teams collaboration and operational efficiency.",
  },

  {
    icon: "🏢",
    title: "Real Estate",
    text: "Manage properties, customers and business activities from one intelligent platform.",
  },

  {
    icon: "🛒",
    title: "Retail & E-Commerce",
    text: "Optimize inventory, sales and customer experiences with connected solutions.",
  },

  {
    icon: "🎓",
    title: "Education",
    text: "Simplify administration, communication and management for educational organizations.",
  },

  {
    icon: "💼",
    title: "Professional Services",
    text: "Empower service businesses with automation and powerful insights.",
  },
];


function Industries(){

  return (

    <main className="industries-page">


      <section className="industries-hero">

        <span>
          INDUSTRIES WE SERVE
        </span>


        <h1>
          Built For Every
          <em> Modern Industry</em>
        </h1>


        <p>
          Briqona OS adapts to different industries,
          helping organizations automate operations,
          improve efficiency and scale faster.
        </p>


      </section>




      <section className="industries-grid">


        {industries.map((item)=>(

          <div
            className="industry-card"
            key={item.title}
          >

            <div className="industry-icon">
              {item.icon}
            </div>


            <h3>
              {item.title}
            </h3>


            <p>
              {item.text}
            </p>


            <a href="/register">
              Explore →
            </a>


          </div>

        ))}


      </section>




      <section className="industries-cta">

        <h2>
          Your Industry. One Intelligent System.
        </h2>


        <p>
          Start managing your business smarter with Briqona OS.
        </p>


        <a href="/demo">
          Book Demo →
        </a>


      </section>


    </main>

  );

}


export default Industries;
