import { useState } from "react";
import "./Register.css";

const plans = [
  {
    name: "Starter",
    price: "$5 / month",
    desc: "For individuals & small teams",
  },
  {
    name: "Business",
    price: "$15 / month",
    desc: "For growing companies",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$30 / month",
    desc: "For advanced businesses",
  },
];


function Register() {

  const [selectedPlan, setSelectedPlan] = useState("Business");


  return (

    <main className="register-page">


      <div className="register-card">


        <span className="register-tag">
          CREATE YOUR BRIQONA OS ACCOUNT
        </span>


        <h1>
          Start Your
          <strong> Business Journey</strong>
        </h1>


        <p>
          Choose your plan, create your account and
          start managing your business smarter.
        </p>



        <h3>
          Select Your Plan
        </h3>


        <div className="plan-select">

          {plans.map((plan)=>(

            <button
              key={plan.name}
              type="button"
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
                  Most Popular
                </small>
              )}

              <b>
                {plan.name}
              </b>

              <strong>
                {plan.price}
              </strong>

              <span>
                {plan.desc}
              </span>

            </button>

          ))}

        </div>



        <form>


          <h3>
            Account Information
          </h3>


          <input
            placeholder="Full Name"
          />


          <input
            placeholder="Job Title / Role"
          />


          <input
            placeholder="Business Email"
            type="email"
          />


          <input
            placeholder="Mobile Number"
            type="tel"
          />



          <h3>
            Company Information
          </h3>


          <input
            placeholder="Company Name"
          />


          <input
            placeholder="Website (Optional)"
          />


          <select>

            <option>
              Select Industry
            </option>

            <option>
              Healthcare
            </option>

            <option>
              Retail & E-commerce
            </option>

            <option>
              Finance
            </option>

            <option>
              Technology
            </option>

            <option>
              Manufacturing
            </option>

            <option>
              Other / Not Listed
            </option>

          </select>



          <input
            placeholder="Country"
          />


          <input
            placeholder="Business Address (Optional)"
          />



          <h3>
            Security
          </h3>


          <input
            placeholder="Create Password"
            type="password"
          />


          <input
            placeholder="Confirm Password"
            type="password"
          />



          <h3>
            Secure Payment Method
          </h3>


          <div className="payments">

            <label>
              💳 Visa / Mastercard
            </label>


            <label>
              🟢 JazzCash
            </label>


            <label>
              🟢 Easypaisa
            </label>

          </div>



          <div className="support-box">

            <b>
              Don't have online payment?
            </b>

            <p>
              Contact our support team and we
              will help you complete your subscription.
            </p>

            <a href="#">
              Talk to Support →
            </a>

          </div>



          <div className="security-box">

            🔒 SSL Encrypted <br />

            🛡 Secure Payments <br />

            ⚡ Account Activation After Payment

          </div>



          <label className="terms">

            <input type="checkbox" />

            I agree to Terms & Privacy Policy

          </label>



          <button className="register-submit">

            Create Account & Secure Checkout →

          </button>



        </form>


      </div>


    </main>

  );

}


export default Register;
