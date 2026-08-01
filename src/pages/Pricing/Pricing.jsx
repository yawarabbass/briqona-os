import "./Pricing.css";

const plans = [
  {
    name: "Starter",
    price: "$5",
    text: "For small businesses getting started",
    features: [
      "Basic Business Dashboard",
      "AI Automation Tools",
      "Customer Management",
      "Email Support",
    ],
  },
  {
    name: "Business",
    price: "$15",
    popular: true,
    text: "Best choice for growing companies",
    features: [
      "Advanced Dashboard",
      "Smart Analytics",
      "CRM Management",
      "Workflow Automation",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "$30",
    text: "For large organizations",
    features: [
      "All Business Features",
      "Enterprise Security",
      "Advanced Integrations",
      "Dedicated Support",
    ],
  },
];


function Pricing(){

  return (

    <main className="pricing-page">

      <section className="pricing-hero">

        <span>
          SIMPLE & TRANSPARENT PRICING
        </span>

        <h1>
          Choose Your <em>Briqona OS</em> Plan
        </h1>

        <p>
          Powerful business operating system plans designed
          to help your business grow faster.
        </p>

      </section>



      <section className="pricing-cards">

        {
          plans.map((plan)=>(

            <div
              className={
                plan.popular
                ? "pricing-card popular"
                : "pricing-card"
              }
              key={plan.name}
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
                <small>
                  /month
                </small>
              </h3>


              <p>
                {plan.text}
              </p>


              <ul>

                {
                  plan.features.map((item)=>(

                    <li key={item}>
                      ✓ {item}
                    </li>

                  ))
                }

              </ul>


              <a href="/register">
                Start Now →
              </a>


            </div>

          ))
        }

      </section>



      <section className="payment-trust">

        <h2>
          Secure Payments
        </h2>

        <p>
          Protected payments with trusted methods
        </p>


        <div className="payment-box">

          <span>VISA</span>
          <span>MasterCard</span>
          <span>JazzCash</span>
          <span>Easypaisa</span>

        </div>


      </section>


    </main>

  );

}


export default Pricing;
