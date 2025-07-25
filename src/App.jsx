import Navbar from "./components/Navbar";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetails";
import CursorBall from "./CursorBall";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import Login from "./Pages/Login";
import Footer from "./Pages/Footer";
import Lenis from '@studio-freight/lenis';
import { useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef, useEffect } from "react";
import AboutPage from "./Pages/About";

const App = () => {

const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "12px"]);
  const blurFilter = useMotionTemplate`blur(${blur})`;

    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={heroRef}  style={{ scale, opacity, filter: blurFilter }} className="flex justify-center flex-col bg-black items-center">
      <BrowserRouter>
        <CursorBall />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
