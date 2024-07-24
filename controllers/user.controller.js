import { User } from "../models/user.models.js";
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
  const token = setUser(user);
  res.cookie("uid", token, {
    domain:".abhayraj.dev" // any domain that has with abhayraj.dev
  });
  return res.redirect("/");
}

export { handleUserSignUp, handleUserLogin };
