// Step 1: Define fields in configuration — not hardcoded in JSX.
// To add or remove a field, just edit this array.

export const applicantFieldConfig = [
  { name: "firstName", label: "First Name", type: "text" },
  { name: "lastName", label: "Last Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  {
    name: "number",
    label: "Phone Number",
    type: "number",
    validation: {
      pattern: { value: /^[0-9]+$/, message: "Numbers only" },
      maxLength: { value: 10, message: "Max 10 digits" },
      minLength: { value: 10, message: "Must be 10 digits" },
    },
  },
];

export const nestedSectionConfig = [
  { name: "bankName", label: "Bank Name", type: "text" },
  { name: "accountNumber", label: "Account Number", type: "number" },
];
