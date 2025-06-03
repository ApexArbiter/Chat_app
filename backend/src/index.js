import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectdb } from "./lib/db.js";

const app = express();
dotenv.config();
app.use(express.json())
app.use("/api/auth", authRoutes);

connectdb()

app.listen(5001, () => {
  console.log("Prot connected at",process.env.PORT);
});
