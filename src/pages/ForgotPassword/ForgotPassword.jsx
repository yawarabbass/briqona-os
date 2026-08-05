/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Forgot Password
|--------------------------------------------------------------------------
*/

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

import "./ForgotPassword.css";

export default function ForgotPassword() {

  const [email, setEmail] = useState("");

  const [sent, setSent] = useState(false);

  function handleSubmit(e) {

    e.preventDefault();

    setSent(true);

  }

  return (

    <section className="forgot-page">

      <div className="forgot-background">

        <div className="bg-circle one"></div>

        <div className="bg-circle two"></div>

        <div className="bg-circle three"></div>

      </div>

      <div className="forgot-wrapper">

        <motion.div
          className="forgot-left"
          initial={{ opacity:0, x:-60 }}
          animate={{ opacity:1, x:0 }}
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

            Reset Your Password

          </h2>

          <p className="subtitle">

            Enter your business email address.
            We'll send a secure password reset
            link to recover your workspace.

          </p>

          {

            !sent ? (

              <form
                className="forgot-form"
                onSubmit={handleSubmit}
              >

                <div className="input-group">

                  <Mail size={18} />

                  <input
                    type="email"
                    placeholder="Business Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="forgot-button"
                >

                  Send Reset Link

                  <ArrowRight size={18} />

                </button>
                              </form>

            ) : (

              <div className="success-card">

                <div className="success-icon">

                  <ShieldCheck size={44} />

                </div>

                <h3>

                  Reset Link Sent

                </h3>

                <p>

                  We've sent a secure password
                  reset link to:

                </p>

                <strong>

                  {email}

                </strong>

                <button
                  className="forgot-button"
                  onClick={() => setSent(false)}
                >

                  Send Again

                </button>

              </div>

            )

          }

          <div className="forgot-footer">

            <p>

              Remember your password?

              <a href="/login">

                Back To Login

              </a>

            </p>

          </div>

        </motion.div>

        <motion.div
          className="forgot-right"
          initial={{ opacity:0,x:60 }}
          animate={{ opacity:1,x:0 }}
          transition={{ duration:.8 }}
        >

          <div className="right-content">

            <span className="badge">

              Account Recovery

            </span>

            <h2>

              Secure Password
              <br />

              Recovery

            </h2>

            <p>

              Your workspace security is our
              priority. Recover your account
              through our protected verification
              process.

            </p>

            <div className="feature-list">

              <div className="feature-item">

                <span>①</span>

                <div>

                  <strong>Email Verification</strong>

                  <p>

                    Verify your business email.

                  </p>

                </div>

              </div>

              <div className="feature-item">

                <span>②</span>

                <div>

                  <strong>Security Validation</strong>

                  <p>

                    Protected recovery process.

                  </p>

                </div>

              </div>

              <div className="feature-item">

                <span>③</span>

                <div>

                  <strong>Create Password</strong>

                  <p>

                    Set your new secure password.

                  </p>

                </div>

              </div>

              <div className="feature-item">

                <span>④</span>

                <div>

                  <strong>Access Workspace</strong>

                  <p>

                    Sign in to BRIQONA OS.

                  </p>

                </div>

              </div>

            </div>
                      </div>

        </motion.div>

      </div>

    </section>

  );

}
