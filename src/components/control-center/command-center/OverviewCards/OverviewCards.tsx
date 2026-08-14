import styles from "./OverviewCards.module.css";

const cards = [
  {
    title: "Active Companies",
    value: "248",
  },
  {
    title: "Workspaces",
    value: "1,240",
  },
  {
    title: "Subscriptions",
    value: "98%",
  },
  {
    title: "System Health",
    value: "99.9%",
  },
];

export default function OverviewCards() {
  return (
    <section className={styles.grid}>
      {cards.map((card) => (
        <div key={card.title} className={styles.card}>
          <p>{card.title}</p>
          <h2>{card.value}</h2>
        </div>
      ))}
    </section>
  );
}
