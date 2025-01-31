export interface PrimeRequest {
  number: number;
}

export interface PrimeResponse {
  is_prime: boolean;
}

export interface ErrorResponse {
  error: string;
}
