import React, { useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { IoArrowBackCircle } from "react-icons/io5";
import { useEffect } from "react";
import { PostContext } from "../context/PostContext";
import { toast } from "react-hot-toast";
function PostDetails() {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [getComment, setGetComment] = useState([]);
  const { getAllPosts } = useContext(PostContext);
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const getSinglePost = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/posts/getsingle/${id}`,
        { withCredentials: true }
      );
      setPost(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSinglePost();
    getAllComments();
  }, [id]);

  // deleting post
  const deletePost = async (id) => {
    try {
      const result = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/posts/delete/${id}`,
        { withCredentials: true }
      );
      if (result.status === 200) {
        navigate("/blogs");
      }
      await getAllPosts();
    } catch (error) {
      console.log(error);
    }
  };

  // add comment on post
  const addComments = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/comments/add/${id}`,
        { comment },
        { withCredentials: true }
      );
      if (result.status === 201) {
        toast.success(result.data.message);
        await getAllComments();
      }
      console.log(result.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.error);
    }
  };

  // get comments
  const getAllComments = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/comments/get/${id}`,
        { withCredentials: true }
      );
      setGetComment(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  //delete comments
  const deletingComments = async (commentId) => {
    try {
      const result = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/comments/delete/${commentId}`,
        { withCredentials: true }
      );
      if (result.status === 200) {
        toast.success(result.data.message);
      }
      await getAllComments();
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <Link to={"/blogs"}>
        <div className=" flex items-center text-xl gap-2 cursor-pointer">
          <IoArrowBackCircle className=" text-2xl mt-1 text-blue-600" />
          <span className=" text-blue-600 font-semibold">Back</span>
        </div>
      </Link>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="rounded-xl object-cover w-full max-h-[400px] border shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 leading-tight">{post.title}</h1>

        <article className="prose prose-lg max-w-none mb-6 prose-headings:text-gray-900 prose-p:text-gray-700 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1">
          {/* Convert markdown-like text to actual HTML if needed */}
          {post.description}
        </article>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <p> Author: {post.author?.name}</p>
        </div>
        <button
          onClick={() => deletePost(post._id)}
          className="bg-red-500 capitalize cursor-pointer rounded-md mt-10 text-white font-semibold px-4 py-1"
        >
          delete post
        </button>
        <Link to={`/update/${post._id}`}>
          <button className="bg-blue-500 capitalize cursor-pointer rounded-md ml-5 mt-10 text-white font-semibold px-4 py-1">
            Update post
          </button>
        </Link>

        <div className="mt-2 relative ">
          <input
            className=" rounded-md border p-4"
            type="text"
            name="comment"
            placeholder="add comments"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <button
            onClick={() => addComments()}
            className="bg-green-500  ml-2 capitalize cursor-pointer rounded-md mt-10 text-white font-semibold px-4 py-1"
          >
            {" "}
            save comment
          </button>
        </div>
        <div className="space-y-4 mt-2">
          {getComment.map((comment) => (
            <div
              key={comment._id}
              className="p-4 border rounded-md shadow-sm bg-white"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-blue-700">
                  {comment.author?.name || "Anonymous"}
                </h3>
                <p className="text-xs text-gray-500">
                  {new Date(comment.createdAt).toLocaleString()}
                </p>
                <button
                  onClick={() => deletingComments(comment._id)}
                  className="bg-red-500 text-white px-2 cursor-pointer py-1 rounded-lg capitalize"
                >
                  delete comment
                </button>
              </div>
              <p className="text-gray-800">{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PostDetails;
