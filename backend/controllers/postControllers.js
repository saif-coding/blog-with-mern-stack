const PostModel = require("../models/postModels");
const uploadCloudinary = require("../middlewares/cloudinary");
const path = require("path");
const addPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.userId;
    const imageUrl = await uploadCloudinary(req.file.path);
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }
    const post = new PostModel({
      title,
      description,
      image: imageUrl,
      author: userId,
    });
    await post.save();
    return res.status(201).json({ message: "post create successfuly", post });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error of post creating" });
  }
};

const getAllPost = async (req, res) => {
  try {
    const userId = req.user.userId;
    const allPosts = await PostModel.find();
    return res.status(200).json(allPosts);
  } catch (error) {
    console.log(error);
  }
};

const getSinglePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await PostModel.findById(id).populate("author");
    if (!post) {
      return res.status(404).json({ message: "post not found by id" });
    }
    res.json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "single post error" });
  }
};

const deleteSinglePost = async (req, res) => {
  try {
    const id = req.params.id;
    const deletePost = await PostModel.findByIdAndDelete(id);
    if (!deletePost) {
      return res.status(404).json({ message: "post not found" });
    }
    return res.status(200).json({ message: "post deleted successfully " });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error of delete post" });
  }
};

const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, image } = req.body;
    const updateurl = await uploadCloudinary(req.file.path);
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }
    const updating = await PostModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
        image: updateurl,
      },
      { new: true }
    );
    return res.status(200).json(updating);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error of update post" });
  }
};
module.exports = {
  addPost,
  getAllPost,
  getSinglePost,
  deleteSinglePost,
  updatePost,
};
