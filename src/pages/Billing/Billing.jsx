/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Billing
|--------------------------------------------------------------------------
*/

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  User,
  Mail,
  Phone,
  Globe,
  MapPin,
  Map,
  Landmark,
  CreditCard,
  ArrowRight
} from "lucide-react";

import "./Billing.css";

export default function Billing() {

  const [registerData, setRegisterData] = useState({});

  const [billing, setBilling] = useState({
    company: "",
    fullName: "",
    email: "",
    phone: "",
    country: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    taxNumber: ""
  });

  const [plan, setPlan] = useState({
    name: "Starter",
    price: "$5",
    billing: "Monthly"
  });

  useEffect(() => {

    const register =
      JSON.parse(localStorage.getItem("registerData")) || {};

    const selectedPlan =
      JSON.parse(localStorage.getItem("selectedPlan")) || {
        name: "Starter",
        price: "$5",
        billing: "Monthly"
      };

    setRegisterData(register);

    setPlan(selectedPlan);

    setBilling({
      company: register.company || "",
      fullName: register.fullName || "",
      email: register.email || "",
      phone: register.phone || "",
      country: register.country || "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      postalCode: "",
      taxNumber: ""
    });

  }, []);

  function handleChange(e){

    const {name,value}=e.target;

    setBilling(prev=>({

      ...prev,

      [name]:value

    }));

  }

  function handleSubmit(e){

    e.preventDefault();

    localStorage.setItem(
      "billingData",
      JSON.stringify(billing)
    );

    window.location.href="/payment";

  }

  return(

    <section className="billing-page">

      <div className="billing-container">

        <motion.div
          className="billing-left"
          initial={{opacity:0,x:-40}}
          animate={{opacity:1,x:0}}
          transition={{duration:.6}}
        >

          <div className="page-title">

            <h1>Billing Information</h1>

            <p>

              Complete your billing information
              before payment.

            </p>

          </div>

          <form
            className="billing-form"
            onSubmit={handleSubmit}
          >

            <div className="input-group">

              <Building2 size={18}/>

              <input
                name="company"
                value={billing.company}
                onChange={handleChange}
                placeholder="Company Name"
                required
              />

            </div>

            <div className="input-group">

              <User size={18}/>

              <input
                name="fullName"
                value={billing.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />

            </div>

            <div className="input-group">

              <Mail size={18}/>

              <input
                type="email"
                name="email"
                value={billing.email}
                onChange={handleChange}
                placeholder="Business Email"
                required
              />

            </div>

            <div className="input-group">

              <Phone size={18}/>

              <input
                name="phone"
                value={billing.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />

            </div>

            <div className="input-group">

              <Globe size={18}/>

              <input
                name="country"
                value={billing.country}
                onChange={handleChange}
                placeholder="Country"
                required
              />

            </div>
                   <div className="input-group">

              <MapPin size={18}/>

              <input
                name="address1"
                value={billing.address1}
                onChange={handleChange}
                placeholder="Address Line 1"
                required
              />

            </div>

            <div className="input-group">

              <MapPin size={18}/>

              <input
                name="address2"
                value={billing.address2}
                onChange={handleChange}
                placeholder="Address Line 2 (Optional)"
              />

            </div>

            <div className="input-group">

              <Map size={18}/>

              <input
                name="city"
                value={billing.city}
                onChange={handleChange}
                placeholder="City"
                required
              />

            </div>

            <div className="input-group">

              <Landmark size={18}/>

              <input
                name="state"
                value={billing.state}
                onChange={handleChange}
                placeholder="State / Province"
                required
              />

            </div>

            <div className="input-group">

              <MapPin size={18}/>

              <input
                name="postalCode"
                value={billing.postalCode}
                onChange={handleChange}
                placeholder="Postal Code"
                required
              />

            </div>

            <div className="input-group">

              <CreditCard size={18}/>

              <input
                name="taxNumber"
                value={billing.taxNumber}
                onChange={handleChange}
                placeholder="Tax / VAT Number (Optional)"
              />

            </div>

            <button
              type="submit"
              className="billing-btn"
            >

              Continue To Payment

              <ArrowRight size={18}/>

            </button>

          </form>

        </motion.div>

        <motion.div
          className="billing-right"
          initial={{opacity:0,x:40}}
          animate={{opacity:1,x:0}}
          transition={{duration:.6}}
        >

          <div className="summary-card">

            <span className="summary-badge">

              Order Summary

            </span>

            <h2>

              Subscription Details

            </h2>

            <div className="summary-row">

              <span>Selected Plan</span>

              <strong>{plan.name}</strong>

            </div>

            <div className="summary-row">

              <span>Billing</span>

              <strong>{plan.billing}</strong>

            </div>

            <div className="summary-row">

              <span>Workspace</span>

              <strong>1 Organization</strong>

            </div>

            <div className="summary-row">

              <span>Users</span>

              <strong>Unlimited</strong>

            </div>

            <hr />

            <div className="summary-total">

              <span>Total</span>

              <h1>{plan.price}</h1>

            </div>

            <p className="summary-note">

              Your account will be activated
              immediately after successful
              payment verification.

            </p>

          </div>

        </motion.div>

      </div>

    </section>

  );

}     
