import React from "react";
import styles from "./DynamicField.module.css";

// Step 2: Render any field from config — no hardcoded inputs.
export default function DynamicField({ field, registerPath, register, error }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{field.label}</label>
      <input
        type={field.type}
        placeholder={field.label}
        {...register(registerPath, field.validation || {})}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
