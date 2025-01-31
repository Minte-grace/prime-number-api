import request from "supertest";
import app from "../src/app";

describe("Prime API", () => {
  it("should identify prime numbers correctly", async () => {
    const primes = [2, 3, 5, 7, 11, 13];

    for (const prime of primes) {
      const res = await request(app)
        .post("/api/is-prime")
        .send({ number: prime });

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ is_prime: true });
    }
  });

  it("should identify non-prime numbers correctly", async () => {
    const nonPrimes = [0, 1, 4, 6, 8, 9];

    for (const nonPrime of nonPrimes) {
      const res = await request(app)
        .post("/api/is-prime")
        .send({ number: nonPrime });

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ is_prime: false });
    }
  });

  it("should handle invalid inputs", async () => {
    const res = await request(app).post("/api/is-prime").send({ number: -1 });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
