/*
|--------------------------------------------------------------------------
| BRIQONA OS
|--------------------------------------------------------------------------
| Control Center
|--------------------------------------------------------------------------
|
| Enterprise Owner Home
|
*/

import "./ControlCenter.css";

export default function ControlCenter() {

  return (

    <div className="control-center">

      {/* Hero */}

      <section className="cc-hero">

        <div className="cc-hero-left">

          <span className="cc-badge">

            BRIQONA OS

          </span>

          <h1>

            Welcome back,
            <br />
            System Owner

          </h1>

          <p>

            Monitor your companies, subscriptions,
            platform health, AI insights and business
            operations from one intelligent control
            center.

          </p>

        </div>

        <div className="cc-hero-right">

          AI STATUS

        </div>

      </section>

      {/* KPI */}

      <section className="cc-kpi-grid">

        <div className="cc-card">

          Companies

        </div>

        <div className="cc-card">

          Active Users

        </div>

        <div className="cc-card">

          Revenue

        </div>

        <div className="cc-card">

          Growth

        </div>

      </section>

      {/* Main Grid */}

      <section className="cc-grid">

        <div className="cc-left">

          <div className="cc-card cc-large">

            Analytics Area

          </div>

          <div className="cc-card cc-large">

            Recent Activity

          </div>

        </div>

        <div className="cc-right">

          <div className="cc-card">

            AI Copilot

          </div>

          <div className="cc-card">

            Quick Actions

          </div>

          <div className="cc-card">

            Notifications

          </div>

          <div className="cc-card">

            System Health

          </div>

        </div>

      </section>

    </div>

  );

}
