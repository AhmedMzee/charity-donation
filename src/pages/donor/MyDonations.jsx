import React, { useEffect, useState } from "react";
import axios from "axios";

const MyDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "http://localhost:8080/api/donations";

  useEffect(() => {
    const fetchAllDonations = async () => {
      try {
        const response = await axios.get(API_URL);
        setDonations(response.data);
      } catch (err) {
        setError("Failed to load donations.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllDonations();
  }, []);

  if (loading) return <p>Loading donations...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Donations</h1>

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Donor</th>
              <th className="px-4 py-2">Project</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {donations.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No donations found.
                </td>
              </tr>
            ) : (
              donations.map((d) => (
                <tr key={d.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">${d.amount}</td>
                  <td className="px-4 py-2">{d.donor?.username || "Anonymous"}</td>
                  <td className="px-4 py-2">{d.project?.name || "N/A"}</td>
                  <td className="px-4 py-2">
                    {new Date(d.date).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDonations;
