import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';
import NewArrivals from '../Pages/NewArrivals';
import SaleCard from './SaleIsLive';
import { AnimatedTestimonialsDemo } from "../Pages/Testimonials";
import gsap from "gsap";

function SlideDownIndicator() {
  const [visible, setVisible] = useState(true);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) setVisible(false);
      else setVisible(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!visible && indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          if (indicatorRef.current) indicatorRef.current.style.display = "none";
        }
      });
    } else if (visible && indicatorRef.current) {
      indicatorRef.current.style.display = "";
      gsap.fromTo(
        indicatorRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [visible]);

  return (
    <div
      ref={indicatorRef}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center animate-bounce pointer-events-none select-none"
    >
      <div className="mb-2 px-4 py-2 bg-black/70 text-white font-[Inter] rounded-full text-xs font-semibold shadow-lg">
        Scroll Up...
      </div>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 8L18 14H6L12 8Z" fill="#fff" />
      </svg>
    </div>
  );
}

const Home = () => {
  const ref = useRef(null);

  // Setup scroll tracking on the full section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "10px"]);

  return (
    <>
      <SlideDownIndicator />
      <motion.section ref={ref} className="relative min-h-screen w-full text-white overflow-hidden">
        {/* 🔴 Background Video with scroll-based blur */}
        <motion.video
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: blur }}
        />

        {/* 🔴 Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-20 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.3)_10%,_rgba(0,0,0,0.95)_100%)] pointer-events-none" />

        {/* ✅ Foreground Content */}
        <div className="relative z-30 container flex flex-col justify-center items-center h-screen mx-auto px-6 md:px-12 xl:px-20 py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="md:text-8xl text-[clamp(2.9rem,9vw,9rem)] font-extrabold leading-tight tracking-tight font-[Inter] text-white"
          >
            Unleash <span className="text-orange-500">Sound</span><br />
            with bo<span className="text-red-600">At</span> Lifestyle
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-base md:text-lg mt-6 text-gray-300 sm:text-xl max-w-xl font-[Inter]"
          >
            Experience cutting-edge audio gear, sleek design, and tech-driven lifestyle wearables designed to elevate your vibe.
          </motion.p>

          <Link to="/products" className="mt-10 inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="backdrop-blur-xl bg-white/10 uppercase text-sm tracking-widest hover:bg-red-700 hover:text-white font-semibold cursor-pointer py-3 px-6 rounded-xl shadow-lg transition font-[Inter]"
            >
              Explore Products
            </motion.button>
          </Link>
        </div>
      </motion.section>

      <NewArrivals />
      <SaleCard />
      <AnimatedTestimonialsDemo />
    </>
  );
};

export default Home;
