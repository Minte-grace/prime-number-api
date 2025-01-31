# Prime Number API

A simple Node.js + TypeScript API that checks whether a given number is prime.  

---

## Table of Contents
- [Description](#description)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
  - [Endpoint](#endpoint)
  - [Example Request](#example-request)
- [Scripts](#scripts)
- [Testing](#testing)
- [License](#license)

---

## Description

This API exposes a single endpoint `POST /api/is-prime` that takes a JSON body with a `number` parameter and responds with either:
- `{ "is_prime": true }` if the number is prime
- `{ "is_prime": false }` if not prime
- Or an error message if the input is invalid.

Built with **Node.js**, **Express**, and **TypeScript**. Tested using **Jest** and **Supertest**.

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
├── .gitignore
├── package.json
├── tsconfig.json
└── jest.config.js
```

1. **`src/types`** – Contains TypeScript interfaces for requests and responses.  
2. **`src/services`** – Business logic (primality checking).  
3. **`src/controllers`** – Controllers that handle requests, validate inputs, and return responses.  
4. **`src/routes`** – Defines API routes and attaches controllers.  
5. **`tests`** – Jest test files to verify correctness.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Minte-grace/prime-number-api.git
   cd prime-number-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   *(or `yarn` if you prefer Yarn)*

3. **Build the project**:
   ```bash
   npm run build
   ```
   - Compiles TypeScript into JavaScript in the `dist` folder.

---

## Usage

### Endpoint

- **POST** `/api/is-prime`
  - **Request Body**:
    ```json
    {
      "number": 17
    }
    ```
  - **Response**:
    ```json
    {
      "is_prime": true
    }
    ```
  or
  ```json
  {
    "is_prime": false
  }
  ```
  or, for invalid input:
  ```json
  {
    "error": "Please provide a non-negative number"
  }
  ```

### Example Request

Using `curl`:
```bash
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"number":17}' \
     http://localhost:3000/api/is-prime
```
**Response**:  
```json
{
  "is_prime": true
}
```

---

## Scripts

- **`npm run dev`**  
  Runs the server in development mode (using `ts-node-dev`), auto-reloading on changes.

- **`npm run build`**  
  Compiles TypeScript into the `dist` folder.

- **`npm start`**  
  Starts the compiled app from `dist/app.js` on port 3000 (default).

- **`npm test`**  
  Runs the Jest test suite.

---

## Testing

1. **Run tests**:
   ```bash
   npm test
   ```
2. **Test coverage** includes:
   - Prime numbers (2, 3, 5, 7, etc.)
   - Non-prime numbers (0, 1, 4, 6, etc.)
   - Error handling (negative numbers, missing payload, etc.)

---

## License

[MIT](https://opensource.org/licenses/MIT) — free to use and modify. Contributions welcome!  

---

### Author
**Minte-grace**  