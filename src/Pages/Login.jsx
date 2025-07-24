// pages/Login.jsx
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      className="min-h-screen flex w-full items-center justify-center bg-gray-900 text-white p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl w-full bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Image */}
        <div className="md:w-1/2 w-full h-80 md:h-auto">
          <img
            src="../assets/boat-seeklogo.png"
            alt="Login Illustration"
            className=" object-cover"
          />
        </div>

        {/* Right Login Form */}
        <div className="md:w-1/2 w-full p-8 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
            {/* Your login form here */}
            <form>
              <input
                className="w-full p-2 rounded-md mb-4 bg-gray-700 border border-gray-600"
                placeholder="Username or Email"
                type="text"
                name="username"
              />
              <input
                type="password"
                className="w-full p-2 rounded-md mb-6 bg-gray-700 border border-gray-600"
                placeholder="Password"
                name="password"
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold transition"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
