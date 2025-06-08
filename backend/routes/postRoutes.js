const express = require("express");
const varifyToken = require("../middlewares/varifyToken");
const isAdmin = require("../middlewares/isAdmin");
const upload = require("../middlewares/multer");
const {
  addPost,
  getAllPost,
  getSinglePost,
  deleteSinglePost,
  updatePost,
} = require("../controllers/postControllers");
const postRoutes = express.Router();

postRoutes.post("/add", upload.single("image"), varifyToken,isAdmin, addPost);
postRoutes.get("/get", varifyToken, getAllPost);
postRoutes.get("/getsingle/:id", varifyToken, getSinglePost);
postRoutes.delete("/delete/:id", varifyToken,isAdmin, deleteSinglePost);
postRoutes.put("/update/:id", upload.single("image"), varifyToken,isAdmin, updatePost);

module.exports = postRoutes;
