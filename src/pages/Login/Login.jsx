/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Enterprise Login
|--------------------------------------------------------------------------
*/

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import "./Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="login-page">

      <div className="login-background">

        <div className="bg-circle one"></div>
        <div className="bg-circle two"></div>
        <div className="bg-circle three"></div>

      </div>

      <div className="login-wrapper">

        <motion.div
          className="login-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="brand">

            <div className="brand-logo">
              B
            </div>

            <div>

              <h1>BRIQONA OS</h1>

              <p>
                Enterprise AI Business Platform
              </p>

            </div>

          </div>

          <h2>

            Welcome Back

          </h2>

          <p className="subtitle">

            Sign in to access your intelligent business workspace.

          </p>

          <form
            onSubmit={handleSubmit}
            className="login-form"
          >

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
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >

                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}

              </button>

            </div>
                        <div className="login-options">

              <label className="remember">

                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                />

                <span>Remember me</span>

              </label>

              <a href="#" className="forgot-link">

                Forgot Password?

              </a>

            </div>

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >

              {loading ? (
                "Signing In..."
              ) : (
                <>
                  Login
                  <ArrowRight size={18} />
                </>
              )}

            </button>

            <div className="divider">

              <span>OR</span>

            </div>

            <div className="social-login">

              <button
                type="button"
                className="social-btn"
              >

                Continue with Google

              </button>

              <button
                type="button"
                className="social-btn"
              >

                Continue with Microsoft

              </button>

            </div>

          </form>

        </motion.div>

        <motion.div
          className="login-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="right-content">

            <span className="badge">

              <ShieldCheck size={18} />

              Enterprise Ready

            </span>

            <h2>

              Power Your Business
              <br />
              With AI

            </h2>

            <p>

              Access CRM, HRM, Finance,
              Inventory, Analytics,
              Automation and intelligent
              business tools from one
              secure platform.

            </p>

            <div className="feature-list">

              <div className="feature-item">

                <ShieldCheck size={20} />

                <span>Enterprise Security</span>

              </div>

              <div className="feature-item">

                <ShieldCheck size={20} />

                <span>AI Powered Workspace</span>

              </div>

              <div className="feature-item">

                <ShieldCheck size={20} />

                <span>Cloud Native Platform</span>

              </div>

              <div className="feature-item">

                <ShieldCheck size={20} />

                <span>24/7 Business Access</span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
