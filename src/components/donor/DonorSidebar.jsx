import { Link ,useNavigate} from "react-router-dom";
import {
  ChartPieIcon,
  CurrencyDollarIcon,
  FolderIcon,
  PlusCircleIcon,
  ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/solid";


const DonorSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optionally clear auth tokens here
    // localStorage.removeItem("token");
    navigate("/");
  };


  return (
    <aside className="w-64 bg-white shadow-lg p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">CDT Donor</h1>
      <nav className="space-y-4">
        <Link to="/donor/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
          <ChartPieIcon className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link to="/donor/my-donations" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
          <CurrencyDollarIcon className="w-5 h-5" />
          <span>My Donations</span>
        </Link>
        <Link to="/donor/projects-supported" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
          <FolderIcon className="w-5 h-5" />
          <span>Projects</span>
        </Link>
        <Link to="/donor/make-donation" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
          <PlusCircleIcon className="w-5 h-5" />
          <span>Make Donation</span>
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

export default DonorSidebar;
