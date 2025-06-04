import React, { useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { IoArrowBackCircle } from "react-icons/io5";
import { useEffect } from "react";
import { PostContext } from "../context/PostContext";
function PostDetails() {
  const navigate = useNavigate();
  const { getAllPosts } = useContext(PostContext);
  const { id } = useParams();
  const [post, setPost] = useState([]);
  console.log(post, "single post");

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
  }, [id]);

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
          className="bg-blue-500 capitalize rounded-md mt-10 text-white font-semibold px-4 py-1"
        >
          delete post
        </button>
      </div>
    </section>
  );
}

export default PostDetails;
