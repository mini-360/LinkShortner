import { User } from "../models/user.models.js";

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.render("home"); // here i will pass another parameter for nav bar so that user can get logout option
}

export { handleUserSignup };
