import express from "express"
import { handleUserSignup,handleUserLogin, getUser } from "../controllers/user.controller.js"




const router = express.Router()

router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);


export default router