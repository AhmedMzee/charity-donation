import React, { useState } from "react";
import Modal from "../../components/admin/Modal";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Clean Water", region: "Pemba", status: "Ongoing" },
    { id: 2, name: "School Kits", region: "Unguja", status: "Completed" },
  ]);
  const [formData, setFormData] = useState({ name: "", region: "", status: "Ongoing" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects([...projects, { id: Date.now(), ...formData }]);
    setFormData({ name: "", region: "", status: "Ongoing" });
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Project
        </button>
      </div>

      <table className="min-w-full bg-white rounded shadow">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">Project Name</th>
            <th className="px-4 py-2">Region</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-t">
              <td className="px-4 py-2">{project.name}</td>
              <td className="px-4 py-2">{project.region}</td>
              <td className="px-4 py-2">{project.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal title="Add Project" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
            placeholder="Region"
            value={formData.region}
            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
            required
          />
          <select
            className="w-full border px-3 py-2 rounded"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
          <button className="w-full bg-blue-600 text-white py-2 rounded">Add</button>
        </form>
      </Modal>
    </div>
  );
};

export default ProjectsPage;
