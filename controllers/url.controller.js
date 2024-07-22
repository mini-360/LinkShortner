import { nanoid } from "nanoid";
import { URL } from "../models/url.models.js";
import shortid from "shortid";

async function handelGenerateNewURL(req, res) {
  const body = req.body;
  console.log(body.url);
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }
  const shortID = nanoid(8);
  console.log(shortID);

  await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortID });
}
async function handleGetAnalytics(req, res) {
  const shortID = req.params.shortID;
  console.log(shortID);
  const result = await URL.findOne({ shortID });
  console.log(result);
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

export { handelGenerateNewURL, handleGetAnalytics };
