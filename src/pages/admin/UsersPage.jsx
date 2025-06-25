import React, { useState, useEffect } from "react";
import Modal from "../../components/admin/Modal";
import {
  getUsers,
  registerUser,
  updateUser,
  deleteUser,
} from "../../api/auth";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    id: null,
    username: "",
    email: "",
    role: "Donor",
    password: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userPayload = { ...formData };
      if (!userPayload.password) delete userPayload.password;

      if (editMode) {
        await updateUser(userPayload.id, userPayload);
      } else {
        await registerUser(userPayload);
      }

      await loadUsers();
      setFormData({ id: null, username: "", email: "", role: "Donor", password: "" });
      setEditMode(false);
      setIsModalOpen(false);
    } catch (err) {
      console.error("Failed to save user", err);
      alert("Something went wrong");
    }
  };

  const handleEdit = (user) => {
    setFormData({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      password: "",
    });
    setEditMode(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        await loadUsers();
      } catch (err) {
        console.error("Failed to delete user", err);
      }
    }
  };

  const filteredUsers = users.filter((u) =>
    (u.username?.toLowerCase() || "").includes(search.toLowerCase()) ||
    (u.email?.toLowerCase() || "").includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

  return (
    <div className="flex">
      <main className="flex-1 p-6 bg-gray-50">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Users</h1>
          <button
            onClick={() => {
              setFormData({ id: null, username: "", email: "", role: "Donor", password: "" });
              setEditMode(false);
              setIsModalOpen(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            + Register User
          </button>
        </div>

        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-4 border px-4 py-2 rounded"
        />

        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button onClick={() => handleEdit(user)} className="text-blue-600 hover:underline">Edit</button>
                    <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
              {paginatedUsers.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-4 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full border px-3 py-2 rounded"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
            <input
              type="password"
              placeholder="Password"
              className="w-full border px-3 py-2 rounded"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required={!editMode}
            />
            <select
              className="w-full border px-3 py-2 rounded"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
              <option value="Donor">Donor</option>
              <option value="Staff">Staff</option>
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
