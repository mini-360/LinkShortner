import express from "express"
import { handleUserSignup } from "../controllers/user.controller.js"




const router = express.Router()


router.post("/",handleUserSignup)


export default router