import React, { useState } from "react";
import Modal from "../../components/admin/Modal";


const UsersPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@cdt.org", role: "Donor" },
    { id: 2, name: "Bob", email: "bob@cdt.org", role: "Staff" },
  ]);

  const [formData, setFormData] = useState({ name: "", email: "", role: "Donor" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (e) => {
    e.preventDefault();
    setUsers([...users, { ...formData, id: Date.now() }]);
    setFormData({ name: "", email: "", role: "Donor" });
    setIsModalOpen(false);
  };

  return (
    <div className="flex">
      
      <main className="flex-1 bg-gray-50 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Users</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow"
          >
            + Add User
          </button>
        </div>

        {/* Users Table */}
        <div className="bg-white shadow rounded overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{u.name}</td>
                  <td className="px-4 py-2">{u.email}</td>
                  <td className="px-4 py-2">{u.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <Modal title="Register New User" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <form onSubmit={handleAddUser} className="space-y-4">
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
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded"
            >
              Register
            </button>
          </form>
        </Modal>
      </main>
    </div>
  );
};

export default UsersPage;
