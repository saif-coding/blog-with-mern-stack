import React from "react";
import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts.";
import Categories from "../components/Categories";
import AboutBlog from "../components/AboutBlog";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedPosts />
      <Categories />
      <AboutBlog />
      <Newsletter />
    </div>
  );
}

export default Home;
