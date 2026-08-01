import "./Features.css";


const featureList = [
  {
    icon: "📊",
    title: "Advanced Analytics",
    text: "Understand your business performance with powerful real-time insights.",
  },

  {
    icon: "🤖",
    title: "AI Automation",
    text: "Automate daily operations and improve team productivity.",
  },

  {
    icon: "👥",
    title: "Team Management",
    text: "Connect teams and manage workflows from one place.",
  },

  {
    icon: "💰",
    title: "Financial Management",
    text: "Track finances and improve business control.",
  },

  {
    icon: "📦",
    title: "Inventory Control",
    text: "Manage products, stock and operations efficiently.",
  },

  {
    icon: "🔐",
    title: "Enterprise Security",
    text: "Keep your business data protected with modern security.",
  },
];


function Features(){

  return (

    <main className="features-page">


      <section className="features-hero">

        <span>
          BRIQONA OS FEATURES
        </span>


        <h1>
          Powerful Features Built
          <em> For Modern Businesses</em>
        </h1>


        <p>
          Everything you need to manage, automate and grow
          your business from one intelligent platform.
        </p>

      </section>



      <section className="features-grid">


        {featureList.map((item)=>(

          <div
            className="feature-card"
            key={item.title}
          >

            <div className="feature-icon">
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




      <section className="features-cta">

        <h2>
          Everything Your Business Needs
        </h2>


        <p>
          Start using Briqona OS and experience smarter operations.
        </p>


        <a href="/register">
          Start Free →
        </a>


      </section>


    </main>

  );

}


export default Features;
