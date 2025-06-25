import React from "react";

const ProjectsSupported = () => {
  const supportedProjects = [
    {
      id: 1,
      name: "Clean Water for Villages",
      status: "Ongoing",
      totalContributed: "$100",
    },
    {
      id: 2,
      name: "School Kits for Kids",
      status: "Completed",
      totalContributed: "$250",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Projects You've Supported</h1>
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Project Name</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Total Contributed</th>
            </tr>
          </thead>
          <tbody>
            {supportedProjects.map((project) => (
              <tr key={project.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{project.name}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="px-4 py-2">{project.totalContributed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsSupported;
