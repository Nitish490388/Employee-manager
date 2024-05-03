import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./dbConnect.js";
import adminRoute from "./routes/adminRouter.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";

const app = express();

dotenv.config({
  path: "./.env"
});


app.use(cookieParser());
app.use(cors({ origin: process.env.CORS_URL, credentials: true }));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("common"));

app.use(
  cookieSession({
    name: "session",
    maxAge: 3 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SECRET],
    sameSite: "lax",
    httpOnly: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Ok from server");
});
app.use("/admin", adminRoute);

const PORT = process.env.PORT || 8001;

ConnectDB();

app.listen(PORT, () => {
  console.log(`Server is runnig at http://localhost:${PORT}`);
});

