/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Enterprise Register
|--------------------------------------------------------------------------
*/

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Building2,
  Globe,
  Briefcase,
  Lock,
  Eye,
  EyeOff,
  ArrowRight
} from "lucide-react";

import "./Register.css";

export default function Register() {

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    industry: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox"
        ? checked
        : value,
    }));

  };

  const handleSubmit = (e) => {

  e.preventDefault();

  console.log(form);

  // Save registration data temporarily
  localStorage.setItem(
    "registerData",
    JSON.stringify(form)
  );

  // Go to Choose Plan page
  window.location.href = "/choose-plan";

};

  return (

    <section className="register-page">

      <div className="register-background">

        <div className="bg-circle one"></div>

        <div className="bg-circle two"></div>

        <div className="bg-circle three"></div>

      </div>

      <div className="register-wrapper">

        <motion.div
          className="register-left"
          initial={{ opacity:0,x:-60 }}
          animate={{ opacity:1,x:0 }}
          transition={{ duration:.8 }}
        >

          <div className="brand">

            <div className="brand-logo">

              B

            </div>

            <div>

              <h1>BRIQONA OS</h1>

              <p>

                Enterprise Business Platform

              </p>

            </div>

          </div>

          <h2>

            Create Your Workspace

          </h2>

          <p className="subtitle">

            Start your enterprise journey with
            BRIQONA OS.

          </p>

          <form
            className="register-form"
            onSubmit={handleSubmit}
          >

            <div className="input-group">

              <User size={18} />

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <Mail size={18} />

              <input
                type="email"
                name="email"
                placeholder="Business Email"
                value={form.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <Phone size={18} />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <Building2 size={18} />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                required
              />

            </div>
                        <div className="input-group">

              <Globe size={18} />

              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                required
              >
                <option value="">Select Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="UAE">United Arab Emirates</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Qatar">Qatar</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
              </select>

            </div>

            <div className="input-group">

              <Briefcase size={18} />

              <select
                name="industry"
                value={form.industry}
                onChange={handleChange}
                required
              >
                <option value="">Select Industry</option>
                <option>Technology</option>
                <option>Retail</option>
                <option>Healthcare</option>
                <option>Manufacturing</option>
                <option>Education</option>
                <option>Finance</option>
                <option>Real Estate</option>
                <option>Other</option>
              </select>

            </div>

            <div className="input-group">

              <Lock size={18} />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>

            </div>

            <div className="input-group">

              <Lock size={18} />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

            <label className="remember">

              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                required
              />

              <span>

                I agree to the Terms &
                Privacy Policy.

              </span>

            </label>

            <button
              type="submit"
              className="login-button"
            >

              Continue

              <ArrowRight size={18} />

            </button>
                        <div className="login-footer">

              <p>

                Already have an account?

                <a href="/login">

                  Login

                </a>

              </p>

            </div>

          </form>

        </motion.div>

        <motion.div
          className="login-right"
          initial={{ opacity:0,x:60 }}
          animate={{ opacity:1,x:0 }}
          transition={{ duration:.8 }}
        >

          <div className="right-content">

            <span className="badge">

              Enterprise Workspace

            </span>

            <h2>

              Your Journey
              <br />
              Starts Here

            </h2>

            <p>

              Register your company, choose the
              perfect subscription plan and launch
              your secure BRIQONA OS workspace.

            </p>

            <div className="feature-list">

              <div className="feature-item">

                <span>①</span>

                <div>

                  <strong>Create Profile</strong>

                  <p>Business owner information</p>

                </div>

              </div>

              <div className="feature-item">

                <span>②</span>

                <div>

                  <strong>Select Plan</strong>

                  <p>Starter • Growth • Enterprise</p>

                </div>

              </div>

              <div className="feature-item">

                <span>③</span>

                <div>

                  <strong>Billing & Payment</strong>

                  <p>Secure subscription activation</p>

                </div>

              </div>

              <div className="feature-item">

                <span>④</span>

                <div>

                  <strong>Workspace Ready</strong>

                  <p>Login to your dashboard</p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}
