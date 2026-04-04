import React from "react";
import { useFieldArray } from "react-hook-form";
import { nestedSectionConfig } from "../formConfig";
import DynamicField from "./DynamicField";
import styles from "./NestedSection.module.css";

// Step 4: Nested repeatable section inside each applicant.
// Each item gets its own indexed path:
//   applicants.0.bankAccounts.0.bankName
//   applicants.0.bankAccounts.1.bankName
export default function NestedSection({ applicantIndex, register, control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `applicants.${applicantIndex}.bankAccounts`,
  });

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <span className={styles.title}>Bank Accounts</span>
        <button
          type="button"
          className={styles.addBtn}
          onClick={() => append({})}
        >
          + Add
        </button>
      </div>

      {fields.map((field, itemIndex) => (
        <div key={field.id} className={styles.item}>
          <div className={styles.itemHeader}>
            <span className={styles.itemLabel}>Account {itemIndex + 1}</span>
            {fields.length > 1 && (
              <button
                type="button"
                className={styles.removeBtn}
                onClick={() => remove(itemIndex)}
              >
                Remove
              </button>
            )}
          </div>

          <div className={styles.fields}>
            {nestedSectionConfig.map((f) => (
              <DynamicField
                key={f.name}
                field={f}
                register={register}
                registerPath={`applicants.${applicantIndex}.bankAccounts.${itemIndex}.${f.name}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
