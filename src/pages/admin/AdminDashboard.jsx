import TopCards from "./../../components/admin/TopCards";
import ChartCard from "./../../components/admin/ChartCard";

const AdminDashboard = () => {
  return (
    <div className="flex-1 bg-gray-50 p-8 overflow-y-aut">
         <TopCards />
        <ChartCard />
    </div>
  );
};

export default AdminDashboard;
