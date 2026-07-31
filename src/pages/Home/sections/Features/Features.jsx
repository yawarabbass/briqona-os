import "./Features.css";

const features = [
  {
    icon: "✦",
    title: "AI Automation",
    text: "Automate repetitive tasks and let AI handle your business workflows."
  },
  {
    icon: "◈",
    title: "Smart Analytics",
    text: "Understand your business with real-time insights and reports."
  },
  {
    icon: "♙",
    title: "CRM Management",
    text: "Manage customers, leads and relationships from one platform."
  },
  {
    icon: "⚡",
    title: "Workflow Engine",
    text: "Create powerful workflows to improve productivity."
  },
  {
    icon: "🔗",
    title: "Integrations",
    text: "Connect your favorite business tools easily."
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    text: "Keep your business data safe with modern security."
  }
];


function Features() {
  return (
    <section className="features">

      <div className="container">

        <div className="features-heading">

          <span>
            POWERFUL FEATURES
          </span>

          <h2>
            Everything Your Business
            <br />
            Needs To <strong>Grow</strong>
          </h2>

          <p>
            One intelligent platform to automate,
            analyze and scale your business.
          </p>

        </div>


        <div className="features-grid">

          {features.map((item) => (

            <article
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

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;
