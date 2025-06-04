import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const PostContext = createContext();
function PostContextProvider({ children }) {
  const [allPosts, setAllPosts] = useState([]);
  const getAllPosts = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/posts/get`,
        { withCredentials: true }
      );
      setAllPosts(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider value={{getAllPosts, allPosts, setAllPosts }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostContextProvider;
