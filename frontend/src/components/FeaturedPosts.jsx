import React, { useContext } from "react";
import { PostContext } from "./../context/PostContext";
import { Link } from "react-router-dom";
function FeaturedPosts() {
  const { allPosts } = useContext(PostContext);

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-xl shadow-md border overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 line-clamp-2">{post.description}</p>
                <Link
                  to={`/postdetails/${post._id}`}
                  className="text-blue-600 text-sm font-medium mt-2 inline-block hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPosts;
