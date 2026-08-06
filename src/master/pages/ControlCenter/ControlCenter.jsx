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

      🚀 BRIQONA OS Enterprise

    </span>

    <h1>

      Control Your
      <br />
      Entire Business
      <br />
      From One Place

    </h1>

    <p>

      Welcome back.

      Monitor companies,
      subscriptions,
      AI intelligence,
      financial insights,
      platform health
      and complete business
      operations through your
      intelligent enterprise
      control center.

    </p>

    <div className="cc-hero-actions">

      <button className="cc-primary-btn">

        Create Company

      </button>

      <button className="cc-secondary-btn">

        View Reports

      </button>

    </div>

  </div>

  <div className="cc-hero-right">

    <div className="cc-ai-card">

      <span>

        🤖 AI Assistant

      </span>

      <h3>

        Everything
        looks healthy.

      </h3>

      <p>

        No critical alerts.

        4 companies are growing.

        Revenue increased this month.

      </p>

      <div className="cc-ai-status">

        ● AI Online

      </div>

    </div>

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
