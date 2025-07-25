import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "../ReactBits-component/Particles";
import { BoxReveal } from "../components/magicui/box-reveal";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <section
      className="relative w-full mt-20 min-h-screen text-white bg-gradient-to-b from-black to-[#1a0000] overflow-hidden px-6 sm:px-20 py-24 z-10"
    >
      {/* 🔴 Background Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Particles
          className="w-full h-full"
          particleColors={["#ffffff", "#E7000B"]}
          particleCount={150}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
        />
      </div>

      {/* ✅ Responsive Heading with BoxReveal */}
      <motion.h1
        className="text-5xl sm:text-8xl font-bold mb-16 font-[Inter] relative z-10 text-center lg:text-right"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <BoxReveal className="inline-block" boxColor="#E7000B">
          About bo<span className="text-[#E7000B]">At</span>
        </BoxReveal>
      </motion.h1>

      {/* ✅ Mission Section */}
      <div className="reveal-section max-w-5xl mx-auto text-center mb-24 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg text-gray-300 font-[Inter]">
          At boAt, we're more than just music. We're a lifestyle — built for hustle,
          wired with attitude. From wireless earbuds to smartwatches, we deliver
          cutting-edge tech blended with energetic design.
        </p>
      </div>

      {/* ✅ Core Values */}
      <div className="reveal-section cursor-pointer grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-6xl mx-auto mb-24 relative z-10">
        {[
          { title: "Bold Innovation", icon: "🚀" },
          { title: "Limitless Sound", icon: "🎧" },
          { title: "Built to Hustle", icon: "⚡" },
        ].map((val, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-8"
          >
            <div className="text-5xl mb-4">{val.icon}</div>
            <h3 className="text-xl font-semibold">{val.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* ✅ CTA Section */}
      <motion.div
        className="reveal-section text-center relative z-10"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Join the Sound Revolution 🔊</h2>
        <p className="text-gray-400 mb-6 font-[Inter]">
          Be part of a brand redefining the music lifestyle. Style, sound, and soul — we’ve got it all.
        </p>
        <button className="bg-red-600 cursor-pointer hover:bg-red-700 px-6 py-3 text-white rounded-lg font-semibold transition">
          Explore Products
        </button>
      </motion.div>
    </section>
  );
};

export default About;
