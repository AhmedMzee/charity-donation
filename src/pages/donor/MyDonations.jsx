const MyDonations = () => {
  const donations = [
    { id: 1, amount: "$100", date: "2025-06-01", project: "Clean Water" },
    { id: 2, amount: "$250", date: "2025-05-15", project: "School Kits" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Donations</h1>
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Project</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((d) => (
              <tr key={d.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{d.amount}</td>
                <td className="px-4 py-2">{d.date}</td>
                <td className="px-4 py-2">{d.project}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDonations;
