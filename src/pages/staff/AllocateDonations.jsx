import React, { useState } from "react";

const AllocateDonations = () => {
  const [formData, setFormData] = useState({
    project: "",
    beneficiary: "",
    amount: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Allocation recorded:", formData);
    setMessage("✅ Allocation saved!");
    setFormData({ project: "", beneficiary: "", amount: "" });
  };

  return (
    <div className="max-w-xl bg-white p-6 shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Allocate Donations</h1>
      {message && <p className="text-green-600 mb-3">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Project Name"
          value={formData.project}
          onChange={(e) => setFormData({ ...formData, project: e.target.value })}
          required
        />
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="Beneficiary Name"
          value={formData.beneficiary}
          onChange={(e) => setFormData({ ...formData, beneficiary: e.target.value })}
          required
        />
        <input
          type="number"
          className="w-full border px-3 py-2 rounded"
          placeholder="Amount Allocated"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default AllocateDonations;
