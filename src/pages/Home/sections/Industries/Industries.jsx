import "./Industries.css";

const industries = [
  {
    icon: "🏥",
    title: "Healthcare",
    text: "Manage healthcare operations with intelligent solutions."
  },
  {
    icon: "🛒",
    title: "Retail & E-Commerce",
    text: "Optimize sales, customers and inventory management."
  },
  {
    icon: "💳",
    title: "Finance",
    text: "Improve financial control with real-time insights."
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    text: "Streamline production and business workflows."
  },
  {
    icon: "🏢",
    title: "Real Estate",
    text: "Manage properties, clients and operations efficiently."
  },
  {
    icon: "💼",
    title: "Professional Services",
    text: "Grow your service business with smart automation."
  }
];


function Industries() {

  return (

    <section className="industries">

      <div className="container">


        <div className="industries__heading">

          <span>
            INDUSTRIES
          </span>

          <h2>
            Solutions For Every
            <strong> Industry</strong>
          </h2>

          <p>
            Flexible tools designed for businesses
            across different sectors.
          </p>

        </div>


        <div className="industries__grid">

          {industries.map((item) => (

            <article
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

              <a href="#">
                Explore →
              </a>

            </article>

          ))}

        </div>


      </div>

    </section>

  );

}


export default Industries;
