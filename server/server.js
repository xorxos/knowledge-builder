import express from "express";
import mongoose from "mongoose";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";

//routers
import articlesRouter from "./routes/articlesRoutes.js";
import authRouter from "./routes/authRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;
// routes

app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});
app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});
app.use("/api/v1/articles", articlesRouter);
app.use("/api/v1/auth", authRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
