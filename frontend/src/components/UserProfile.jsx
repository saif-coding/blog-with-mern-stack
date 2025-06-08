import { FaUserCircle } from "react-icons/fa";
import { MdEmail, MdDateRange } from "react-icons/md";
import { UserContext } from "./../context/UserContext";
import { useContext } from "react";
const UserProfile = () => {
  const { users } = useContext(UserContext);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full space-y-6">
        <div className="flex items-center justify-center">
          {users?.profileImage ? (
            <img
              src={users.profileImage}
              alt="Profile"
              className="w-28 h-28 object-cover rounded-full border-4 border-blue-500 shadow-md"
            />
          ) : (
            <FaUserCircle className="text-gray-400 text-[112px]" />
          )}
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{users?.name}</h2>
          <p className="text-sm text-gray-500 italic">
            Role: <span className="font-medium">{users?.role}</span>
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-600">
            <MdEmail className="text-xl text-blue-600" />
            <span>{users?.email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <MdDateRange className="text-xl text-green-600" />
            <span>Joined: {new Date(users?.createdAt).toDateString()}</span>
          </div>
        </div>

        <div className="pt-4 border-t text-center text-sm text-gray-500">
          <p className="mb-1">Manage your profile settings</p>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
