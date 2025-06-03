import React from "react";
import { Toaster } from "react-hot-toast";
import Routing from "./routes/Routing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
