const AssignedProjects = () => {
  const projects = [
    { id: 1, name: "Health Pack Distribution", region: "Pemba", status: "Ongoing" },
    { id: 2, name: "Food Aid", region: "Unguja", status: "Completed" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Assigned Projects</h1>
      <div className="bg-white shadow rounded">
        <table className="min-w-full">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Region</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="px-4 py-2">{p.name}</td>
                <td className="px-4 py-2">{p.region}</td>
                <td className="px-4 py-2">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedProjects;
