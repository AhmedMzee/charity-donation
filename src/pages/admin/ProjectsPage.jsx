import React, { useState, useEffect } from "react";
import Modal from "../../components/admin/Modal";
import {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../api/auth";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    description: "",
    targetAmount: "",
    receivedAmount: 0,
    status: "Ongoing",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await fetchProjects();
      setProjects(data);
    } catch (err) {
      console.error("Failed to load projects:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        targetAmount: parseFloat(formData.targetAmount),
        receivedAmount: parseFloat(formData.receivedAmount) || 0,
      };

      if (editMode) {
        await updateProject(formData.id, payload);
      } else {
        await createProject(payload);
      }

      await loadProjects();
      closeModal();
    } catch (err) {
      console.error("Project save failed:", err);
      alert("Failed to save project.");
    }
  };

  const handleEdit = (project) => {
    setFormData({
      id: project.id,
      name: project.name,
      description: project.description,
      targetAmount: project.targetAmount,
      receivedAmount: project.receivedAmount,
      status: project.status,
    });
    setEditMode(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    try {
      await deleteProject(id);
      await loadProjects();
    } catch (err) {
      console.error("Failed to delete project:", err);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditMode(false);
    setFormData({
      id: null,
      name: "",
      description: "",
      targetAmount: "",
      receivedAmount: 0,
      status: "Ongoing",
    });
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button
          onClick={() => {
            setEditMode(false);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Project
        </button>
      </div>

      <table className="min-w-full bg-white rounded shadow">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Region / Desc</th>
            <th className="px-4 py-2">Target</th>
            <th className="px-4 py-2">Received</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-t">
              <td className="px-4 py-2">{project.name}</td>
              <td className="px-4 py-2">{project.description}</td>
              <td className="px-4 py-2">${project.targetAmount}</td>
              <td className="px-4 py-2">${project.receivedAmount}</td>
              <td className="px-4 py-2">{project.status}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Add/Edit */}
      <Modal
        title={editMode ? "Edit Project" : "Add Project"}
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Project Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Region / Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            placeholder="Target Amount"
            value={formData.targetAmount}
            onChange={(e) => setFormData({ ...formData, targetAmount: e.target.value })}
            required
          />
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            placeholder="Received Amount"
            value={formData.receivedAmount}
            onChange={(e) => setFormData({ ...formData, receivedAmount: e.target.value })}
          />
          <select
            className="w-full border px-3 py-2 rounded"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
            <option value="Paused">Paused</option>
          </select>
          <button className="w-full bg-green-600 text-white py-2 rounded">
            {editMode ? "Update Project" : "Add Project"}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ProjectsPage;
