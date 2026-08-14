import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <strong>BRIQONA OS</strong>

      <span>
        Control Center
      </span>
    </header>
  );
}
