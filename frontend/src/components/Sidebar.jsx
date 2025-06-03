import { FaHome, FaBlog, FaUser, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-full md:w-64 bg-gray-900 text-white h-screen p-6 fixed">
      <h2 className="text-2xl font-bold mb-6">📝 MyBlog Admin</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaHome /> Dashboard
        </li>
        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaBlog /> Posts
        </li>
        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaUser /> Users
        </li>
        <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaSignOutAlt /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
