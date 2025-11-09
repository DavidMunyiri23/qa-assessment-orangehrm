# API Testing – OrangeHRM Demo (via Postman)

## Overview
Validate API endpoints using Postman for login and employee management.

## Test Cases
1. **Login API (POST)**  
   - Endpoint: `/api/v1/login`  
   - Expected: 200 OK, returns access token

2. **Get Employees (GET)**  
   - Endpoint: `/api/v1/employees`  
   - Expected: 200 OK, valid employee list

3. **Invalid Auth Test (GET)**  
   - Endpoint: `/api/v1/employees` with invalid token  
   - Expected: 401 Unauthorized

## Deliverable
- here is the link to the postmman collection - https://.postman.co/workspace/My-Workspace~688b9bdd-2c35-4003-882c-c0f1733ba82d/request/27363102-8fe8a126-06be-4a6e-aad6-ac97aaa88c54?action=share&creator=27363102&ctx=documentation
- i have added screenshots to the tests on postman in this folder named with test name
