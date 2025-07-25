import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Particles from '../ReactBits-component/Particles';
import { BoxReveal } from "../components/magicui/box-reveal.tsx";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const CartPage = () => {
  const { cartItems, setCartItems } = useCart();

  useEffect(() => {
    const storedItems = localStorage.getItem("cart");
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, [setCartItems]);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen mt-40 text-white w-full p-6 sm:p-10 z-10"
    >
      {/* 🔴 Background Particles */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Particles
          particleColors={['#ffffff', '#E7000B']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 z-10 relative">
        {/* 🔴 LEFT SIDE — Title & Lottie */}
        <div className="w-full lg:w-[30%] max-sm:flex-col flex items-center lg:items-start text-center lg:text-left">
          <motion.h1
            className="text-7xl font-bold flex font-[Inter] mt-18 mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <BoxReveal boxColor="#E7000B">
              Ca<span className="text-[#E7000B]">rt</span>
            </BoxReveal>
          </motion.h1>

          <DotLottieReact
            src="https://lottie.host/73472ec4-8a3b-4fba-af6f-3a183cdff65c/sMoSTAtWQn.lottie"
            loop
            autoplay
            className="mt-14 w-96 max-sm:w-80"
          />
        </div>

        {/* 🔴 RIGHT SIDE — Items & Summary */}
        <div className="w-full lg:w-[70%] space-y-8">
          {cartItems.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl mb-4 font-[Inter] text-gray-400">Your cart is empty</h2>
              <Link
                to="/products"
                className="bg-red-600 hover:bg-red-700 font-[Inter] px-6 py-3 rounded-lg transition-colors inline-block"
              >
                Continue Shopping
              </Link>
            </motion.div>
          ) : (
            <>
              {/* ✅ Items List */}
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <Tilt
                    key={item.id}
                    glareEnable
                    glareMaxOpacity={0.5}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    glareColor="red"
                    scale={1.02}
                    transitionSpeed={1000}
                    className="backdrop-blur-md border bg-white/5 border-white/10 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="cursor-pointer rounded-xl p-4 flex max-sm:flex-col items-center gap-6"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-contain rounded-lg bg-white p-2"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 font-[Inter]">{item.name}</h3>
                        <p className="text-gray-300 text-sm mb-2 font-[Inter]">{item.description}</p>
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold text-lg font-[Inter] text-red-500">
                            ₹ {item.price.toLocaleString()}
                          </span>
                          <span className="text-white">× {item.quantity}</span>
                        </div>
                        <div className="mt-1 font-[Inter] text-gray-400 text-sm">
                          Subtotal: ₹ {(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        alt="Remove"
                        className="text-red-500 hover:bg-red-400 cursor-pointer text-xl"
                        onClick={() =>
                          setCartItems(cartItems.filter((p) => p.id !== item.id))
                        }
                      >
                        ❌
                      </motion.button>
                    </motion.div>
                  </Tilt>
                ))}
              </div>

              {/* ✅ Cart Summary */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-md border font-[Inter] border-white/20 rounded-xl p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Total Items:</h3>
                  <span className="text-xl">{cartItems.length}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Total Price:</h3>
                  <span className="text-2xl font-bold text-red-500">
                    ₹ {totalPrice.toLocaleString()}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-red-600 hover:bg-red-700 cursor-pointer text-white py-3 rounded-lg font-semibold text-lg transition-colors"
                >
                  Proceed to Checkout
                </motion.button>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CartPage;
