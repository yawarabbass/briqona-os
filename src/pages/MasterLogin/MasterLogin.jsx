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

    /*
      PROTOTYPE AUTHENTICATION

      Later:
      API authentication will replace this block.
    */

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

        <div className="master-login-brand">

          <div className="master-login-logo">
            B
          </div>

          <div>
            <strong>
              BRIQONA OS
            </strong>

            <span>
              Control Center
            </span>
          </div>

        </div>

        <div className="master-login-card">

          <div className="master-login-heading">

            <span>
              MASTER CONTROL
            </span>

            <h1>
              Welcome back
            </h1>

            <p>
              Sign in to access the BRIQONA OS Control Center.
            </p>

          </div>

          <form
            className="master-login-form"
            onSubmit={handleSubmit}
          >

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

            {error && (
              <div className="master-login-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="master-login-button"
            >
              Sign in to Control Center
            </button>

          </form>

          <div className="master-login-security">

            <span className="security-dot" />

            <span>
              Protected Control Center
            </span>

          </div>

        </div>

        <p className="master-login-footer">
          BRIQONA OS · Master Administration
        </p>

      </div>

    </main>
  );
}
