import { motion } from "framer-motion";
import loginImg from "../assets/boat-seeklogo.png";
import Particles from "../ReactBits-component/Particles";

const Login = () => {
  return (
    <>
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-4">
  <div className="absolute inset-0 z-10 pointer-events-none">
    <Particles
      particleColors={['#ffffff', '#E7000B']}
      particleCount={200}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    />
  </div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="max-w-5xl w-full bg-[#0F0F0F] border mt-15 border-gray-800 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden z-10"
  >
    {/* Image section */}
    <div className="w-full sm:w-1/3 md:w-1/2 h-52 sm:h-72 md:h-auto flex items-center justify-center bg-[#1A1A1A] p-4">
      <img
        src={loginImg}
        alt="Login Illustration"
        className="object-contain w-full h-full max-h-60 sm:max-h-72 md:max-h-full transition-transform hover:scale-105"
      />
    </div>

    {/* Form section */}
    <div className="w-full md:w-1/2 p-6 sm:p-8 flex items-center justify-center font-[Inter]">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">Login</h2>
        <form>
          <input
            className="w-full p-3 rounded-lg mb-4 bg-[#1D1D1B] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Username or Email"
            type="text"
            name="username"
          />
          <input
            type="password"
            className="w-full p-3 rounded-lg mb-6 bg-[#1D1D1B] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Password"
            name="password"
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 active:scale-95 transition text-white py-2.5 rounded-lg font-semibold"
          >
            Log In
          </button>
          <span className="text-blue-700 cursor-pointer text-lg underline">Sign up ?</span>
        </form>
      </div>
    </div>
  </motion.div>
</div>
</>
  )
};

export default Login;
