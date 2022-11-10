import express from "express";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

// allows us to remove try catch in most cases for async func
import "express-async-errors";

// http logger
import morgan from "morgan";

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import authenticateUser from "./middleware/auth.js";

//routers
import articlesRouter from "./routes/articlesRoutes.js";
import authRouter from "./routes/authRoutes.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

const app = express();
dotenv.config();
app.use(express.json());

// secure headers
app.use(helmet());

// sanitize input
app.use(xss());

// prevent mongoDB injection
app.use(mongoSanitize());

// heroku will add NODE_ENV var
// otherwise in dev we use morgan to log http requests to console
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
const PORT = process.env.PORT || 5000;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "../client/build")));

// routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});
app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});
app.use("/api/v1/articles", authenticateUser, articlesRouter);
app.use("/api/v1/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
