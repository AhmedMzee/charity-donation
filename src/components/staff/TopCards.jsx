import React from "react";
import { UserGroupIcon, ClipboardDocumentListIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const TopCards = () => {
  const stats = [
    {
      id: 1,
      name: "Total Beneficiaries",
      value: 42,
      icon: <UserGroupIcon className="h-6 w-6 text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      id: 2,
      name: "Assigned Projects",
      value: 5,
      icon: <ClipboardDocumentListIcon className="h-6 w-6 text-green-600" />,
      bg: "bg-green-100",
    },
    {
      id: 3,
      name: "Total Allocated (USD)",
      value: "$2,300",
      icon: <CurrencyDollarIcon className="h-6 w-6 text-yellow-600" />,
      bg: "bg-yellow-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {stats.map((item) => (
        <div
          key={item.id}
          className={`p-5 shadow rounded-lg flex items-center justify-between ${item.bg}`}
        >
          <div>
            <p className="text-sm font-medium text-gray-600">{item.name}</p>
            <h2 className="text-xl font-bold text-gray-800">{item.value}</h2>
          </div>
          <div>{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default TopCards;
