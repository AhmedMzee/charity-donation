import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UsersPage from "./pages/admin/UsersPage";
import ProjectsPage from "./pages/admin/ProjectsPage";
import DonationsPage from "./pages/admin/DonationsPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Sidebar from "./components/admin/Sidebar";
import AdminLayout from "./pages/admin/AdminLayout";
import DonorLayout from "./pages/donor/DonorLayout";
import DonorDashboard from "./pages/donor/DonorDashboard";
import MyDonations from "./pages/donor/MyDonations";
import ProjectsSupported from "./pages/donor/ProjectsSupported";
import MakeDonation from "./pages/donor/MakeDonation";
import StaffLayout from "./pages/staff/StaffLayout";
import StaffDashboard from "./pages/staff/StaffDashboard";
import ManageBeneficiaries from "./pages/staff/ManageBeneficiaries";
import AssignedProjects from "./pages/staff/AssignedProjects";
import AllocateDonations from "./pages/staff/AllocateDonations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin routes with layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UsersPage />} />
          <Route path="/admin/projects" element={<ProjectsPage />} />
          <Route path="/admin/donations" element={<DonationsPage />} />
        </Route>

        <Route path="/donor" element={<DonorLayout />}>
            <Route path="/donor/dashboard" index element={<DonorDashboard />} />
            <Route path="/donor/my-donations" element={<MyDonations />} />
            <Route path="/donor/projects-supported" element={<ProjectsSupported />} />
            <Route path="/donor/make-donation" element={<MakeDonation />} />
        </Route>

        <Route path="/staff" element={<StaffLayout />}>
           <Route path="/staff/dashboard" element={<StaffDashboard />} />
          <Route path="/staff/beneficiaries" element={<ManageBeneficiaries />} />
          <Route path="/staff/projects" element={<AssignedProjects />} />
         <Route path="/staff/allocate" element={<AllocateDonations />} />  
       </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
