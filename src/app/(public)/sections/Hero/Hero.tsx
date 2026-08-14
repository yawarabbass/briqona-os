import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          BRIQONA OS
        </h1>

        <p>
          Intelligent Business Operating System for modern companies.
        </p>

        <div className={styles.actions}>
          <button>
            Get Started
          </button>

          <button>
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
}
