import styles from "./IntelligencePanel.module.css";

const insights = [
  "Platform growth increased by 18% this month.",
  "12 companies require subscription review.",
  "System performance is operating normally.",
];

export default function IntelligencePanel() {
  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <h2>Platform Intelligence</h2>
        <span>Live Insights</span>
      </div>

      <div className={styles.list}>
        {insights.map((item) => (
          <div key={item} className={styles.item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
