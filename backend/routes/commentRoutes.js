const express = require("express");
const verifyToken = require("../middlewares/varifyToken");
const {
  addComment,
  getComments,
  deleteComments,
} = require("../controllers/commentController");
const varifyToken = require("../middlewares/varifyToken");
const commentRoutes = express.Router();

commentRoutes.post("/add/:id", verifyToken, addComment);
commentRoutes.get("/get/:id", varifyToken, getComments);
commentRoutes.delete("/delete/:id", varifyToken, deleteComments);

module.exports = commentRoutes;
