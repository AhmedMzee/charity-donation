const ProjectsPage = () => {
  const projects = [
    { id: 1, name: "Clean Water", status: "Ongoing", budget: "$5000" },
    { id: 2, name: "School Kits", status: "Completed", budget: "$2000" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <table className="w-full bg-white shadow rounded-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Project Name</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Budget</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-b hover:bg-gray-100">
              <td className="py-3 px-4">{project.name}</td>
              <td className="py-3 px-4">{project.status}</td>
              <td className="py-3 px-4">{project.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsPage;
