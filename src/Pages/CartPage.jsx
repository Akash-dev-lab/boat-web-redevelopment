// pages/CartPage.jsx
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

const CartPage = () => {
    const { cartItems, setCartItems } = useCart();

    // Load cart items from localStorage when component mounts
    useEffect(() => {
        console.log("[CART PAGE] Loading cart items from localStorage...");
        const storedItems = localStorage.getItem("cart");
        if (storedItems) {
            const parsed = JSON.parse(storedItems);
            setCartItems(parsed);
            console.log("[CART PAGE] Loaded items:", parsed);
        }
    }, [setCartItems]);

    // Calculate total price
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen mt-30 text-white p-6 sm:p-10"
        >
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold mb-8 font-[Montserrat]"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}></motion.h1>
                {cartItems.length === 0 ? (
                    <motion.div
                        className="text-center py-20"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="text-6xl mb-4">🛒</div>
                        <h2 className="text-2xl mb-4 text-gray-400">Your cart is empty</h2>
                        <Link
                            to="/products"
                            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors inline-block"
                        >
                            Continue Shopping
                        </Link>
                    </motion.div>
                ) : (
                    <>
                        <div className="space-y-6 mb-8">
                           
                                {cartItems.map((item, index) => (
                                     <Tilt
                                glareEnable={true}
                                glareMaxOpacity={0.5}
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                glareColor="red"
                                scale={1.02}
                                transitionSpeed={1000}
                                className="backdrop-blur-md border bg-white/10 border-white/10 rounded-2xl p-4 text-white shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                    <motion.div
                                        key={item.id}
                                        initial={{ x: -100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="cursor-pointer rounded-xl p-6 flex max-sm:flex-col items-center gap-6"
                                    >

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 object-contain rounded-lg bg-white p-2"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 font-[Montserrat]">
                                                {item.name}
                                            </h3>
                                            <p className="text-gray-300 text-sm mb-2 font-[Inter]">
                                                {item.description}
                                            </p>
                                            <div className="flex items-center space-x-4">
                                                <span className="font-bold text-lg font-[Orbitron] text-red-500">
                                                    ₹ {item.price.toLocaleString()}
                                                </span>
                                                <span className="text-white">× {item.quantity}</span>
                                            </div>
                                            <div className="mt-1 text-gray-400 text-sm">
                                                Subtotal: ₹ {(item.price * item.quantity).toLocaleString()}
                                            </div>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            alt={"Remove"}
                                            className="text-red-500 hover:bg-red-400 cursor-pointer text-xl"
                                            onClick={() => {
                                                const updated = cartItems.filter((p) => p.id !== item.id);
                                                setCartItems(updated);
                                            }}
                                        >
                                            ❌
                                        </motion.button>
                                    </motion.div>
                                    </Tilt>
                                ))}
                                
                        </div>

                        {/* Cart Summary */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold">Total Items:</h3>
                                <span className="text-xl">{cartItems.length}</span>
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold">Total Price:</h3>
                                <span className="text-2xl font-bold text-red-500">
                                    {totalPrice.toLocaleString()}
                                </span>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-lg transition-colors"
                            >
                                Proceed to Checkout
                            </motion.button>
                        </motion.div>
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default CartPage;
