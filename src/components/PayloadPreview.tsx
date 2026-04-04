import React from "react";
import styles from "./PayloadPreview.module.css";

interface PayloadPreviewProps {
  payload: object | null;
}

const PayloadPreview: React.FC<PayloadPreviewProps> = ({ payload }) => {
  if (!payload) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.icon}>✓</span>
        <h3 className={styles.title}>Submitted Payload</h3>
      </div>
      <p className={styles.description}>
        This is the structured data produced by the dynamic form — ready to send
        to an API with no extra transformation.
      </p>
      <pre className={styles.code}>{JSON.stringify(payload, null, 2)}</pre>
    </div>
  );
};

export default PayloadPreview;
