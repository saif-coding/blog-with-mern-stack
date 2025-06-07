const CommentModel = require("../models/commentModels");
const addComment = async (req, res) => {
  try {
    const { comment } = req.body;
    const id = req.params.id;
    const userId = req.user.userId;
    if (!comment) {
      return res.status(400).json({ message: "Comment text is required" });
    }
    const newComment = new CommentModel({
      comment,
      postId: id,
      author: userId,
    });
    await newComment.save();
    res.status(201).json({ message: "Comment added successfully", comment });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Failed to add comment" });
  }
};

const getComments = async (req, res) => {
  try {
    const id = req.params.id;
    const getCommenting = await CommentModel.find({ postId: id })
      .populate("author", "name email")
      .sort({ createdAt: -1 });
    res.status(200).json(getCommenting);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch comments" });
  }
};

const deleteComments = async (req, res) => {
  try {
    const id = req.params.id;
    const deleting = await CommentModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "comment delete successfully", deleting });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to delete the comment" });
  }
};

module.exports = { addComment, getComments, deleteComments };
