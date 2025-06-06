import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectdb } from "./lib/db.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(cookieParser());
connectdb();

app.listen(5001, () => {
  console.log("Prot connected at", process.env.PORT);
});
