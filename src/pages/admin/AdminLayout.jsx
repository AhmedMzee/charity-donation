import { Link, Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
        <main className="flex-1 bg-gray-50 p-8 overflow-y-auto">
        
         <Outlet />
      </main>
     
    </div>
  );
};

export default AdminLayout;
