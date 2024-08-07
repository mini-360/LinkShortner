import express from "express";
import urlRoute from "./routes/url.router.js";
import { connectToMongoDB } from "./connect.js";
import { URL } from "./models/url.models.js";
import path from "path";
import staticRouter from "./routes/static.router.js";
import userRoute from "./routes/user.router.js"
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

const app = express();

const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDB connected")
);

app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"public")))

app.use("/url", urlRoute);
app.use("/user",userRoute)
app.use("/", staticRouter);


app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
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

app.listen(PORT, () => console.log(`Server Started at PORT : ${PORT}`));
