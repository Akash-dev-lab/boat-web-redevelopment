// import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

export default function Hero() {
    //   useEffect(() => {
    //     const lenis = new Lenis({
    //       smooth: true,
    //       direction: "vertical",
    //     });

    //     const raf = (time) => {
    //       lenis.raf(time);
    //       requestAnimationFrame(raf);
    //     };

    //     requestAnimationFrame(raf);
    //   }, []);

    return (
        <section className="min-h-screen w-full text-white overflow-hidden">

            <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

             <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_10%,_rgba(0,0,0,0.9)_100%)]"></div>

            <div className="container mx-auto px-6 md:px-12 xl:px-20 py-32">
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-4xl md:text-6xl text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-tight text-white tracking-tight"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                    Unleash <span className="text-orange-500">Sound</span><br />
                    with <span className="text-red-600">boAt</span> Lifestyle
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="text-base md:text-lg mt-6 text-gray-300 sm:text-xl max-w-xl"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    Experience cutting-edge audio gear, sleek design, and tech-driven lifestyle wearables designed to elevate your vibe.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 inline-block bg-orange-600 uppercase text-sm tracking-widest hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    Explore Products
                </motion.button>
            </div>
        </section>
    );
}
