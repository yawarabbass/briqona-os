import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MasterLogin.css";
 
export default function MasterLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    // Prototype authentication
    localStorage.setItem(
      "briqona_master_auth",
      "true"
    );

    navigate("/master", {
      replace: true,
    });
  };

  return (
    <main className="master-login-page">

      <div className="master-login-shell">

        {/* Brand */}

        <div className="master-login-brand">

          <div className="master-login-logo">
            B
          </div>

          <div className="master-login-brand-text">

            <strong>
              BRIQONA OS
            </strong>

            <span>
              Control Center
            </span>

          </div>

        </div>

        {/* Login Card */}

        <div className="master-login-card">

          <div className="master-login-heading">

            <span className="master-login-eyebrow">
              MASTER CONTROL
            </span>

            <h1>
              Welcome back
            </h1>

            <p>
              Sign in to securely access the
              BRIQONA OS Control Center.
            </p>

          </div>

          <form
            className="master-login-form"
            onSubmit={handleSubmit}
          >

            {/* Email */}

            <label>

              <span>
                Administrator Email
              </span>

              <input
                type="email"
                placeholder="admin@briqona.com"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                autoComplete="username"
              />

            </label>

            {/* Password */}

            <label>

              <span>
                Password
              </span>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                autoComplete="current-password"
              />

            </label>

            {/* Error */}

            {error && (
              <div className="master-login-error">
                {error}
              </div>
            )}

            {/* Login */}

            <button
              type="submit"
              className="master-login-button"
            >
              Sign in to Control Center
            </button>

          </form>

          {/* Security */}

          <div className="master-login-security">

            <span className="security-dot" />

            <span>
              Protected Control Center
            </span>

          </div>

          {/* Company Credit */}

          <div className="master-login-credit">

            <span className="credit-label">
              Designed &amp; Developed by
            </span>

            <strong>
              YAB IT HOUSE (SMC) PVT LTD
            </strong>

            <span className="credit-powered">
              Powered by BRIQONA OS
            </span>

          </div>

        </div>

      </div>

    </main>
  );
}
