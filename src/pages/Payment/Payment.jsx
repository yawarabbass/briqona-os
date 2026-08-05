/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Payment
|--------------------------------------------------------------------------
*/

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Landmark,
  Wallet,
  ShieldCheck,
  Lock,
  ArrowRight,
  CheckCircle
} from "lucide-react";

import "./Payment.css";

export default function Payment() {

  const [plan, setPlan] = useState({
    name: "Starter",
    price: "$5",
    billing: "Monthly"
  });

  const [billing, setBilling] = useState({});

  const [paymentMethod, setPaymentMethod] =
    useState("card");

  const [payment, setPayment] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  useEffect(() => {

    const selectedPlan =
      JSON.parse(
        localStorage.getItem("selectedPlan")
      ) || {};

    const billingInfo =
      JSON.parse(
        localStorage.getItem("billingData")
      ) || {};

    setPlan(selectedPlan);

    setBilling(billingInfo);

  }, []);

  function handleChange(e){

    const {name,value}=e.target;

    setPayment(prev=>({

      ...prev,

      [name]:value

    }));

  }

  function handleSubmit(e){

    e.preventDefault();

    localStorage.setItem(
      "paymentData",
      JSON.stringify({
        paymentMethod,
        ...payment
      })
    );

    window.location.href="/dashboard";

  }

  return(

    <section className="payment-page">

      <div className="payment-container">

        <motion.div
          className="payment-left"
          initial={{opacity:0,x:-40}}
          animate={{opacity:1,x:0}}
          transition={{duration:.6}}
        >

          <div className="payment-title">

            <h1>Secure Payment</h1>

            <p>

              Complete your subscription
              securely.

            </p>

          </div>

          <div className="payment-methods">

            <button
              type="button"
              className={
                paymentMethod==="card"
                ? "method active"
                : "method"
              }
              onClick={()=>
                setPaymentMethod("card")
              }
            >

              <CreditCard size={20}/>

              Credit Card

            </button>

            <button
              type="button"
              className={
                paymentMethod==="bank"
                ? "method active"
                : "method"
              }
              onClick={()=>
                setPaymentMethod("bank")
              }
            >

              <Landmark size={20}/>

              Bank Transfer

            </button>

            <button
              type="button"
              className={
                paymentMethod==="wallet"
                ? "method active"
                : "method"
              }
              onClick={()=>
                setPaymentMethod("wallet")
              }
            >

              <Wallet size={20}/>

              Digital Wallet

            </button>

          </div>

          <form
            className="payment-form"
            onSubmit={handleSubmit}
          >
                        {paymentMethod === "card" && (
              <>

                <div className="input-group">
                  <CreditCard size={18} />
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Card Holder Name"
                    value={payment.cardName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <CreditCard size={18} />
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={payment.cardNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="payment-row">

                  <div className="input-group">
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM / YY"
                      value={payment.expiry}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <Lock size={18} />
                    <input
                      type="password"
                      name="cvv"
                      placeholder="CVV"
                      value={payment.cvv}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>

              </>
            )}

            {paymentMethod === "bank" && (
              <div className="payment-info">

                <Landmark size={42} />

                <h3>Bank Transfer</h3>

                <p>
                  Bank details will appear after
                  clicking Complete Payment.
                </p>

              </div>
            )}

            {paymentMethod === "wallet" && (
              <div className="payment-info">

                <Wallet size={42} />

                <h3>Digital Wallet</h3>

                <p>
                  Pay securely using your
                  preferred digital wallet.
                </p>

              </div>
            )}

            <button
              type="submit"
              className="payment-btn"
            >
              Complete Payment
              <ArrowRight size={18}/>
            </button>

          </form>

        </motion.div>

        <motion.div
          className="payment-right"
          initial={{opacity:0,x:40}}
          animate={{opacity:1,x:0}}
          transition={{duration:.6}}
        >

          <div className="summary-card">

            <span className="summary-badge">
              Payment Summary
            </span>

            <h2>
              Subscription
            </h2>

            <div className="summary-row">
              <span>Plan</span>
              <strong>{plan.plan || plan.name}</strong>
            </div>

            <div className="summary-row">
              <span>Billing</span>
              <strong>{plan.billing}</strong>
            </div>

            <div className="summary-row">
              <span>Company</span>
              <strong>{billing.company}</strong>
            </div>

            <div className="summary-row">
              <span>Email</span>
              <strong>{billing.email}</strong>
            </div>

            <hr />

            <div className="summary-total">

              <span>Total</span>

              <h1>
                ${plan.price || 5}
              </h1>

            </div>

            <div className="secure-box">

              <ShieldCheck size={42}/>

              <h3>
                Secure Checkout
              </h3>

              <p>
                SSL Encrypted Payment,
                PCI-DSS Compliant,
                256-bit Security.
              </p>

            </div>

            <div className="payment-status">

              <CheckCircle size={18}/>

              <span>
                Your workspace will be
                activated immediately after
                successful payment.
              </span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}
