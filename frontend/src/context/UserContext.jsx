import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const UserContext = createContext();
function UserContextProvider({ children }) {
  const [usersData, setUsersData] = useState([]);
  const getUser = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/getall`,
        { withCredentials: true }
      );
      setUsersData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ usersData, setUsersData,getUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
