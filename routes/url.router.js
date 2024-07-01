import express from "express";
import {
  handelGenerateNewURL,
  handleGetAnalytics,
} from "../controllers/url.controller.js";

const router = express.Router();

router.post("/", handelGenerateNewURL);

router.get("/analytics/:shortID", handleGetAnalytics);

export default router;
