import React, { useContext } from "react";
import { PostContext } from "../context/postContext";
const AllPosts = () => {
  const { allPosts } = useContext(PostContext);
  return (
    // <div className="max-w-7xl mx-auto p-4">
    //   <h1 className="text-3xl font-bold text-center mb-8">All Blog Posts</h1>

    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {allPosts.map((post) => (
    //       <div
    //         key={post._id}
    //         className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    //       >
    //         <img
    //           src={post.image}
    //           alt={post.title}
    //           className="h-48 w-full object-cover"
    //         />
    //         <div className="p-4 flex flex-col justify-between h-[250px]">
    //           <div>
    //             <h2 className="text-xl font-semibold mb-2 truncate">
    //               {post.title}
    //             </h2>
    //             <p className="text-gray-600 text-sm line-clamp-3">
    //               {post.description}
    //             </p>
    //           </div>
    //           <div className="mt-4">
    //             <p className="text-sm text-gray-400">
    //               By {post.author.name} |{" "}
    //               {new Date(post.createdAt).toLocaleDateString()}
    //             </p>
    //             <a
    //               href={`/posts/${post._id}`}
    //               className="inline-block mt-2 text-blue-600 font-medium hover:underline"
    //             >
    //               Read More →
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">All Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap- px-10">
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
            <button
              type="button"
              class="bg-indigo-500 mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
