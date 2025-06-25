import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../api/auth";
import logo from "../../assets/images/logo.png";
import bgImage from "../../assets/images/back-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const user = await loginUser(email, password);

      // Store user info/token if needed
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect based on role
      const role = user.role.toLowerCase();
      if (role === "admin") navigate("/admin/dashboard");
      else if (role === "donor") navigate("/donor/dashboard");
      else if (role === "staff") navigate("/staff/dashboard");
      else navigate("/");

    } catch (err) {
      setErrorMsg(err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div
        className="flex rounded-xl shadow-2xl overflow-hidden"
        style={{ width: "900px", height: "600px", backgroundColor: "white" }}
      >
     
        <div className="w-1/2 flex flex-col justify-center px-10">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="CDT Logo" className="h-20 w-20" />
          </div>

          <h2 className="text-3xl font-bold text-center text-cyan-700 mb-6">
            Welcome to CDT
          </h2>

          {errorMsg && (
            <div className="text-red-500 text-center mb-4">{errorMsg}</div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b-2 border-gray-300 focus:border-cyan-500 focus:outline-none py-2 px-1 peer"
                required
              />
              <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-focus:top-[-0.6rem] peer-focus:text-cyan-600 peer-focus:text-xs">
                Email
              </label>
            </div>

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

        {/* Right Image */}
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
