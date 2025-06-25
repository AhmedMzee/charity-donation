import { Link } from "react-router-dom";
import { UserGroupIcon, ClipboardIcon, DocumentDuplicateIcon, HomeIcon } from "@heroicons/react/24/solid";

const StaffSidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-6">
      <h1 className="text-2xl font-bold text-indigo-600 mb-6">CDT Staff</h1>
      <nav className="space-y-4">
        <Link to="/staff" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
          <HomeIcon className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link to="/staff/beneficiaries" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
          <UserGroupIcon className="w-5 h-5" />
          <span>Beneficiaries</span>
        </Link>
        <Link to="/staff/projects" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
          <ClipboardIcon className="w-5 h-5" />
          <span>Projects</span>
        </Link>
        <Link to="/staff/allocate" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
          <DocumentDuplicateIcon className="w-5 h-5" />
          <span>Allocate Donations</span>
        </Link>
      </nav>
    </aside>
  );
};

export default StaffSidebar;
