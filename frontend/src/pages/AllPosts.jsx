import React, { useContext } from "react";
import { PostContext } from "../context/PostContext.jsx";
import { Link } from "react-router-dom";
const AllPosts = () => {
  const { allPosts } = useContext(PostContext);
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">All Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-16">
        {allPosts.map((post) => (
          <div
            key={post._id}
            className="p-4 bg-white rounded-lg shadow-lg border text-sm max-w-80"
          >
            <img
              className="rounded-md max-h-40 w-full object-cover"
              src={post.image}
              alt="officeImage"
            />
            <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">
              {post.title.substring(0,25)}...
            </p>
            <p className="text-gray-500 mt-3 ml-2">{post.description.substring(0,100)}...</p>
            <Link to={`/postdetails/${post._id}`}>
              <button
                type="button"
                className="bg-blue-600 mt-4 cursor-pointer mb-3 ml-2 px-6 py-2 font-medium rounded text-white"
              >
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
