import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Crown,
  Rocket,
  Building2
} from "lucide-react";

import "./ChoosePlan.css";

export default function ChoosePlan() {

  const [billing, setBilling] = useState("monthly");

  const plans = [

    {
      id: "starter",
      icon: <Rocket size={28} />,
      title: "Starter",
      monthly: 5,
      yearly: 50,
      badge: "",
      description: "Perfect for freelancers and startups.",
      features: [
        "1 Workspace",
        "Up to 5 Team Members",
        "Basic AI Assistant",
        "10 GB Secure Storage",
        "Email Support"
      ]
    },

    {
      id: "professional",
      icon: <Crown size={28} />,
      title: "Professional",
      monthly: 15,
      yearly: 150,
      badge: "Most Popular",
      description: "Ideal for growing businesses.",
      features: [
        "5 Workspaces",
        "25 Team Members",
        "All Core AI Modules",
        "100 GB Storage",
        "Analytics Dashboard",
        "Priority Support"
      ]
    },

    {
      id: "enterprise",
      icon: <Building2 size={28} />,
      title: "Enterprise",
      monthly: 30,
      yearly: 300,
      badge: "",
      description: "Built for large organizations.",
      features: [
        "Unlimited Workspaces",
        "Unlimited Team Members",
        "Unlimited Storage",
        "Advanced AI Modules",
        "Dedicated Manager",
        "API Access"
      ]
    }

  ];

  const choosePlan = (plan) => {

  localStorage.setItem(
    "selectedPlan",
    JSON.stringify({
      id: plan.id,
      name: plan.title,
      price:
        billing === "monthly"
          ? `$${plan.monthly}`
          : `$${plan.yearly}`,
      billing:
        billing === "monthly"
          ? "Monthly"
          : "Yearly"
    })
  );

  window.location.href = "/billing";

};

  return (

    <section className="plan-page">

      <motion.div
        className="plan-header"
        initial={{ opacity:0,y:30 }}
        animate={{ opacity:1,y:0 }}
      >

        <span className="mini-title">
          BRIQONA OS
        </span>

        <h1>
          Choose Your Business Plan
        </h1>

        <p>
          Select the plan that best fits your business.
          Upgrade anytime as your company grows.
        </p>

      </motion.div>

      <div className="billing-switch">

        <button
          className={
            billing === "monthly"
              ? "active"
              : ""
          }
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>

        <button
          className={
            billing === "yearly"
              ? "active"
              : ""
          }
          onClick={() => setBilling("yearly")}
        >
          Yearly
        </button>

      </div>

      <div className="plans-grid">
        {plans.map((plan) => (

  <motion.div
    key={plan.id}
    className={
      plan.id === "professional"
        ? "plan-card featured"
        : "plan-card"
    }
    whileHover={{ y: -10 }}
    transition={{ duration: .25 }}
  >

    {plan.badge && (
      <div className="plan-badge">
        {plan.badge}
      </div>
    )}

    <div className="plan-icon">
      {plan.icon}
    </div>

    <h2>
      {plan.title}
    </h2>

    <p className="plan-description">
      {plan.description}
    </p>

    <div className="plan-price">

      <span className="currency">
        $
      </span>

      <span className="amount">
        {billing === "monthly"
          ? plan.monthly
          : plan.yearly}
      </span>

      <span className="duration">
        /
        {billing === "monthly"
          ? "Month"
          : "Year"}
      </span>

    </div>

    <ul className="plan-features">

      {plan.features.map((feature, index) => (

        <li key={index}>

          <Check size={18} />

          <span>
            {feature}
          </span>

        </li>

      ))}

    </ul>

    <button
      className={
        plan.id === "professional"
          ? "choose-btn primary"
          : "choose-btn"
      }
      onClick={() => choosePlan(plan)}
    >

      Choose Plan

    </button>

  </motion.div>

))}

      </div>

      <motion.div
        className="plan-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .6 }}
      >

        <h3>
          Need a Custom Enterprise Solution?
        </h3>

        <p>
          Contact our sales team for custom pricing,
          dedicated infrastructure, white-label
          deployment, API integrations, and enterprise
          support tailored to your business.
        </p>

        <button
          className="contact-sales-btn"
          onClick={() => {
            window.location.href = "/contact";
          }}
        >
          Contact Sales
        </button>

      </motion.div>

    </section>

  );

        }
