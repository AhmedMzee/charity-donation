import React, { useState } from "react";
import Modal from "../../components/staff/Modal";

const ManageBeneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([
    { id: 1, name: "Fatma Ali", age: 28, location: "Zanzibar" },
    { id: 2, name: "John Omari", age: 35, location: "Dodoma" },
  ]);
  const [formData, setFormData] = useState({ name: "", age: "", location: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBeneficiaries([...beneficiaries, { ...formData, id: Date.now() }]);
    setFormData({ name: "", age: "", location: "" });
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Manage Beneficiaries</h1>
        <button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 text-white px-4 py-2 rounded">
          + Add Beneficiary
        </button>
      </div>

      <table className="min-w-full bg-white rounded shadow">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {beneficiaries.map((b) => (
            <tr key={b.id} className="border-t">
              <td className="px-4 py-2">{b.name}</td>
              <td className="px-4 py-2">{b.age}</td>
              <td className="px-4 py-2">{b.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal title="Add Beneficiary" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            placeholder="Age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />
          <button className="w-full bg-green-600 text-white py-2 rounded">Save</button>
        </form>
      </Modal>
    </div>
  );
};

export default ManageBeneficiaries;
