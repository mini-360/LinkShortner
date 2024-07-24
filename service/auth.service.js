import jwt from "jsonwebtoken";

const secret = "Abhay@123#";

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    secret
  );
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null; // Handle token verification error
  }
}

export { setUser, getUser };
