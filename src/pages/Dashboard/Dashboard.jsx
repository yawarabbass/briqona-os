import React from "react";

const stats = [
  { label: "Revenue", value: "$48,260", change: "+18.4%", icon: "↗" },
  { label: "Customers", value: "2,846", change: "+12.8%", icon: "◎" },
  { label: "Open Tasks", value: "126", change: "24 today", icon: "✓" },
  { label: "Business Health", value: "92/100", change: "Excellent", icon: "✦" },
];

const quickActions = [
  "Create Invoice",
  "Add Customer",
  "Create Task",
  "Run AI Analysis",
];

const modules = [
  { name: "CRM", icon: "◉", desc: "Customers & leads", status: "Active" },
  { name: "Finance", icon: "$", desc: "Cash flow & invoices", status: "Active" },
  { name: "Inventory", icon: "▦", desc: "Stock & products", status: "Growth" },
  { name: "HR", icon: "♙", desc: "People & payroll", status: "Pro" },
];

function Dashboard() {
  return (
    <div style={styles.page}>
      <div style={styles.backgroundGlowOne} />
      <div style={styles.backgroundGlowTwo} />

      <main style={styles.container}>
        {/* HEADER */}
        <header style={styles.header}>
          <div>
            <div style={styles.eyebrow}>BRIQONA OS • MASTER WORKSPACE</div>
            <h1 style={styles.title}>Good morning, welcome back.</h1>
            <p style={styles.subtitle}>
              Your business command center is ready. Here is what needs your
              attention today.
            </p>
          </div>

          <div style={styles.headerActions}>
            <button style={styles.iconButton}>⌕</button>
            <button style={styles.iconButton}>♧</button>

            <div style={styles.profile}>
              <div style={styles.avatar}>A</div>
              <div>
                <strong style={styles.profileName}>Admin</strong>
                <span style={styles.profileRole}>Owner</span>
              </div>
            </div>
          </div>
        </header>

        {/* AI COMMAND CENTER */}
        <section style={styles.aiCard}>
          <div style={styles.aiOrb}>
            <span>✦</span>
          </div>

          <div style={styles.aiContent}>
            <div style={styles.aiLabel}>BRIQONA AI COMMAND CENTER</div>
            <h2 style={styles.aiTitle}>What should we take care of?</h2>
            <p style={styles.aiText}>
              Ask Briqona to analyse your business, find opportunities or
              perform an approved action.
            </p>

            <div style={styles.commandBox}>
              <span style={styles.commandIcon}>✦</span>
              <span style={styles.commandPlaceholder}>
                Ask anything about your business...
              </span>
              <button style={styles.commandButton}>→</button>
            </div>

            <div style={styles.aiSuggestions}>
              <button>Show today's priorities</button>
              <button>Analyse revenue</button>
              <button>Find overdue invoices</button>
            </div>
          </div>

          <div style={styles.aiBadge}>
            <span style={styles.liveDot} />
            AI Online
          </div>
        </section>

        {/* STATS */}
        <section style={styles.statsGrid}>
          {stats.map((item) => (
            <div style={styles.statCard} key={item.label}>
              <div style={styles.statTop}>
                <span style={styles.statLabel}>{item.label}</span>
                <span style={styles.statIcon}>{item.icon}</span>
              </div>

              <div style={styles.statValue}>{item.value}</div>

              <div style={styles.statBottom}>
                <span style={styles.statChange}>{item.change}</span>
                <span style={styles.statPeriod}>vs last period</span>
              </div>
            </div>
          ))}
        </section>

        {/* MAIN GRID */}
        <section style={styles.mainGrid}>
          {/* BUSINESS PULSE */}
          <div style={styles.panel}>
            <div style={styles.panelHeader}>
              <div>
                <span style={styles.panelEyebrow}>BUSINESS PULSE</span>
                <h3 style={styles.panelTitle}>Performance overview</h3>
              </div>

              <button style={styles.smallButton}>Last 30 days ▾</button>
            </div>

            <div style={styles.chartArea}>
              <div style={styles.chartLine}>
                <span style={{ left: "0%" }} />
                <span style={{ left: "14%" }} />
                <span style={{ left: "28%" }} />
                <span style={{ left: "42%" }} />
                <span style={{ left: "56%" }} />
                <span style={{ left: "70%" }} />
                <span style={{ left: "84%" }} />
                <span style={{ left: "100%" }} />
              </div>

              <svg
                viewBox="0 0 700 220"
                preserveAspectRatio="none"
                style={styles.chartSvg}
              >
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#18e0ff" stopOpacity="0.24" />
                    <stop offset="100%" stopColor="#18e0ff" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <path
                  d="M0 175 C80 155 90 160 145 130 C205 95 225 145 285 120 C345 95 360 105 415 75 C470 45 510 95 555 65 C610 28 645 55 700 20 L700 220 L0 220 Z"
                  fill="url(#chartFill)"
                />

                <path
                  d="M0 175 C80 155 90 160 145 130 C205 95 225 145 285 120 C345 95 360 105 415 75 C470 45 510 95 555 65 C610 28 645 55 700 20"
                  fill="none"
                  stroke="#18e0ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>

              <div style={styles.chartLabels}>
                <span>01</span>
                <span>05</span>
                <span>10</span>
                <span>15</span>
                <span>20</span>
                <span>25</span>
                <span>30</span>
              </div>
            </div>
          </div>

          {/* AI INSIGHTS */}
          <div style={styles.panel}>
            <div style={styles.panelHeader}>
              <div>
                <span style={styles.panelEyebrow}>AI INSIGHTS</span>
                <h3 style={styles.panelTitle}>Business intelligence</h3>
              </div>

              <span style={styles.aiMiniBadge}>AI</span>
            </div>

            <div style={styles.insight}>
              <div style={styles.insightIcon}>↗</div>
              <div>
                <strong>Revenue is trending upward</strong>
                <p>Revenue increased 18.4% compared with the previous period.</p>
              </div>
            </div>

            <div style={styles.insight}>
              <div style={styles.insightIconGreen}>!</div>
              <div>
                <strong>3 invoices need attention</strong>
                <p>Briqona found overdue payments requiring follow-up.</p>
              </div>
            </div>

            <button style={styles.fullButton}>
              Open AI Business Analyst →
            </button>
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section style={styles.section}>
          <div style={styles.sectionHeading}>
            <div>
              <span style={styles.panelEyebrow}>ONE-CLICK ACTIONS</span>
              <h3 style={styles.panelTitle}>Get things done faster</h3>
            </div>
          </div>

          <div style={styles.actionsGrid}>
            {quickActions.map((action, index) => (
              <button style={styles.actionCard} key={action}>
                <span style={styles.actionNumber}>0{index + 1}</span>
                <span style={styles.actionText}>{action}</span>
                <span style={styles.actionArrow}>→</span>
              </button>
            ))}
          </div>
        </section>

        {/* MODULES */}
        <section style={styles.section}>
          <div style={styles.sectionHeading}>
            <div>
              <span style={styles.panelEyebrow}>MASTER BUSINESS OS</span>
              <h3 style={styles.panelTitle}>Your workspace</h3>
            </div>

            <button style={styles.textButton}>View all modules →</button>
          </div>

          <div style={styles.moduleGrid}>
            {modules.map((module) => (
              <div style={styles.moduleCard} key={module.name}>
                <div style={styles.moduleIcon}>{module.icon}</div>

                <div style={styles.moduleInfo}>
                  <strong>{module.name}</strong>
                  <span>{module.desc}</span>
                </div>

                <span style={styles.moduleStatus}>{module.status}</span>

                <button style={styles.moduleArrow}>→</button>
              </div>
            ))}
          </div>
        </section>

        {/* AI MISSION */}
        <section style={styles.missionCard}>
          <div style={styles.missionLeft}>
            <span style={styles.panelEyebrow}>AI MISSION</span>
            <h2 style={styles.missionTitle}>
              Recover overdue payments this week
            </h2>
            <p style={styles.missionText}>
              Briqona found 14 overdue invoices and prepared a suggested
              recovery workflow.
            </p>
          </div>

          <div style={styles.missionProgress}>
            <div style={styles.progressTrack}>
              <div style={styles.progressBar} />
            </div>

            <div style={styles.progressLabels}>
              <span>Analyse</span>
              <span>Prepare</span>
              <span>Review</span>
              <span>Execute</span>
            </div>
          </div>

          <button style={styles.missionButton}>Review Mission →</button>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <span>BRIQONA OS</span>
          <span>Master Workspace</span>
          <span>System Online • Secure</span>
        </footer>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(circle at 75% 0%, rgba(24,224,255,.08), transparent 30%), radial-gradient(circle at 15% 35%, rgba(141,242,61,.05), transparent 25%), #020711",
    color: "#edf7ff",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
  },

  backgroundGlowOne: {
    position: "fixed",
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "rgba(24,224,255,.05)",
    filter: "blur(100px)",
    top: -180,
    right: -100,
    pointerEvents: "none",
  },

  backgroundGlowTwo: {
    position: "fixed",
    width: 360,
    height: 360,
    borderRadius: "50%",
    background: "rgba(141,242,61,.035)",
    filter: "blur(100px)",
    bottom: -160,
    left: -100,
    pointerEvents: "none",
  },

  container: {
    width: "min(1400px, calc(100% - 48px))",
    margin: "0 auto",
    padding: "42px 0 32px",
    position: "relative",
    zIndex: 1,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 30,
    marginBottom: 30,
  },

  eyebrow: {
    color: "#18e0ff",
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: ".16em",
    marginBottom: 10,
  },

  title: {
    margin: 0,
    fontSize: "clamp(28px, 4vw, 46px)",
    letterSpacing: "-.045em",
    lineHeight: 1.05,
  },

  subtitle: {
    margin: "13px 0 0",
    maxWidth: 680,
    color: "#7f91a8",
    fontSize: 14,
    lineHeight: 1.7,
  },

  headerActions: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    border: "1px solid rgba(143,184,224,.14)",
    background: "rgba(255,255,255,.035)",
    color: "#dcecff",
    cursor: "pointer",
    fontSize: 18,
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginLeft: 8,
    padding: "6px 10px 6px 6px",
    borderRadius: 14,
    border: "1px solid rgba(143,184,224,.12)",
    background: "rgba(255,255,255,.025)",
  },

  avatar: {
    width: 34,
    height: 34,
    display: "grid",
    placeItems: "center",
    borderRadius: 10,
    background: "linear-gradient(135deg,#18e0ff,#8df23d)",
    color: "#031018",
    fontWeight: 900,
  },

  profileName: {
    display: "block",
    fontSize: 12,
  },

  profileRole: {
    display: "block",
    marginTop: 2,
    color: "#73869c",
    fontSize: 10,
  },

  aiCard: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: 24,
    padding: 28,
    borderRadius: 24,
    border: "1px solid rgba(24,224,255,.18)",
    background:
      "linear-gradient(135deg, rgba(24,224,255,.08), rgba(141,242,61,.035) 55%, rgba(255,255,255,.025))",
    boxShadow: "0 24px 80px rgba(0,0,0,.24)",
    marginBottom: 18,
  },

  aiOrb: {
    width: 70,
    height: 70,
    flex: "0 0 70px",
    display: "grid",
    placeItems: "center",
    borderRadius: 22,
    background:
      "radial-gradient(circle, rgba(24,224,255,.25), rgba(24,224,255,.04) 65%, transparent)",
    border: "1px solid rgba(24,224,255,.25)",
    color: "#18e0ff",
    fontSize: 28,
    boxShadow: "0 0 50px rgba(24,224,255,.14)",
  },

  aiContent: {
    flex: 1,
    minWidth: 0,
  },

  aiLabel: {
    color: "#8df23d",
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: ".15em",
  },

  aiTitle: {
    margin: "6px 0 5px",
    fontSize: 24,
    letterSpacing: "-.025em",
  },

  aiText: {
    margin: 0,
    color: "#8497ad",
    fontSize: 12,
  },

  commandBox: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 18,
    padding: 7,
    borderRadius: 14,
    background: "rgba(1,6,14,.68)",
    border: "1px solid rgba(143,184,224,.14)",
  },

  commandIcon: {
    color: "#18e0ff",
    paddingLeft: 10,
  },

  commandPlaceholder: {
    flex: 1,
    color: "#64778d",
    fontSize: 12,
  },

  commandButton: {
    width: 36,
    height: 36,
    border: 0,
    borderRadius: 10,
    background: "linear-gradient(135deg,#18e0ff,#8df23d)",
    color: "#031018",
    fontWeight: 900,
    cursor: "pointer",
  },

  aiSuggestions: {
    display: "flex",
    flexWrap: "wrap",
    gap: 7,
    marginTop: 10,
  },

  aiMiniBadge: {
    padding: "5px 8px",
    borderRadius: 8,
    color: "#18e0ff",
    background: "rgba(24,224,255,.08)",
    border: "1px solid rgba(24,224,255,.16)",
    fontSize: 10,
    fontWeight: 800,
  },

  aiSuggestionsButton: {},

  aiBadge: {
    alignSelf: "flex-start",
    display: "flex",
    alignItems: "center",
    gap: 7,
    padding: "7px 10px",
    borderRadius: 10,
    color: "#8df23d",
    background: "rgba(141,242,61,.06)",
    border: "1px solid rgba(141,242,61,.12)",
    fontSize: 10,
    fontWeight: 700,
  },

  liveDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#8df23d",
    boxShadow: "0 0 10px #8df23d",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 14,
    marginBottom: 18,
  },

  statCard: {
    padding: 20,
    borderRadius: 18,
    background: "rgba(255,255,255,.028)",
    border: "1px solid rgba(143,184,224,.1)",
  },

  statTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  statLabel: {
    color: "#788ba0",
    fontSize: 11,
  },

  statIcon: {
    color: "#18e0ff",
    fontSize: 17,
  },

  statValue: {
    marginTop: 14,
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: "-.035em",
  },

  statBottom: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    marginTop: 8,
  },

  statChange: {
    color: "#8df23d",
    fontSize: 10,
    fontWeight: 800,
  },

  statPeriod: {
    color: "#52657b",
    fontSize: 10,
  },

  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr",
    gap: 18,
  },

  panel: {
    minWidth: 0,
    padding: 22,
    borderRadius: 20,
    background: "rgba(255,255,255,.025)",
    border: "1px solid rgba(143,184,224,.1)",
  },

  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 15,
  },

  panelEyebrow: {
    color: "#18e0ff",
    fontSize: 9,
    fontWeight: 800,
    letterSpacing: ".14em",
  },

  panelTitle: {
    margin: "6px 0 0",
    fontSize: 17,
    letterSpacing: "-.025em",
  },

  smallButton: {
    padding: "8px 10px",
    borderRadius: 9,
    border: "1px solid rgba(143,184,224,.12)",
    background: "rgba(255,255,255,.025)",
    color: "#8b9db1",
    fontSize: 10,
  },

  chartArea: {
    position: "relative",
    height: 230,
    marginTop: 18,
  },

  chartLine: {
    position: "absolute",
    inset: "10px 0 30px",
    background:
      "repeating-linear-gradient(to bottom, rgba(143,184,224,.08) 0 1px, transparent 1px 48px)",
  },

  chartSvg: {
    position: "absolute",
    left: 0,
    top: 10,
    width: "100%",
    height: 185,
  },

  chartLabels: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    color: "#52657b",
    fontSize: 9,
  },

  insight: {
    display: "flex",
    gap: 12,
    marginTop: 18,
    padding: 13,
    borderRadius: 13,
    background: "rgba(255,255,255,.025)",
    border: "1px solid rgba(143,184,224,.07)",
  },

  insightIcon: {
    width: 30,
    height: 30,
    flex: "0 0 30px",
    display: "grid",
    placeItems: "center",
    borderRadius: 9,
    background: "rgba(24,224,255,.08)",
    color: "#18e0ff",
  },

  insightIconGreen: {
    width: 30,
    height: 30,
    flex: "0 0 30px",
    display: "grid",
    placeItems: "center",
    borderRadius: 9,
    background: "rgba(141,242,61,.08)",
    color: "#8df23d",
  },

  insightStrong: {
    fontSize: 12,
  },

  insightText: {
    margin: "4px 0 0",
    color: "#72859a",
    fontSize: 10,
    lineHeight: 1.5,
  },

  fullButton: {
    width: "100%",
    marginTop: 15,
    padding: 12,
    borderRadius: 11,
    border: "1px solid rgba(24,224,255,.16)",
    background: "rgba(24,224,255,.05)",
    color: "#18e0ff",
    fontSize: 11,
    fontWeight: 700,
    cursor: "pointer",
  },

  section: {
    marginTop: 18,
  },

  sectionHeading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 12,
  },

  textButton: {
    border: 0,
    background: "transparent",
    color: "#18e0ff",
    fontSize: 11,
    cursor: "pointer",
  },

  actionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 12,
  },

  actionCard: {
    minHeight: 82,
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderRadius: 15,
    border: "1px solid rgba(143,184,224,.1)",
    background: "rgba(255,255,255,.025)",
    color: "#edf7ff",
    cursor: "pointer",
    textAlign: "left",
  },

  actionNumber: {
    color: "#18e0ff",
    fontSize: 9,
    fontWeight: 800,
  },

  actionText: {
    flex: 1,
    fontSize: 11,
    fontWeight: 700,
  },

  actionArrow: {
    color: "#71859b",
  },

  moduleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 12,
  },

  moduleCard: {
    position: "relative",
    padding: 17,
    borderRadius: 16,
    border: "1px solid rgba(143,184,224,.1)",
    background: "rgba(255,255,255,.025)",
  },

  moduleIcon: {
    width: 34,
    height: 34,
    display: "grid",
    placeItems: "center",
    borderRadius: 10,
    background: "rgba(24,224,255,.07)",
    color: "#18e0ff",
    fontWeight: 800,
  },

  moduleInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    marginTop: 14,
  },

  moduleInfoStrong: {
    fontSize: 12,
  },

  moduleInfoSpan: {
    color: "#708297",
    fontSize: 10,
  },

  moduleStatus: {
    display: "inline-block",
    marginTop: 12,
    padding: "4px 7px",
    borderRadius: 6,
    color: "#8df23d",
    background: "rgba(141,242,61,.06)",
    fontSize: 8,
    fontWeight: 800,
  },

  moduleArrow: {
    position: "absolute",
    right: 14,
    bottom: 15,
    border: 0,
    background: "transparent",
    color: "#66798e",
    cursor: "pointer",
  },

  missionCard: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr auto",
    alignItems: "center",
    gap: 28,
    marginTop: 18,
    padding: 23,
    borderRadius: 20,
    border: "1px solid rgba(141,242,61,.14)",
    background:
      "linear-gradient(100deg, rgba(141,242,61,.06), rgba(24,224,255,.035))",
  },

  missionTitle: {
    margin: "7px 0 5px",
    fontSize: 18,
    letterSpacing: "-.025em",
  },

  missionText: {
    margin: 0,
    color: "#73869b",
    fontSize: 10,
    lineHeight: 1.6,
  },

  missionProgress: {
    minWidth: 0,
  },

  progressTrack: {
    height: 6,
    borderRadius: 20,
    background: "rgba(255,255,255,.07)",
    overflow: "hidden",
  },

  progressBar: {
    width: "68%",
    height: "100%",
    borderRadius: 20,
    background: "linear-gradient(90deg,#18e0ff,#8df23d)",
    boxShadow: "0 0 18px rgba(24,224,255,.25)",
  },

  progressLabels: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 8,
    color: "#607388",
    fontSize: 8,
  },

  missionButton: {
    padding: "12px 15px",
    borderRadius: 10,
    border: 0,
    background: "linear-gradient(100deg,#8df23d,#18e0ff)",
    color: "#031018",
    fontWeight: 800,
    fontSize: 10,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    gap: 15,
    marginTop: 28,
    paddingTop: 18,
    borderTop: "1px solid rgba(143,184,224,.08)",
    color: "#52657b",
    fontSize: 9,
  },
};

export default Dashboard;
