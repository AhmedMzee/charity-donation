import { Outlet } from "react-router-dom";
import DonorSidebar from "../../components/donor/DonorSidebar";

const DonorLayout = () => {
  return (
    <div className="flex min-h-screen">
      <DonorSidebar />
      <main className="flex-1 bg-gray-50 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DonorLayout;
