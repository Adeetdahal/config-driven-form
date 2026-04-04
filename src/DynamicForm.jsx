import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ApplicantCard from "./components/ApplicantCard";
import PayloadPreview from "./components/PayloadPreview";
import styles from "./DynamicForm.module.css";

export default function DynamicForm() {
  const [applicants, setApplicants] = useState([{}]);
  const [payload, setPayload] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      applicants: [
        {
          firstName: "",
          lastName: "",
          email: "",
          number: "",
          bankAccounts: [{}]
        }
      ]
    }
  });

  const addApplicant = () => setApplicants((p) => [...p, {}]);
  const removeApplicant = (i) =>
    setApplicants((p) => p.filter((_, idx) => idx !== i));

  const onSubmit = (data) => setPayload(data);
  // console.log("payload", payload);

  const onReset = () => {
    setApplicants([{}]);
    setPayload(null);
    reset();
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Dynamic Form</h1>
          <p className={styles.sub}>
            Config-driven · Repeatable sections · Nested instances
          </p>
        </div>

        {/* Data model — mirrors the article diagram */}
        <div className={styles.model}>
          <div className={styles.modelLabel}>Data Model</div>
          <pre className={styles.modelTree}>{`Form
└── applicants[]
    ├── applicant[0]
    │   ├── firstName, lastName, email
    │   └── bankAccounts[]
    │       ├── bankAccounts[0] { bankName, accountNumber }
    │       └── bankAccounts[1] { ... }
    └── applicant[1]
        └── ...`}</pre>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.list}>
            {applicants.map((_, i) => (
              <ApplicantCard
                key={i}
                applicantIndex={i}
                register={register}
                control={control}
                errors={errors}
                onRemove={() => removeApplicant(i)}
                canRemove={applicants.length > 1}
              />
            ))}
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.addBtn}
              onClick={addApplicant}
            >
              + Add Applicant
            </button>
            <div className={styles.right}>
              <button
                type="button"
                className={styles.resetBtn}
                onClick={onReset}
              >
                Reset
              </button>
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </div>
          </div>
        </form>

        <PayloadPreview payload={payload} />
      </div>
    </div>
  );
}
