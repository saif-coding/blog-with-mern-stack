const express = require("express");
const varifyToken = require("../middlewares/varifyToken");
const upload = require("../middlewares/multer");
const { addPost, getAllPost } = require("../controllers/postControllers");
const postRoutes = express.Router();

postRoutes.post("/add", upload.single("image"), varifyToken, addPost);
postRoutes.get("/get", varifyToken, getAllPost);

module.exports = postRoutes;
