import express from "express";
import { handleUserSignUp,handleUserLogin } from "../controllers/user.controller.js";

const routerUser = express.Router();

routerUser.post("/", handleUserSignUp);
routerUser.post("/login",handleUserLogin)

export default routerUser;
