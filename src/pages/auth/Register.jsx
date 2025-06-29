import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import bgImage from "./../../assets/images/back-logo.png";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering:", formData);
    alert("Registration successful (demo only)");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div
        className="flex rounded-xl shadow-2xl overflow-hidden"
        style={{ width: "900px", height: "600px", backgroundColor: "white" }}
      >
        {/* Left side: register form */}
        <div className="w-1/2 flex flex-col justify-center px-10">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="CDT Logo" className="h-20 w-20" />
          </div>

          <h2 className="text-3xl font-bold text-center text-cyan-700 mb-6">
            Donor Registration
          </h2>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-cyan-500 focus:outline-none py-2 px-1 peer"
                required
              />
              <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-focus:top-[-0.6rem] peer-focus:text-cyan-600 peer-focus:text-xs peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500">
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-cyan-500 focus:outline-none py-2 px-1 peer"
                required
              />
              <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-focus:top-[-0.6rem] peer-focus:text-cyan-600 peer-focus:text-xs peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500">
                Email
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-cyan-500 focus:outline-none py-2 px-1 peer"
                required
              />
              <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-focus:top-[-0.6rem] peer-focus:text-cyan-600 peer-focus:text-xs peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500">
                Password
              </label>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-cyan-500 focus:outline-none py-2 px-1 peer"
                required
              />
              <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-focus:top-[-0.6rem] peer-focus:text-cyan-600 peer-focus:text-xs peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500">
                Confirm Password
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-xl transition duration-300"
            >
              Register
            </button>

            <p className="text-sm text-center mt-2">
              Already have an account?{" "}
              <Link to="/" className="text-cyan-600 hover:underline">
                Login here
              </Link>
            </p>
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

export default Register;
