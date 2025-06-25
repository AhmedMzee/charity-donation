import { Outlet } from "react-router-dom";
import StaffSidebar from "../../components/staff/StaffSidebar";

const StaffLayout = () => {
  return (
    <div className="flex min-h-screen">
      <StaffSidebar />
      <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default StaffLayout;
