import {
  HomeIcon,
  UserIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  FolderIcon,
  CurrencyDollarIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optionally clear auth tokens here
    // localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <aside className="w-64 bg-white shadow-lg p-6 min-h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-6 text-blue-700">CDT Admin</h1>
        <nav className="space-y-4">
          <Link to="/admin/dashboard" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
            <HomeIcon className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>

          <Link to="/admin/users" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
            <UserIcon className="w-5 h-5" />
            <span>Users</span>
          </Link>

          <Link to="/admin/projects" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
            <FolderIcon className="w-5 h-5" />
            <span>Projects</span>
          </Link>

          <Link to="/admin/donations" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
            <CurrencyDollarIcon className="w-5 h-5" />
            <span>Donations</span>
          </Link>

          <Link className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
            <ChartBarIcon className="w-5 h-5" />
            <span>Reports</span>
          </Link>

       
        </nav>
      </div>

     
<div className="mt-10 pt-6 border-t border-gray-200">
  <button
    onClick={handleLogout}
    className="flex items-center space-x-3 text-red-600 hover:text-red-800"
  >
    <ArrowLeftOnRectangleIcon className="w-5 h-5" />
    <span>Logout</span>
  </button>
</div>

    </aside>
  );
};

export default Sidebar;
