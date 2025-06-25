import { useEffect, useState } from "react";
import { getAdminSummary } from "../../api/auth"; 

const TopCards = () => {
  const [summary, setSummary] = useState(null);

 useEffect(() => {
  getAdminSummary()
    .then(setSummary)
    .catch((err) => console.error("Failed to fetch summary", err));
}, []);

  if (!summary) return <p className="text-gray-600">Loading summary...</p>;

  const cards = [
    { title: "Total Users", value: summary.totalUsers, color: "blue" },
    { title: "Total Donations", value: `$${summary.totalDonations}`, color: "green" },
    { title: "Total Projects", value: summary.totalProjects, color: "purple" },
    { title: "Total Beneficiaries", value: summary.totalBeneficiaries, color: "cyan" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, i) => (
        <div key={i} className="bg-white rounded-2xl shadow p-5">
          <p className="text-gray-500 text-sm">{card.title}</p>
          <div className="flex justify-between items-end mt-2">
            <h2 className="text-2xl font-bold text-gray-800">{card.value}</h2>
            {/* You can add percentage comparison later if needed */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCards;
