import "./Platform.css";

function Platform() {
  return (
    <section className="platform">

      <div className="container platform__grid">

        <div className="platform__content">

          <span>
            INTELLIGENT PLATFORM
          </span>

          <h2>
            One Operating System.
            <br />
            <strong>Endless Possibilities.</strong>
          </h2>

          <p>
            Briqona OS connects your operations,
            data and teams into one powerful AI-driven
            business platform.
          </p>


          <div className="platform__points">

            <div>
              <b>✓</b>
              AI powered automation
            </div>

            <div>
              <b>✓</b>
              Real-time business insights
            </div>

            <div>
              <b>✓</b>
              Scalable enterprise tools
            </div>

          </div>

        </div>


        <div className="platform__visual">

          <div className="platform-card">

            <small>
              AI BUSINESS ENGINE
            </small>

            <h3>
              Smart Operations
            </h3>

            <div className="platform-stat">
              <span>Automation</span>
              <strong>94%</strong>
            </div>

            <div className="platform-stat">
              <span>Efficiency</span>
              <strong>87%</strong>
            </div>

          </div>

        </div>


      </div>

    </section>
  );
}

export default Platform;
