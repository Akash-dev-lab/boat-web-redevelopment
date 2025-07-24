import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Products from "./Pages/Products"
import ProductDetail from "./Pages/ProductDetails";
import CursorBall from "./CursorBall"
import Home from "./Pages/Home"
import { useRef } from "react"
import gsap from "gsap"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useCart } from "./context/CartContext";
import CartPage from "./Pages/CartPage";


function SlideDownIndicator() {
  const [visible, setVisible] = useState(true)
  const indicatorRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) setVisible(false)
      else setVisible(true)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!visible && indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          if (indicatorRef.current) {
            indicatorRef.current.style.display = "none"
          }
        }
      })
    } else if (visible && indicatorRef.current) {
      indicatorRef.current.style.display = ""
      gsap.fromTo(
        indicatorRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
    }
  }, [visible])

  return (
    visible || indicatorRef.current ? (
      <div
        ref={indicatorRef}
        className="fixed bottom-8 -translate-x-1/2 z-50 flex flex-col items-center animate-bounce pointer-events-none select-none"
      >
        <div className="mb-2 px-4 py-2 bg-black/70 text-white rounded-full text-xs font-semibold shadow-lg">
          Slide down for latest content
        </div>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 16L6 10H18L12 16Z" fill="#fff" />
        </svg>
      </div>
    ) : null
  )
}

const App = () => {

  const { toggleCart, cartItems } = useCart();

  return (
    <div className="flex justify-center flex-col bg-black items-center">
      <SlideDownIndicator />
      <CursorBall />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

    </div>
  )
}

export default App