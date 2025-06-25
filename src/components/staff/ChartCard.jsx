import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const ChartCard = () => {
  const barData = {
    labels: ["Project A", "Project B", "Project C"],
    datasets: [
      {
        label: "Donations Allocated ($)",
        data: [500, 1200, 600],
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const pieData = {
    labels: ["Water", "Education", "Health"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ["#60a5fa", "#34d399", "#facc15"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-2">Allocation by Project</h2>
        <Bar data={barData} />
      </div>
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-2">Category Distribution</h2>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default ChartCard;
