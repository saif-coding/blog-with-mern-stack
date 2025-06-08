const express = require("express");
const varifyToken = require("../middlewares/varifyToken");
const {
  userRegister,
  userLogin,
  userLogout,
  getAllUsers,
  getSingleUser,
} = require("../controllers/userControllers");
const isAdim = require("../middlewares/isAdmin");
const userRoutes = express.Router();

userRoutes.post("/register", userRegister);
userRoutes.post("/login", userLogin);
userRoutes.post("/logout", varifyToken, userLogout);
userRoutes.get("/getall", varifyToken, isAdim, getAllUsers);
userRoutes.get("/admin", varifyToken, getSingleUser);

module.exports = userRoutes;
