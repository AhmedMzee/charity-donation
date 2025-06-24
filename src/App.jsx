import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UsersPage from "./pages/admin/UsersPage";
import ProjectsPage from "./pages/admin/ProjectsPage";
import DonationsPage from "./pages/admin/DonationsPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Sidebar from "./components/admin/Sidebar";
import AdminLayout from "./pages/admin/AdminLayout";

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
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="donations" element={<DonationsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
