const express = require("express");
const {
  userRegister,
  userLogin,
  userLogout,
} = require("../controllers/userControllers");
const userRoutes = express.Router();

userRoutes.post("/register", userRegister);
userRoutes.post("/login", userLogin);
userRoutes.post("/logout", userLogout);

module.exports = userRoutes;
