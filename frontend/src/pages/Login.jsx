import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        loginData,
        { withCredentials: true }
      );
      if (result.status === 200) {
        toast.success(result.data.message);
        navigate("/");
      }
    } catch (error) {}
  };
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form
        onSubmit={loginHandler}
        className="bg-white text-gray-500 max-w-[340px] mx-auto w-full mt-10 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-bold mb-9 text-center text-gray-800">
          Login
        </h2>

        <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2.5 4.375 3.875 2.906c.667.5 1.583.5 2.25 0L12.5 4.375"
              stroke="#6B7280"
              stroke-opacity=".6"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.875 3.125h-8.75c-.69 0-1.25.56-1.25 1.25v6.25c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Z"
              stroke="#6B7280"
              stroke-opacity=".6"
              stroke-width="1.3"
              stroke-linecap="round"
            />
          </svg>
          <input
            onChange={handleChange}
            className="w-full outline-none bg-transparent py-2.5"
            type="email"
            placeholder="Email"
            name="email"
            value={loginData.email}
            required
          />
        </div>
        <div className="flex items-center mt-2 mb-8 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
          <svg
            width="13"
            height="17"
            viewBox="0 0 13 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
              fill="#6B7280"
            />
          </svg>
          <input
            onChange={handleChange}
            className="w-full outline-none bg-transparent py-2.5"
            type={show ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={loginData.password}
            required
          />
          <div onClick={() => setShow(!show)}>
            {show ? (
              <span classNameName=" flex text-[16px] mr-3">
                <IoEye />
              </span>
            ) : (
              <span className=" flex text-[16px] mr-3">
                <IoMdEyeOff />
              </span>
            )}
          </div>
        </div>
        <button className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">
          Login
        </button>
        <p className="text-center mt-4">
          Don’t have an account?
          <Link to={"/register"} className="text-blue-500 ml-2 underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
