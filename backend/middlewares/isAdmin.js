const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModels");
const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Not authorized login first" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await UserModel.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    if (user.role !== "admin") {
      return res
        .status(400)
        .json({ message: " unauthorized user is not admin" });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Not authorized, invalid token" });
  }
};

module.exports = isAdmin;
