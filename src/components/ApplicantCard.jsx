import React from "react";
import { applicantFieldConfig } from "../formConfig";
import DynamicField from "./DynamicField";
import NestedSection from "./NestedSection";
import styles from "./ApplicantCard.module.css";

// Step 3: Each applicant is a repeatable instance.
export default function ApplicantCard({
  applicantIndex,
  register,
  control,
  errors,
  onRemove,
  canRemove,
}) {
  const applicantErrors = errors?.applicants?.[applicantIndex] ?? {};
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          <span className={styles.badge}>{applicantIndex + 1}</span>
          Applicant {applicantIndex + 1}
        </h3>
        {canRemove && (
          <button type="button" className={styles.removeBtn} onClick={onRemove}>
            Remove
          </button>
        )}
      </div>

      <div className={styles.fields}>
        {applicantFieldConfig.map((field) => (
          <DynamicField
            key={field.name}
            field={field}
            register={register}
            registerPath={`applicants.${applicantIndex}.${field.name}`}
            error={applicantErrors[field.name]?.message}
          />
        ))}
      </div>

      <NestedSection applicantIndex={applicantIndex} register={register} control={control} />
    </div>
  );
}
