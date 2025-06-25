import React from "react";

const UserForm = ({ formData, setFormData, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
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
        required
      />
      <select
        className="w-full border px-3 py-2 rounded"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        required
      >
        <option value="DONOR">Donor</option>
        <option value="STAFF">Staff</option>
      </select>
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
        Register
      </button>
    </form>
  );
};

export default UserForm;
