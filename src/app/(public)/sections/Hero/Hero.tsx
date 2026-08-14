import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow}></div>

      <div className={styles.content}>
        <p className={styles.badge}>
          Next Generation Business Operating System
        </p>

        <h1>
          Run Your Business
          <span> Smarter With BRIQONA OS</span>
        </h1>

        <p className={styles.description}>
          One intelligent platform to manage operations,
          workflows, analytics and business growth.
        </p>

        <div className={styles.actions}>
          <button className={styles.primary}>
            Get Started
          </button>

          <button className={styles.secondary}>
            Book Demo
          </button>
        </div>

        <div className={styles.dashboard}>
          BRIQONA OS Dashboard Preview
        </div>
      </div>
    </section>
  );
}
