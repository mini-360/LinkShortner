import express from "express";
import  {handleGenerateNewShortURL,handleGetAnalytice}  from "../controllers/url.controller.js";

const router = express.Router();

router.post("/", handleGenerateNewShortURL);


router.get("/analytics/:shortId",handleGetAnalytice)

export default router;
