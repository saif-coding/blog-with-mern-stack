import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { IoArrowBackCircle } from "react-icons/io5";
import { PostContext } from "../context/PostContext";
import { useContext } from "react";
function AddPost() {
  const { getAllPosts } = useContext(PostContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // 🔥 Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading animation
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("image", image);

    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/posts/add`,
        formdata,
        { withCredentials: true }
      );
      if (result.status === 201) {
        toast.success(result.data.message);
        navigate("/");
      }
      await getAllPosts();
      setLoading(false); // Stop loading animation
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-2xl p-8">
        <Link to={"/dashboard"}>
          <div className=" flex items-center text-xl gap-2 cursor-pointer">
            <IoArrowBackCircle className=" text-2xl mt-1 text-blue-600" />
            <span className=" text-blue-600 font-semibold">Back</span>
          </div>
        </Link>

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Add New Post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write your post description"
              rows="5"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Post Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              placeholder="https://example.com/image.jpg"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {loading ? "Posting..." : "Post"}
            </button>
            {loading && (
              <div className="mt-2 text-blue-600">Loading spinner...</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPost;
