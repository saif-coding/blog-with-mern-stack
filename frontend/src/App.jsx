import React from "react";
import { Toaster } from "react-hot-toast";
import Routing from "./routes/Routing";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <Navbar />
      <Routing />
    </>
  );
}

export default App;
