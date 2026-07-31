import "./Solutions.css";

const solutions = [
  {
    icon: "⚡",
    title: "Business Automation",
    text: "Automate daily processes and improve productivity with AI."
  },
  {
    icon: "♙",
    title: "Sales & CRM",
    text: "Manage customers, leads and sales from one place."
  },
  {
    icon: "▣",
    title: "Finance Management",
    text: "Track revenue, expenses and financial performance."
  },
  {
    icon: "◈",
    title: "Operations",
    text: "Optimize your business operations with smart tools."
  },
  {
    icon: "◎",
    title: "Team Collaboration",
    text: "Connect your teams and manage projects efficiently."
  }
];


function Solutions() {

  return (

    <section className="solutions">

      <div className="container">

        <div className="solutions__heading">

          <span>
            SOLUTIONS
          </span>

          <h2>
            Built For Every
            <strong> Business Need</strong>
          </h2>

          <p>
            Powerful tools designed to help your
            business operate smarter and grow faster.
          </p>

        </div>


        <div className="solutions__grid">

          {solutions.map((item) => (

            <article
              className="solution-card"
              key={item.title}
            >

              <div className="solution-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

              <a href="#">
                Learn More →
              </a>

            </article>

          ))}

        </div>


      </div>

    </section>

  );
}


export default Solutions;
