import React, { useState, useEffect } from "react";
import Modal from "../../components/staff/Modal";
import {
  fetchProjects,
  fetchBeneficiaries,
  createAllocation,
  fetchAllocations,
  updateAllocation,
  deleteAllocation,
} from "../../api/auth";

const AllocateDonations = () => {
  const [allocations, setAllocations] = useState([]);
  const [projects, setProjects] = useState([]);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [formData, setFormData] = useState({
    projectId: "",
    beneficiaryId: "",
    amount: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    try {
      const [allocs, projs, bens] = await Promise.all([
        fetchAllocations(),
        fetchProjects(),
        fetchBeneficiaries(),
      ]);
      setAllocations(allocs);
      setProjects(projs);
      setBeneficiaries(bens);
    } catch (err) {
      console.error("Failed to load data:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?.id || 2; // TEMP fallback

      if (!userId) throw new Error("User ID is required");

      if (editMode) {
        await updateAllocation(editingId, {
          projectId: formData.projectId,
          beneficiaryId: formData.beneficiaryId,
          amount: parseFloat(formData.amount),
          userId,
        });
        setMessage("✅ Allocation updated!");
      } else {
        await createAllocation({
          projectId: formData.projectId,
          beneficiaryId: formData.beneficiaryId,
          amount: parseFloat(formData.amount),
          userId,
        });
        setMessage("✅ Allocation added!");
      }

      setFormData({ projectId: "", beneficiaryId: "", amount: "" });
      setIsModalOpen(false);
      setEditMode(false);
      setEditingId(null);
      loadAll();
    } catch (err) {
      console.error("Error submitting allocation", err);
      setMessage("❌ Failed to save allocation");
    }
  };

  const handleEdit = (allocation) => {
    setFormData({
      projectId: allocation.project.id,
      beneficiaryId: allocation.beneficiary.id,
      amount: allocation.amount,
    });
    setEditingId(allocation.id);
    setEditMode(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this allocation?")) {
      try {
        await deleteAllocation(id);
        loadAll();
      } catch (err) {
        console.error("Failed to delete allocation:", err);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Allocate Donations</h1>
        <button
          onClick={() => {
            setIsModalOpen(true);
            setEditMode(false);
            setFormData({ projectId: "", beneficiaryId: "", amount: "" });
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Allocate
        </button>
      </div>

      {message && <p className="text-green-600 mb-3">{message}</p>}

      <table className="min-w-full bg-white rounded shadow">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">Project</th>
            <th className="px-4 py-2">Beneficiary</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Allocated By</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allocations.map((a) => (
            <tr key={a.id} className="border-t">
              <td className="px-4 py-2">{a.project?.name}</td>
              <td className="px-4 py-2">{a.beneficiary?.name}</td>
              <td className="px-4 py-2">${a.amount}</td>
              <td className="px-4 py-2">{a.allocatedBy?.username || "N/A"}</td>
              <td className="px-4 py-2">
                {a.allocatedAt ? new Date(a.allocatedAt).toLocaleString() : "N/A"}
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleEdit(a)}
                  className="text-blue-600 mr-3"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(a.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <Modal
        title={editMode ? "Edit Allocation" : "New Allocation"}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <select
            className="w-full border px-3 py-2 rounded"
            value={formData.beneficiaryId}
            onChange={(e) => setFormData({ ...formData, beneficiaryId: e.target.value })}
            required
          >
            <option value="">Select Beneficiary</option>
            {beneficiaries.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            placeholder="Amount"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            required
          />

          <button className="w-full bg-green-600 text-white py-2 rounded">
            {editMode ? "Update Allocation" : "Save Allocation"}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AllocateDonations;
