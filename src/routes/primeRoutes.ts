import { Router } from "express";
import primeController from "../controllers/primeController";

const router = Router();

router.post("/is-prime", primeController.checkPrime);

export default router;
