# React Config-Driven Dynamic Form

A practical implementation of the config-driven nested repeatable form pattern, built as a companion to the Medium post: **"Dynamic Form"**.

## What This Repo Demonstrates

How to scale complex React forms without hardcoding JSX — using configuration, instances, and a data structure that mirrors the final API payload.

## The Core Idea

Instead of thinking in individual inputs, think in **instances of structured data**:

```
applicants[]
  └── firstName, lastName, email
  └── nestedSection[]
        └── fieldA, fieldB
```

## Key Concepts Covered

- **Config-driven fields** — define fields as constants, not JSX
- **Repeatable applicants** — each applicant is an indexed instance
- **Nested repeatable sections** — sections within sections, fully indexed
- **Structured payloads** — submitted data matches the API shape with no transformation needed

## Getting Started

```bash
npm install
npm start
```

## Project Structure

```
src/
├── formConfig.js          # Field definitions (the config)
├── DynamicForm.jsx        # Root form component
└── components/
    ├── ApplicantCard.jsx  # Repeatable applicant instance
    ├── DynamicField.jsx   # Renders a single config-driven field
    ├── NestedSection.jsx  # Repeatable nested section
    └── PayloadPreview.tsx # Live view of the submitted payload
```

## Related

Read the full article on Medium: [Dynamic Form](#)
