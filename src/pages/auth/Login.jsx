import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import bgImage from "./../../assets/images/back-logo.png";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donor"); // default role
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", { userName, role });

    // Simulate login and redirect based on role
    if (role === "admin") navigate("/admin/dashboard");
    else if (role === "donor") navigate("/donor/dashboard");
    else if (role === "staff") navigate("/staff/dashboard");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div
        className="flex rounded-xl shadow-2xl overflow-hidden"
        style={{ width: "900px", height: "600px", backgroundColor: "white" }}
      >
        {/* Login Form */}
        <div className="w-1/2 flex flex-col justify-center px-10">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="CDT Logo" className="h-20 w-20" />
          </div>

          <h2 className="text-3xl font-bold text-center text-cyan-700 mb-10">
            Welcome to CDT
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username */}
            <div className="relative">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full border-b-2 border-gray-300 focus:border-cyan-500 focus:outline-none py-2 px-1 peer"
                required
              />
              <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-focus:top-[-0.6rem] peer-focus:text-cyan-600 peer-focus:text-xs">
                Username
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b-2 border-gray-300 focus:border-cyan-500 focus:outline-none py-2 px-1 peer"
                required
              />
              <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-focus:top-[-0.6rem] peer-focus:text-cyan-600 peer-focus:text-xs">
                Password
              </label>
            </div>

            {/* Role Selection */}
            <div className="relative">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border-b-2 border-gray-300 focus:border-cyan-500 py-2 px-1 bg-transparent"
              >
                <option value="donor">Donor</option>
                <option value="staff">NGO Staff</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-xl transition duration-300"
            >
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Don’t have an account?{" "}
              <Link to="/register" className="text-cyan-600 hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side Image */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 128, 0.3), rgba(255, 255, 255, 0.2)), url(${bgImage})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
