import React, { useState, useEffect } from "react";
import Modal from "../../components/staff/Modal";
import {
  fetchProjects,
  fetchBeneficiaries,
  createBeneficiary,
} from "../../api/auth";

const ManageBeneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "",
    projectId: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch projects and beneficiaries
  useEffect(() => {
    const loadData = async () => {
      try {
        const projectsRes = await fetchProjects();
        setProjects(projectsRes);

        const beneficiariesRes = await fetchBeneficiaries();
        setBeneficiaries(beneficiariesRes);
      } catch (err) {
        console.error("Error loading data:", err);
      }
    };

    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addedById = 2; // Replace with actual logged-in user ID
      const payload = {
        name: formData.name,
        age: formData.age,
        location: formData.location,
      };

      await createBeneficiary(payload, formData.projectId, addedById);
      alert("Beneficiary added!");

      // Refresh list from server
      const refreshed = await fetchBeneficiaries();
      setBeneficiaries(refreshed);

      setFormData({ name: "", age: "", location: "", projectId: "" });
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error saving beneficiary:", err);
      alert("Failed to save beneficiary");
    }
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
            <th className="px-4 py-2">Project</th>
          </tr>
        </thead>
        <tbody>
          {beneficiaries.map((b, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-2">{b.name}</td>
              <td className="px-4 py-2">{b.age}</td>
              <td className="px-4 py-2">{b.location}</td>
              <td className="px-4 py-2">{b.project?.name || "N/A"}</td>
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
          <select
            className="w-full border px-3 py-2 rounded"
            value={formData.projectId}
            onChange={(e) => setFormData({ ...formData, projectId: e.target.value })}
            required
          >
            <option value="">Select Project</option>
            {projects.map((proj) => (
              <option key={proj.id} value={proj.id}>
                {proj.name}
              </option>
            ))}
          </select>

          <button className="w-full bg-green-600 text-white py-2 rounded">Save</button>
        </form>
      </Modal>
    </div>
  );
};

export default ManageBeneficiaries;
