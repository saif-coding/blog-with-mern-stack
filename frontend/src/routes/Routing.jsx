import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AddPost from "../pages/AddPost";
import AllPosts from "../pages/AllPosts";
import PostDetails from "../pages/PostDetails";
import Dashboard from "../components/Dashboard";
import Update from "../pages/Update";
import UserProfile from "../components/UserProfile";
import { UserContext } from "../context/UserContext";
import UsersList from "../components/UsersList";

function Routing() {
  const { admin } = useContext(UserContext);
  const isAdmin = admin.role === "admin";
  const isUser = admin.role === "user";
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/addpost"
        element={isAdmin ? <AddPost /> : <Navigate to="/" replace />}
      />
      <Route path="/blogs" element={<AllPosts />} />
      <Route path="/postdetails/:id" element={<PostDetails />} />
      <Route
        path="/update/:id"
        element={isAdmin ? <Update /> : <Navigate to="/" replace />}
      />
      <Route
        path="/dashboard"
        element={isAdmin ? <Dashboard /> : <Navigate to="/" replace />}
      />
      <Route
        path="/users"
        element={isAdmin ? <UsersList /> : <Navigate to="/" replace />}
      />
      <Route
        path="/profile"
        element={
          isUser || isAdmin ? <UserProfile /> : <Navigate to="/" replace />
        }
      />
    </Routes>
  );
}

export default Routing;
