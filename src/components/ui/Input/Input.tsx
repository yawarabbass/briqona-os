import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  placeholder,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
