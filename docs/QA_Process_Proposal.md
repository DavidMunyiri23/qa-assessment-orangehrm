# QA Process Proposal – Agile QA Integration

## Overview
This proposal outlines how manual, automated, and API testing integrate into an Agile QA workflow for a SaaS product.

## Process Components

### 1. Manual Testing
Performed at the start of each sprint to validate new functionality and UI behavior.

### 2. Automated Testing
Cypress used to automate critical regression paths (e.g., login, employee management). Tests run in CI/CD (GitHub Actions).

### 3. API Testing
API tests executed in Postman with environment variables. Automated via Newman CLI in pipelines.

### 4. Reporting
- Cypress dashboard for automation reports
- Postman/Newman HTML reports for API
- Jira/Trello for defect tracking

### 5. CI/CD Integration
- Every commit triggers tests via GitHub Actions
- Slack/Email notifications on failures

### 6. Continuous Improvement
Weekly retrospective reviews to update regression suite and refine test strategy.
