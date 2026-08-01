import "./Platform.css";


const features = [
  {
    title: "Unified Business Platform",
    text: "Manage your complete business operations from one powerful system.",
    icon: "🌐",
  },
  {
    title: "Smart Automation",
    text: "Automate workflows and reduce manual tasks with intelligent tools.",
    icon: "⚡",
  },
  {
    title: "Real-Time Insights",
    text: "Access meaningful analytics to make faster business decisions.",
    icon: "📊",
  },
  {
    title: "AI Powered Operations",
    text: "Use modern AI capabilities to improve productivity and growth.",
    icon: "🤖",
  },
];


function Platform(){

  return (

    <main className="platform-page">


      <section className="platform-hero">

        <span>
          BRIQONA OS PLATFORM
        </span>

        <h1>
          One Intelligent Platform
          <em> For Your Entire Business</em>
        </h1>


        <p>
          Briqona OS connects your teams, processes,
          and data into one powerful Business Operating System
          built for modern companies.
        </p>


      </section>



      <section className="platform-features">


        {features.map((item)=>(

          <div
            className="platform-card"
            key={item.title}
          >

            <div className="platform-icon">
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


      </section>




      <section className="platform-cta">


        <h2>
          Build A Smarter Business Today
        </h2>


        <p>
          Experience the future of business management with Briqona OS.
        </p>


        <a href="/register">
          Start Free →
        </a>


      </section>



    </main>

  );

}


export default Platform;
