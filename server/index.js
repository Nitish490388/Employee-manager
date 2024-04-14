import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./dbConnect.js";

const app = express();

dotenv.config({
  path: "./.env"
});

app.get("/", (req, res) => {
  res.status(200).send("O from server");
});

const PORT = process.env.PORT || 8001;

ConnectDB();

app.listen(PORT, () => {
  console.log(`Server is runnig at http://localhost:${PORT}`);
});

