import React from "react";
import styles from "./Badge.module.css";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "success" | "warning" | "danger";
};

export default function Badge({
  children,
  variant = "success",
}: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {children}
    </span>
  );
}
