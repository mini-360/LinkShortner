import express from "express";
import urlRoute from "./routes/url.router.js";
import connectToMongoDB from "./connect.js";
import { URL } from "./models/url.models.js";
import path from "path";
import staticRouter from "./routes/static.router.js";
import routerUser from "./routes/user.router.js";
import cookieParser from "cookie-parser";
import {restrictToLoggedinUserOnly} from "./middleware/auth.middleware.js"

const app = express();

const PORT = 8001;
connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDB connected ")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/url",restrictToLoggedinUserOnly, urlRoute);
app.use("/user", routerUser);
app.use("/", staticRouter);

app.get("/url/:shortID", async (req, res) => {
  const shortID = req.params.shortID;
  const entry = await URL.findOneAndUpdate(
    {
      shortID,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server started at port : ${PORT}`));
