import express from "express";
import { URL } from "../models/url.models.js";

const staticRouter = express.Router();

staticRouter.get("/", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

staticRouter.get("/signup", (req, res) => {
  return res.render("signup");
});
staticRouter.get("/login", (req, res) => {
  return res.render("login");
});

export default staticRouter;
