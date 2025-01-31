import { Request, Response } from "express";
import primeService from "../services/primeService";
import { PrimeRequest, PrimeResponse, ErrorResponse } from "../types";

export class PrimeController {
  async checkPrime(
    req: Request<{}, PrimeResponse | ErrorResponse, PrimeRequest>,
    res: Response<PrimeResponse | ErrorResponse>
  ): Promise<void> {
    const { number } = req.body;

    if (typeof number !== "number" || number < 0) {
      res.status(400).json({ error: "Please provide a non-negative number" });
      return;
    }

    const result = primeService.isPrime(number);
    res.json({ is_prime: result });
  }
}

export default new PrimeController();
