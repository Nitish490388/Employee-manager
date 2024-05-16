import express from "express";
import { getAdmin } from "../controller/dashboardController.js";
import verifyUser from "../middleware/verifyUsers.js";

const route = express.Router();


route.get("/get-admin", verifyUser, getAdmin);

export default route;

