# Prime-Checking API

A simple API that determines whether a given integer is prime. Built with **Node.js**, **Express**, and **TypeScript**.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Scripts](#scripts)
- [Usage](#usage)
  - [Endpoint](#endpoint)
  - [Example Request](#example-request)
- [Testing](#testing)
- [License](#license)

---

## Features

- **POST** endpoint to check if a number is prime.
- Validates request data (must be a non-negative integer).
- Detailed error handling for invalid inputs.
- Covered by **Jest** tests to ensure correctness.

---

## Project Structure

```
prime-number-api/
├── src/
│   ├── types/
│   │   ├── prime.ts
│   │   └── index.ts
│   ├── services/
│   │   └── primeService.ts
│   ├── controllers/
│   │   └── primeController.ts
│   ├── routes/
│   │   └── primeRoutes.ts
│   └── app.ts
├── tests/
│   └── prime.test.ts
├── package.json
├── tsconfig.json
└── jest.config.js
```

1. **`src/types`**  
   Contains TypeScript interfaces defining request/response structures.

2. **`src/services`**  
   Houses business logic (in this case, the primality check).

3. **`src/controllers`**  
   Defines the `PrimeController` that handles incoming requests and invokes the service logic.

4. **`src/routes`**  
   Binds the controller methods to specific HTTP routes.

5. **`tests`**  
   Contains Jest test files to ensure the endpoint works correctly.

---

## Installation

1. **Clone the repository** (if not already):  
   ```bash
   git clone https://github.com/your-username/prime-number-api.git
   cd prime-number-api
   ```

2. **Install dependencies**:  
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. **Build the project**:  
   ```bash
   npm run build
   ```
   This compiles TypeScript files into the `dist` folder.

---

## Scripts

- **`npm run dev`**  
  Starts the server in development mode using `ts-node-dev`, automatically reloading on file changes.

- **`npm run build`**  
  Compiles TypeScript files into JavaScript in the `dist` folder.

- **`npm start`**  
  Runs the compiled app from the `dist` folder (make sure you’ve already run `npm run build` first).

- **`npm test`**  
  Executes the test suite with **Jest**.

---

## Usage

### Endpoint

- **URL**: `POST /api/is-prime`
- **Request Body (JSON)**:
  ```json
  {
    "number": 17
  }
  ```
- **Response (JSON)**:
  ```json
  {
    "is_prime": true
  }
  ```
  or if invalid input is provided (e.g., `-1`):
  ```json
  {
    "error": "Please provide a non-negative number"
  }
  ```

### Example Request

**Using `curl`**:
```bash
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"number":17}' \
     http://localhost:3000/api/is-prime
```
**Response** (if the number is prime):
```json
{
  "is_prime": true
}
```
If the number is not prime:
```json
{
  "is_prime": false
}
```

---

## Testing

1. **Run the tests**:
   ```bash
   npm test
   ```
2. **What is tested**:
   - **Prime numbers** (e.g., 2, 3, 5, 7, etc.)
   - **Non-prime numbers** (e.g., 0, 1, 4, 6, etc.)
   - **Error handling** for invalid inputs (e.g., -1, missing number, etc.)

The tests use [Jest](https://jestjs.io/) and [Supertest](https://github.com/visionmedia/supertest) to simulate requests to your Express server.

---

## License

This project is open-source under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute it as you see fit. See the `LICENSE` file for more details (if applicable).

---

### Author
- **Minte Grace** (GitHub: [@Minte-grace](https://github.com/Minte-grace))

