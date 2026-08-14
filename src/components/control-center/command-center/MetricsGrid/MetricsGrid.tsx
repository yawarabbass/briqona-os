import styles from "./MetricsGrid.module.css";

const metrics = [
  {
    title: "Monthly Growth",
    value: "+24%",
  },
  {
    title: "Active Users",
    value: "18.4K",
  },
  {
    title: "API Requests",
    value: "2.8M",
  },
  {
    title: "Revenue Flow",
    value: "$420K",
  },
];

export default function MetricsGrid() {
  return (
    <section className={styles.grid}>
      {metrics.map((metric) => (
        <div key={metric.title} className={styles.card}>
          <p>{metric.title}</p>
          <h2>{metric.value}</h2>
        </div>
      ))}
    </section>
  );
}
