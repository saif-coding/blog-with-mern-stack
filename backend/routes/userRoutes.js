const express = require("express");
const varifyToken = require("../middlewares/varifyToken");
const {
  userRegister,
  userLogin,
  userLogout,
  getAllUsers,
} = require("../controllers/userControllers");
const userRoutes = express.Router();

userRoutes.post("/register", userRegister);
userRoutes.post("/login", userLogin);
userRoutes.post("/logout", userLogout);
userRoutes.get("/getall", varifyToken, getAllUsers);

module.exports = userRoutes;
