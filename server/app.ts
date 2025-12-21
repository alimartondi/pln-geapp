import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";

import usersRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import { errorHandler } from "./middleware/errorHandler.js";

const REQUIRED_ENVS = [
  "JWT_SECRET",
  "DB_HOST",
  "DB_NAME",
  "DB_USER",
];

for (const key of REQUIRED_ENVS) {
  if (!process.env[key]) {
    console.error(`❌ ENV ${key} is missing`);
    process.exit(1);
  }
}

const app = express();

app.use(cookieParser());

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

app.use(express.json());
app.use(helmet());

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);

app.get("/", (_req, res) => res.send("Geapp API running"));

app.use(errorHandler);

export default app;