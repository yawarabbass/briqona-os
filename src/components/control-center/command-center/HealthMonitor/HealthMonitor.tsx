import styles from "./HealthMonitor.module.css";

const systems = [
  {
    name: "API Services",
    status: "Operational",
    uptime: "99.99%",
  },
  {
    name: "Database Cluster",
    status: "Healthy",
    uptime: "99.95%",
  },
  {
    name: "Security Layer",
    status: "Protected",
    uptime: "100%",
  },
];

export default function HealthMonitor() {
  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <h2>System Health</h2>
        <span>Live Monitoring</span>
      </div>

      <div className={styles.grid}>
        {systems.map((system) => (
          <div key={system.name} className={styles.card}>
            <h3>{system.name}</h3>
            <p>{system.status}</p>
            <strong>{system.uptime}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
