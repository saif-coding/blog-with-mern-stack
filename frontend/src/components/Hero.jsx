import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left pl-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
            Discover Insightful{" "}
            <span className="text-blue-600">Developer Blogs</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore tutorials, guides, and thoughts from experienced developers.
            Whether you’re starting out or scaling up, we have content that
            helps you grow.
          </p>
          <Link
            to={"/blogs"}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Browse Articles
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
            alt="Blog Illustration"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
