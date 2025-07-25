# Student Account Management System Test Plan

This test plan covers all business logic implemented in the COBOL application for student account management. Use this plan to validate the system with business stakeholders and as a basis for future Node.js unit and integration tests.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|--------------|----------------------|----------------|------------|-----------------|--------------|--------------------|----------|
| TC01 | View initial account balance | Account system is started; no prior transactions | 1. Start the app<br>2. Select 'View Balance' | Balance displayed is 1000.00 |  |  |  |
| TC02 | Credit account with valid amount | Account system is started | 1. Start the app<br>2. Select 'Credit Account'<br>3. Enter amount (e.g., 200.00) | Balance increases by entered amount; new balance displayed |  |  |  |
| TC03 | Debit account with valid amount (sufficient funds) | Account system is started; balance >= debit amount | 1. Start the app<br>2. Select 'Debit Account'<br>3. Enter amount less than or equal to balance (e.g., 500.00) | Balance decreases by entered amount; new balance displayed |  |  |  |
| TC04 | Debit account with invalid amount (insufficient funds) | Account system is started; balance < debit amount | 1. Start the app<br>2. Select 'Debit Account'<br>3. Enter amount greater than balance (e.g., 2000.00) | Error message displayed: "Insufficient funds for this debit."; balance remains unchanged |  |  |  |
| TC05 | Invalid menu selection | Account system is started | 1. Start the app<br>2. Enter an invalid menu choice (e.g., 5) | Error message displayed: "Invalid choice, please select 1-4." |  |  |  |
| TC06 | Exit the application | Account system is started | 1. Start the app<br>2. Select 'Exit' | Application exits gracefully with exit message |  |  |  |
| TC07 | Persist balance after credit | Account system is started | 1. Start the app<br>2. Credit account with amount<br>3. View balance | New balance reflects credited amount |  |  |  |
| TC08 | Persist balance after debit | Account system is started; balance >= debit amount | 1. Start the app<br>2. Debit account with amount<br>3. View balance | New balance reflects debited amount |  |  |  |
