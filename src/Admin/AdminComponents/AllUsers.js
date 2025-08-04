import React, { useEffect, useState } from "react";
import { useAdmin } from "../../context/AdminContext";

const ITEMS_PER_PAGE = 10;

const AllUsers = () => {
  const { getAllUsers, approveUser } = useAdmin();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers();
      if (data) {
        const userList = data.users || data;
        setUsers(userList);
        setFilteredUsers(userList);
      }
    };
    fetchUsers();
  }, [getAllUsers]);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [searchTerm, users]);

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleApprove = async (userId) => {
    const res = await approveUser(userId);
    if (res) {
      setUsers((prev) =>
        prev.map((user) =>
          user._id === userId ? { ...user, approveStatus: true } : user
        )
      );
    }
  };

  return (
    <div className="px-4 py-4 sm:px-6 sm:py-6 max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Users Management</h2>

      {/* Search */}
      <div className="mb-4 sm:mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-2 sm:p-3 text-sm sm:text-base border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-md text-sm sm:text-base">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="text-left px-4 py-2 sm:px-6 sm:py-3">Name</th>
              <th className="text-left px-4 py-2 sm:px-6 sm:py-3">Email</th>
              <th className="text-left px-4 py-2 sm:px-6 sm:py-3">Status</th>
              <th className="text-left px-4 py-2 sm:px-6 sm:py-3 hidden md:table-cell">User ID</th>
              <th className="text-left px-4 py-2 sm:px-6 sm:py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user._id} className="border-t">
                  <td className="px-4 py-2 sm:px-6 sm:py-4">{user.name}</td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">{user.email}</td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                        user.approved
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {user.approved ? "Approved" : "Pending"}
                    </span>
                  </td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4 text-gray-600 hidden md:table-cell">
                    {user._id}
                  </td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">
                    {!user.approved && (
                      <button
                        onClick={() => handleApprove(user._id)}
                        className="bg-blue-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-blue-700 transition"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center px-4 py-8 sm:px-6 sm:py-10 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <button
          className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-200 text-xs sm:text-sm rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-xs sm:text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-200 text-xs sm:text-sm rounded hover:bg-gray-300 disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllUsers;
