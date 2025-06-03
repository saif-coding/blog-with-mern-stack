import axios from "axios";
import React from "react";
import { createContext } from "react";
export const UserContext = createContext();
function UserContextProvider({ chilren }) {
  const [usersData, setUsersData] = useState([]);

  const getUser = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/get`
      );
      console.log(result.data, 'user');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ usersData, setUsersData }}>
      {chilren}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
