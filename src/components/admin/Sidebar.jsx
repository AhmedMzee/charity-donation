import {
  HomeIcon,
  UserIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">CDT Admin</h1>
      <nav className="space-y-4">
        <Link to="/admin/dashboard"  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
          <HomeIcon className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
       <Link to="/admin/users" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
        <UserIcon className="w-5 h-5" />
        <span>Users</span>
        </Link>

        <Link className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
          <ChartBarIcon className="w-5 h-5" />
          <span>Reports</span>
        </Link>
        <Link className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
          <Cog6ToothIcon className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
