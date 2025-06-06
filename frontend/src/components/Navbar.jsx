import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaChevronDown } from "react-icons/fa";
import { UserContext } from "./../context/UserContext";
import axios from "axios";
import { toast } from "react-hot-toast";
function Navbar() {
  const navigate = useNavigate();
  const { usersData, setUsersData } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);

  const logout = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/logout`,
        {},

        { withCredentials: true }
      );
      if (result.status === 200) {
        setUsersData("");
        navigate("/login");
        toast.success(result.data.message);
      }
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <Link to={"/"}>
        <img
          className="h-9"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
          alt="dummyLogoColored"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center font-semibold gap-8">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/blogs"}>Blogs</Link>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              clip-rule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {usersData.length > 0 ? (
          <Link to={"/dashboard"}>
            <button className="cursor-pointer px-8 py-2 bg-blue-500 hover:bg-blue-700 transition text-white rounded-full">
              Dashboard
            </button>
          </Link>
        ) : (
          <Link to={"/login"}>
            <button className="cursor-pointer px-8 py-2 bg-blue-500 hover:bg-blue-700 transition text-white rounded-full">
              Login
            </button>
          </Link>
        )}

        <div className="relative group inline-block text-left">
          <button className="flex items-center gap-2 px-2 rounded-full py-2 bg-blue-600 text-white hover:bg-blue-700">
            <FaUser />

            <FaChevronDown size={14} />
          </button>

          {/* Dropdown */}
          <div className="absolute left-0 mt- w-40 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-10">
            <ul className="flex flex-col text-sm text-gray-700">
              <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                Profile
              </li>
              <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                Settings
              </li>
              <li
                onClick={() => logout()}
                className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <a href="#" className="block">
          Home
        </a>
        <a href="#" className="block">
          About
        </a>
        <a href="#" className="block">
          Contact
        </a>
        <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
