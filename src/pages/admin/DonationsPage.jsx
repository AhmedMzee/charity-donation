import React from "react";

const DonationsPage = () => {
  const donations = [
    { id: 1, donor: "Asha Salum", amount: 100, project: "Clean Water", date: "2025-06-01" },
    { id: 2, donor: "Hamza Khamis", amount: 250, project: "School Kits", date: "2025-06-10" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Donations</h1>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2">Donor</th>
              <th className="px-4 py-2">Amount (USD)</th>
              <th className="px-4 py-2">Project</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((d) => (
              <tr key={d.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{d.donor}</td>
                <td className="px-4 py-2">${d.amount}</td>
                <td className="px-4 py-2">{d.project}</td>
                <td className="px-4 py-2">{d.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationsPage;
