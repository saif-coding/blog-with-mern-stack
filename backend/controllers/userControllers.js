const UserModel = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "user already exict please login" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashPassword });
    await newUser.save();
    return res.status(201).json({ message: "user register successfuly" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "register failed" });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res
      .status(200)
      .json({ message: "user login successfuly", token, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "login failed" });
  }
};

const userLogout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    return res.status(200).json({ message: "user logout successfully " });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "logout error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find().select("-password"); // Don't expose passwords
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Failed to fetch users" });
  }
};

const getSingleUser = async (req, res) => {
  const userId = req.user.userId;
  try {
    const user = await UserModel.findById(userId).select("-password");
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log("Error getting user:", error.message);
    res.status(500).json({ message: "Server error while getting user" });
  }
};

module.exports = { userRegister, userLogin, userLogout, getAllUsers, getSingleUser };
