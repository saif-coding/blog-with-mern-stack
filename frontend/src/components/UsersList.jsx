import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    profile: "https://i.pravatar.cc/150?img=3",
    role: "admin",
    createdAt: "2024-12-01",
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    profile: "https://i.pravatar.cc/150?img=5",
    role: "user",
    createdAt: "2025-01-12",
    status: "inactive",
  },
];

const UsersList = () => {
  const { usersData, admin } = useContext(UserContext);
  console.log(admin, "list");
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">All Users</h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left">Profile</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Created At</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <img
                    src={user.profile}
                    alt={user.name.substring(0, 1)}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                </td>
                <td className="p-4 font-medium">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4 capitalize">{user.role}</td>
                <td className="p-4">
                  {new Date(user?.createdAt).toDateString()}
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      admin.role === "admin"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {admin.role === "admin" ? "active" : "inactive"}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
