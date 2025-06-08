import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectdb } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
connectdb();

app.listen(5001, () => {
  console.log("Prot connected at", process.env.PORT);
});
