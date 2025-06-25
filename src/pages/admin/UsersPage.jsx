import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Modal from "./../../components/admin/Modal";

const UsersPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@cdt.org", role: "Donor" },
    { id: 2, name: "Bob", email: "bob@cdt.org", role: "Staff" },
    { id: 3, name: "Charlie", email: "charlie@cdt.org", role: "Admin" },
    { id: 4, name: "David", email: "david@cdt.org", role: "Staff" },
    { id: 5, name: "Eve", email: "eve@cdt.org", role: "Donor" },
    { id: 6, name: "Frank", email: "frank@cdt.org", role: "Donor" },
  ]);

  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", role: "Donor" });
  const [editMode, setEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const usersPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered and paginated users
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIdx = (currentPage - 1) * usersPerPage;
  const paginatedUsers = filteredUsers.slice(startIdx, startIdx + usersPerPage);

  const handleAddOrUpdateUser = (e) => {
    e.preventDefault();
    if (editMode) {
      setUsers((prev) =>
        prev.map((u) => (u.id === selectedId ? { ...formData, id: selectedId } : u))
      );
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }
    setFormData({ name: "", email: "", role: "Donor" });
    setIsModalOpen(false);
    setEditMode(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email, role: user.role });
    setSelectedId(user.id);
    setEditMode(true);
    setIsModalOpen(true);
  };

  return (
    <div className="flex">
   
      <main className="flex-1 p-6 bg-gray-50">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Users</h1>
          <button
            onClick={() => {
              setFormData({ name: "", email: "", role: "Donor" });
              setEditMode(false);
              setIsModalOpen(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            + Add User
          </button>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {paginatedUsers.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-4 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Modal */}
        <Modal
          title={editMode ? "Edit User" : "Register New User"}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditMode(false);
          }}
        >
          <form onSubmit={handleAddOrUpdateUser} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border px-3 py-2 rounded"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border px-3 py-2 rounded"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <select
              className="w-full border px-3 py-2 rounded"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
              <option>Donor</option>
              <option>Staff</option>
              <option>Admin</option>
            </select>
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
              {editMode ? "Update" : "Register"}
            </button>
          </form>
        </Modal>
      </main>
    </div>
  );
};

export default UsersPage;
