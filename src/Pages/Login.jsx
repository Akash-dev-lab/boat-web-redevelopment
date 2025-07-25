import { motion } from "framer-motion";
import loginImg from "../assets/NewArrival-vedios/boat-seeklogo.png";
import Particles from "../ReactBits-component/Particles";

const Login = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
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
        className="max-w-5xl w-full bg-black border border-gray-900 rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden z-10"
      >
     
        <div className="md:w-1/2 w-full h-80 md:h-auto">
          <img
            src={loginImg}
            alt="Login Illustration"
            className="object-cover"
          />
        </div>

        <div className="md:w-1/2 font-[Inter] w-full p-8 mt-5 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
            <form>
              <input
                className="w-full p-2 rounded-md mb-4 bg-[#1D1D1B] border border-gray-600"
                placeholder="Username or Email"
                type="text"
                name="username"
              />
              <input
                type="password"
                className="w-full p-2 rounded-md mb-6 bg-[#1D1D1B] border border-gray-600"
                placeholder="Password"
                name="password"
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 cursor-pointer text-white py-2 rounded-md font-semibold transition"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
