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
          <div class="p-4 bg-white rounded-lg shadow-lg border text-sm max-w-80">
            <img
              class="rounded-md max-h-40 w-full object-cover"
              src={post.image}
              alt="officeImage"
            />
            <p class="text-gray-900 text-xl font-semibold ml-2 mt-2">
              {post.title}
            </p>
            <p class="text-gray-500 mt-3 ml-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore..
            </p>
            <Link to={`/postdetails/${post._id}`}>
              <button
                type="button"
                class="bg-blue-600 mt-4 cursor-pointer mb-3 ml-2 px-6 py-2 font-medium rounded text-white"
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
