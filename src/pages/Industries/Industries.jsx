import "./Industries.css";

function Industries() {

  const industries = [
    {
      title: "Healthcare",
      text: "Manage healthcare operations with intelligent workflows, secure data management, and connected business tools."
    },
    {
      title: "Retail",
      text: "Optimize retail operations, customer management, and business performance with smart automation."
    },
    {
      title: "Real Estate",
      text: "Improve property management, client relationships, and operational efficiency with powerful solutions."
    },
    {
      title: "Education",
      text: "Support modern education systems with organized data, automation, and better collaboration."
    },
    {
      title: "Construction",
      text: "Manage projects, teams, and workflows with a centralized business operating system."
    },
    {
      title: "Professional Services",
      text: "Help service-based businesses improve productivity and deliver better customer experiences."
    }
  ];


  return (

    <main className="industries-page">


      <section className="industries-hero">

        <span>
          BRIQONA OS INDUSTRIES
        </span>

        <h1>
          Intelligent Solutions
          <br />
          <strong>For Every Industry</strong>
        </h1>

        <p>
          Briqona OS helps organizations across different industries
          automate operations, manage data, and build smarter workflows.
        </p>

      </section>




      <section className="industries-section">

        <h2>
          Industries We Serve
        </h2>


        <div className="industries-grid">

          {
            industries.map((item,index)=>(

              <div 
              className="industry-card"
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




      <section className="industry-benefits">

        <div>

          <h2>
            Built For Modern Business Challenges
          </h2>

          <p>
            Every organization has unique needs. Briqona OS provides
            flexible tools that adapt to different industries and
            business models.
          </p>

        </div>


        <div className="industry-box">

          <h3>
            One Platform. Multiple Industries.
          </h3>

          <p>
            Connect teams, automate processes, and improve productivity.
          </p>

        </div>


      </section>




      <section className="industry-cta">

        <h2>
          Transform Your Industry With Briqona OS
        </h2>

        <p>
          Discover smarter ways to manage your business operations.
        </p>


        <button>
          Start Free
        </button>


      </section>


    </main>

  );

}

export default Industries;
