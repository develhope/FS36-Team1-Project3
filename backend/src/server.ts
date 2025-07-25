import express from "express";
import "express-async-errors";
import "./database/dbClient.js";
import morgan from "morgan";
import dotenv from "dotenv";
import { apiRouter } from "./routes/api.js";
import { initializeDatabase } from "./database/dbClient.js";

// Verifica NODE_ENV
const env = process.env.NODE_ENV;
if (!env) throw new Error("NODE_ENV non impostato");

// Carica .env.<environment>
const result = dotenv.config({ path: `.env.${env}` });
if (result.error) {
  throw result.error;
}

// Verifica che PORT esista
const port = process.env.PORT || 3000;
if (!port) throw new Error(`PORT non definita in .env.${env}`);

export const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", apiRouter);

// Avvia il server solo dopo aver inizializzato il database
const startServer = async () => {
  //await initializeDatabase();

  app.listen(port, () => {
    console.log(`Il server sta funzionando sul http://localhost:${port}/api`);
  });
};

startServer();
