import express from "express";
import {
  login,
  logout,
  signup
} from "../controller/adminController.js";
const route = express.Router();

route.post("/signup", signup);
route.post("/login", login);
route.post("/logout", logout);

export default route;