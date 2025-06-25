import { Link ,useNavigate} from "react-router-dom";
import { UserGroupIcon, ClipboardIcon, DocumentDuplicateIcon, HomeIcon,ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

const StaffSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate("/");
  };
  return (
    <aside className="w-64 bg-white shadow-md p-6">
      <h1 className="text-2xl font-bold text-indigo-600 mb-6">CDT Staff</h1>
      <nav className="space-y-4">
        <Link to="/staff/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
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

export default StaffSidebar;
