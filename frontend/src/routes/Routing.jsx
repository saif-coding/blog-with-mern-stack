import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AddPost from "../pages/AddPost";
import AllPosts from "../pages/AllPosts";
import PostDetails from "../pages/PostDetails";
import Dashboard from "../components/Dashboard";
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addpost" element={<AddPost />} />
      <Route path="/blogs" element={<AllPosts />} />
      <Route path="/postdetails/:id" element={<PostDetails />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default Routing;
