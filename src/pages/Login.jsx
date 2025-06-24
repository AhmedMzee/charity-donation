import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import bgImage from "../assets/images/back-logo.png";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login, just log to console for now
    console.log("Logging in with:", userName, password);
    alert("Login successful (demo only)");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div
        className="flex rounded-xl shadow-2xl overflow-hidden"
        style={{ width: "900px", height: "600px", backgroundColor: "white" }}
      >
        {/* Left side: login form */}
        <div className="w-1/2 flex flex-col justify-center px-10">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="CDT Logo" className="h-20 w-20" />
          </div>

          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Welcome to CDT
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username */}
            <div className="relative">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1 peer"
                required
              />
              <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-focus:top-[-0.6rem] peer-focus:text-blue-600 peer-focus:text-xs peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500">
                Username
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1 peer"
                required
              />
              <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-focus:top-[-0.6rem] peer-focus:text-blue-600 peer-focus:text-xs peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500">
                Password
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right side: background image */}
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
