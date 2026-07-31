import "./Pricing.css";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "For small teams getting started.",
    features: [
      "Business Dashboard",
      "Basic AI Insights",
      "Workflow Automation",
      "Email Support"
    ]
  },
  {
    name: "Growth",
    price: "$49",
    popular: true,
    description: "For growing businesses.",
    features: [
      "Everything in Starter",
      "Advanced Analytics",
      "AI Business Assistant",
      "Priority Support"
    ]
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations.",
    features: [
      "Unlimited Users",
      "Custom Solutions",
      "Advanced Security",
      "Dedicated Support"
    ]
  }
];


function Pricing() {

  return (

    <section className="pricing">

      <div className="container">


        <div className="pricing__heading">

          <span>
            PRICING
          </span>

          <h2>
            Simple Plans.
            <strong> Powerful Growth.</strong>
          </h2>

          <p>
            Choose the plan that fits your business needs.
          </p>

        </div>


        <div className="pricing__grid">


          {plans.map((plan)=>(

            <article
              className={`pricing-card ${
                plan.popular ? "pricing-card--popular" : ""
              }`}
              key={plan.name}
            >


              {plan.popular && (
                <div className="pricing-badge">
                  Most Popular
                </div>
              )}


              <h3>
                {plan.name}
              </h3>


              <div className="pricing-price">
                {plan.price}
                <small>
                  /month
                </small>
              </div>


              <p>
                {plan.description}
              </p>


              <ul>

                {plan.features.map((feature)=>(

                  <li key={feature}>
                    ✓ {feature}
                  </li>

                ))}

              </ul>


              <button>
                Buy Now →
              </button>


            </article>

          ))}


        </div>


      </div>

    </section>

  );

}


export default Pricing;
