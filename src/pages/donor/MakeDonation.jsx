import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

const MakeDonation = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fetch projects on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/projects`);
        setProjects(response.data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects.");
      }
    };
    fetchProjects();
  }, []);

  const handleDonate = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!selectedProjectId || !amount) {
      setError("Please select a project and enter an amount.");
      return;
    }

    if (amount <= 0) {
      setError("Please enter a valid amount greater than zero.");
      return;
    }

    try {
      // TODO: Replace this with actual logged-in user ID from your auth context or session
      const donorId = JSON.parse(localStorage.getItem("user"))?.id || 1;

      await axios.post(`${API_BASE_URL}/donations`, null, {
        params: {
          donorId,
          projectId: selectedProjectId,
          amount,
        },
      });

      setMessage(`✅ Thank you! Your donation of $${amount} was submitted.`);
      setSelectedProjectId("");
      setAmount("");
    } catch (err) {
      console.error("Donation submission failed:", err);
      setError("Failed to submit donation. Please try again.");
    }
  };

  return (
    <div className="max-w-xl bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Make a Donation</h1>

      {message && <p className="mb-4 text-green-600">{message}</p>}
      {error && <p className="mb-4 text-red-600">{error}</p>}

      <form onSubmit={handleDonate} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Select Project</label>
          <select
            className="w-full border px-4 py-2 rounded"
            value={selectedProjectId}
            onChange={(e) => setSelectedProjectId(e.target.value)}
            required
          >
            <option value="">-- Choose a project --</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Amount (USD)</label>
          <input
            type="number"
            min="1"
            placeholder="Enter amount"
            className="w-full border px-4 py-2 rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Donate
        </button>
      </form>
    </div>
  );
};

export default MakeDonation;
