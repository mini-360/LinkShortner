import express from "express";
import { handleUserSignUp } from "../controllers/user.controller.js";

const routerUser = express.Router();

routerUser.post("/", handleUserSignUp);

export default routerUser;
