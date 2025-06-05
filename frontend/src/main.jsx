import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PostContextProvider from "./context/PostContext.jsx";
import UserContextProvider from "./context/UserContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
      <PostContextProvider>
        <App />
      </PostContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
