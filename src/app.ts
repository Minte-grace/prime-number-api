import express from "express";
import config from "config";
import primeRoutes from "./routes/primeRoutes";

const app = express();

app.use(express.json());
app.use("/api", primeRoutes);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
