import { useState } from "react";
import "./Register.css";

const plans = [
  {
    name: "Starter",
    price: "$5/month",
  },
  {
    name: "Business",
    price: "$15/month",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$30/month",
  },
];


function Register() {

  const [selectedPlan, setSelectedPlan] = useState("Business");


  return (

    <main className="register-page">


      <div className="register-card">


        <span className="register-tag">
          CREATE YOUR ACCOUNT
        </span>


        <h1>
          Start Your
          <strong> Briqona OS Journey</strong>
        </h1>


        <p>
          Select your plan and create your business account.
        </p>



        <div className="plan-select">


          {plans.map((plan)=>(

            <button
              type="button"
              key={plan.name}
              className={
                selectedPlan === plan.name
                ? "active"
                : ""
              }
              onClick={() =>
                setSelectedPlan(plan.name)
              }
            >

              {plan.popular && (
                <small>
                  Popular
                </small>
              )}

              <b>
                {plan.name}
              </b>

              <span>
                {plan.price}
              </span>


            </button>

          ))}


        </div>



        <form>


          <input
            type="text"
            placeholder="Full Name"
          />


          <input
            type="text"
            placeholder="Company Name"
          />


          <input
            type="email"
            placeholder="Business Email"
          />


          <input
            type="password"
            placeholder="Create Password"
          />



          <h3>
            Payment Method
          </h3>



          <div className="payments">


            <label>
              <input type="radio" name="pay" />
              Visa / Mastercard
            </label>


            <label>
              <input type="radio" name="pay" />
              JazzCash
            </label>


            <label>
              <input type="radio" name="pay" />
              Easypaisa
            </label>


          </div>



          <button
            className="register-submit"
          >
            Create Account & Continue →
          </button>



        </form>


      </div>


    </main>

  );

}


export default Register;
