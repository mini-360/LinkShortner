import { User } from "../models/user.models.js";
import { v4 as uuidv4 } from "uuid";
import { setUser } from "../service/auth.service.js";

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.render("/");
}
async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  // console.log("User ",user);
  if (!user) {
    return res.render("login", {
      error: "Invalid Username or Password",
    });
  }
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);
  return res.redirect("/");
}

export { handleUserSignUp, handleUserLogin };
