import "./Pricing.css";

function Pricing() {

  const plans = [
    {
      name: "Starter",
      price: "$19",
      description: "Perfect for small teams starting with digital business management.",
      features: [
        "Basic Business Tools",
        "Workflow Management",
        "Essential Analytics",
        "Email Support"
      ]
    },

    {
      name: "Professional",
      price: "$49",
      description: "Powerful tools for growing businesses that need automation.",
      features: [
        "AI Automation",
        "Advanced Analytics",
        "Team Collaboration",
        "Priority Support",
        "Business Integrations"
      ],
      popular:true
    },

    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced solutions for large organizations and complex operations.",
      features: [
        "Enterprise Security",
        "Custom Solutions",
        "Dedicated Support",
        "Advanced Integrations"
      ]
    }
  ];


  return (

    <main className="pricing-page">


      <section className="pricing-hero">

        <span>
          BRIQONA OS PRICING
        </span>

        <h1>
          Flexible Plans For
          <br />
          <strong>Every Growing Business</strong>
        </h1>

        <p>
          Choose a plan that fits your business needs and scale
          with powerful AI-driven tools and automation.
        </p>

      </section>




      <section className="pricing-section">


        <div className="pricing-grid">


          {
            plans.map((plan,index)=>(

              <div 
              className={`price-card ${plan.popular ? "popular":""}`}
              key={index}
              >

                {
                  plan.popular &&
                  <div className="badge">
                    Most Popular
                  </div>
                }


                <h2>
                  {plan.name}
                </h2>


                <h3>
                  {plan.price}
                  {
                    plan.price !== "Custom" &&
                    <small>/month</small>
                  }
                </h3>


                <p>
                  {plan.description}
                </p>


                <ul>

                {
                  plan.features.map((feature,i)=>(

                    <li key={i}>
                      ✓ {feature}
                    </li>

                  ))
                }

                </ul>


                <button>
                  Get Started
                </button>


              </div>


            ))
          }


        </div>


      </section>




      <section className="pricing-benefits">

        <h2>
          Simple, Transparent & Scalable
        </h2>

        <p>
          Briqona OS pricing is designed to support businesses
          from startups to enterprise organizations with flexible
          solutions.
        </p>

      </section>




      <section className="pricing-cta">

        <h2>
          Ready To Grow Your Business?
        </h2>

        <p>
          Start your journey with Briqona OS today.
        </p>

        <button>
          Start Free
        </button>

      </section>



    </main>

  );

}

export default Pricing;
