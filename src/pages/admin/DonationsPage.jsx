const DonationsPage = () => {
  const donations = [
    { id: 1, donor: "Alice", amount: "$300", date: "2025-06-01" },
    { id: 2, donor: "John", amount: "$150", date: "2025-06-02" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Donations</h1>
      <table className="w-full bg-white shadow rounded-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Donor</th>
            <th className="py-3 px-4 text-left">Amount</th>
            <th className="py-3 px-4 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.id} className="border-b hover:bg-gray-100">
              <td className="py-3 px-4">{donation.donor}</td>
              <td className="py-3 px-4">{donation.amount}</td>
              <td className="py-3 px-4">{donation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationsPage;
