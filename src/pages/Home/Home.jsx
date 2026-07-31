import "./Home.css";

function Home() {
  return (
    <main className="home-page">

      <section className="home-hero">

        <div className="container home-hero__grid">

          {/* LEFT CONTENT */}
          <div className="home-hero__content">

            <span className="home-eyebrow">
              AI-POWERED BUSINESS OPERATING SYSTEM
            </span>

            <h1>
              Run Your Business.
              <br />
              Think <span>Smarter.</span>
              <br />
              Grow <span>Faster.</span>
            </h1>

            <p>
              One intelligent platform to manage your business,
              automate workflows, understand your data, and grow
              with confidence.
            </p>

            <div className="home-hero__actions">

              <a
                className="home-button home-button--primary"
                href="#start"
              >
                Start Free
                <span>→</span>
              </a>

              <a
                className="home-button home-button--secondary"
                href="#demo"
              >
                <span>▣</span>
                Book a Demo
              </a>

            </div>

            <div className="home-hero__trust">

              <span>
                <b>✓</b>
                Secure
              </span>

              <span>
                <b>ϟ</b>
                AI-Powered
              </span>

              <span>
                <b>◇</b>
                Scalable
              </span>

              <span>
                <b>✓</b>
                Reliable
              </span>

            </div>

          </div>


          {/* RIGHT DASHBOARD */}
          <div className="home-hero__visual">

            <div className="dashboard-glow" />

            <div className="dashboard-card">

              {/* Dashboard top bar */}

              <div className="dashboard-topbar">

                <div className="dashboard-mini-logo">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>

                <div className="dashboard-search">
                  ⌕
                  <span>Search anything...</span>
                </div>

                <button className="dashboard-add">
                  +
                </button>

                <div className="dashboard-avatar">
                  JA
                </div>

              </div>


              <div className="dashboard-layout">

                {/* Sidebar */}

                <aside className="dashboard-sidebar">

                  <span className="active">⌂</span>
                  <span>▣</span>
                  <span>♙</span>
                  <span>◈</span>
                  <span>◫</span>
                  <span>⚙</span>

                </aside>


                {/* Main dashboard */}

                <div className="dashboard-main">

                  <div className="dashboard-heading">

                    <div>
                      <h3>
                        Good Morning, John 👋
                      </h3>

                      <p>
                        Here's what's happening with your
                        business today.
                      </p>
                    </div>

                    <span className="dashboard-notification">
                      ♧
                    </span>

                  </div>


                  {/* Metrics */}

                  <div className="dashboard-metrics">

                    <article>
                      <small>Revenue</small>

                      <strong>
                        $84,240
                      </strong>

                      <em>
                        +18.4%
                      </em>

                      <div className="metric-chart">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </article>


                    <article>
                      <small>Customers</small>

                      <strong>
                        2,846
                      </strong>

                      <em>
                        +12.6%
                      </em>

                      <div className="metric-chart metric-chart--green">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </article>


                    <article>
                      <small>Orders</small>

                      <strong>
                        1,254
                      </strong>

                      <em>
                        +8.3%
                      </em>

                      <div className="metric-chart">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </article>


                    <article>
                      <small>Tasks</small>

                      <strong>
                        28
                      </strong>

                      <em>
                        76%
                      </em>

                      <div className="metric-chart metric-chart--green">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </article>

                  </div>


                  {/* Lower dashboard */}

                  <div className="dashboard-lower">

                    <div className="revenue-card">

                      <div className="dashboard-card-heading">
                        <strong>
                          Revenue Overview
                        </strong>

                        <span>
                          This Month⌄
                        </span>
                      </div>


                      <div className="revenue-chart">

                        <svg
                          viewBox="0 0 600 190"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                        >

                          <defs>

                            <linearGradient
                              id="revenueGradient"
                              x1="0"
                              x2="0"
                              y1="0"
                              y2="1"
                            >

                              <stop
                                offset="0%"
                                stopColor="#16d9ff"
                                stopOpacity=".34"
                              />

                              <stop
                                offset="100%"
                                stopColor="#16d9ff"
                                stopOpacity="0"
                              />

                            </linearGradient>

                          </defs>


                          <path
                            className="chart-area"
                            d="
                              M0 150
                              C45 125 65 132 100 100
                              S155 130 195 88
                              S255 126 300 90
                              S355 112 395 62
                              S455 92 500 50
                              S555 72 600 18
                              L600 190
                              L0 190
                              Z
                            "
                          />


                          <path
                            className="chart-line"
                            d="
                              M0 150
                              C45 125 65 132 100 100
                              S155 130 195 88
                              S255 126 300 90
                              S355 112 395 62
                              S455 92 500 50
                              S555 72 600 18
                            "
                          />

                        </svg>


                        <div className="chart-tooltip">
                          <small>
                            May 15, 2026
                          </small>

                          <strong>
                            $84,240
                          </strong>
                        </div>

                      </div>

                    </div>


                    {/* AI insight */}

                    <div className="ai-insight-card">

                      <div className="ai-insight-heading">

                        <span>
                          AI
                        </span>

                        <strong>
                          AI Insight
                        </strong>

                        <em>
                          Impact
                        </em>

                      </div>


                      <h4>
                        3 growth opportunities
                      </h4>

                      <p>
                        detected for your business.
                      </p>

                      <a href="#ai">
                        View Insights →
                      </a>


                      <div className="ai-wave">

                        <span />
                        <span />
                        <span />
                        <span />
                        <span />

                      </div>

                    </div>

                  </div>


                  {/* Activity */}

                  <div className="dashboard-activity">

                    <strong>
                      Recent Activity
                    </strong>

                    <a href="#activity">
                      View all
                    </a>

                    <div className="activity-row">
                      <span>
                        ● New order received
                      </span>

                      <small>
                        2 min ago
                      </small>
                    </div>

                    <div className="activity-row">
                      <span>
                        ● Invoice #INV-1254 paid
                      </span>

                      <small>
                        15 min ago
                      </small>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Trust logos */}

        <div className="container home-trust">

          <span>
            Trusted by modern businesses
          </span>

          <strong>
            NOVATECH
          </strong>

          <strong>
            ◢ Vertex
          </strong>

          <strong>
            ☁ CloudCore
          </strong>

          <strong>
            N Nextera
          </strong>

          <strong>
            ℬ BrikLabs
          </strong>

        </div>

      </section>

    </main>
  );
}

export default Home;
