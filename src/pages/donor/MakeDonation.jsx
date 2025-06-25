import React, { useState } from "react";

const MakeDonation = () => {
  const [projects] = useState([
    { id: 1, name: "Clean Water for Villages" },
    { id: 2, name: "School Kits for Kids" },
    { id: 3, name: "Medical Supplies Support" },
  ]);

  const [selectedProject, setSelectedProject] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();
    if (!selectedProject || !amount) {
      setMessage("Please select a project and enter an amount.");
      return;
    }

    // Here you'd send to backend via fetch() or axios
    console.log("Donation Submitted:", { project: selectedProject, amount });
    setMessage(`✅ Thank you! Your donation of $${amount} was submitted.`);

    // Reset form
    setSelectedProject("");
    setAmount("");
  };

  return (
    <div className="max-w-xl bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Make a Donation</h1>
      {message && <p className="mb-4 text-green-600">{message}</p>}

      <form onSubmit={handleDonate} className="space-y-4">
        {/* Select Project */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Select Project</label>
          <select
            className="w-full border px-4 py-2 rounded"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            required
          >
            <option value="">-- Choose a project --</option>
            {projects.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* Amount */}
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

        {/* Submit */}
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
