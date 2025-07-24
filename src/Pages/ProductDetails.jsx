import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ConfettiButton } from "../components/magicui/confetti";
import products from "../data/products";

const ProductDetail = () => {
    const { id } = useParams();
    const { cartItems, addToCart } = useCart();
    const product = products.find((p) => p.id === parseInt(id, 10));
    const related = products.filter((p) => p.id !== product?.id);
    const currentEntry = cartItems.find((p) => console.log(p.id));
    const qty = currentEntry || 0;
    console.log(qty)

    if (!product) {
        return (
            <div className="text-white text-center py-20">
                Product not found.
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product);
        console.log("Product added to cart:", product);
    };

    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="min-h-screen px-4 sm:px-8 lg:px-20 py-16 
    bg-black text-white 
    flex flex-col lg:flex-row items-center gap-10
    text-center lg:text-left"
            >
                {/* Left Image Side */}
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.img
                        src={product.image}
                        alt={product.name}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-xl shadow-lg w-4/5 sm:w-3/5 lg:min-w-10/12 mt-25 object-contain bg-white p-4 transition-all"
                    />
                </motion.div>

                {/* Right Info Side */}
                <motion.div
                    className="w-full lg:w-1/2 space-y-6 flex flex-col items-center lg:items-start "
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold font-[Inter] [font-size:clamp(1.75rem,4.8vw,2.75rem)]">
                        {product.name}
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-[Inter] [font-size:clamp(1rem,3.5vw,1.25rem)]">
                        {product.description}
                    </p>
                    <div className="text-xl sm:text-2xl font-bold text-red-500 [font-size:clamp(1.25rem,5vw,1.75rem)] font-[Inter]">
                        ₹ {product.price.toLocaleString()}
                    </div>

                    {/* ConfettiButton with Add to Cart */}
                    <div className="relative">
                        <ConfettiButton
                            onClick={handleAddToCart}
                            className="bg-[#E7000B] cursor-pointer hover:bg-[#c5000a] text-white px-6 py-3 rounded-lg shadow-md font-semibold uppercase tracking-wider [font-size:clamp(0.9rem,3.8vw,1rem)] font-[Inter] transition-colors"
                            options={{
                                particleCount: 100,
                                spread: 70,
                                origin: { y: 0.6 },
                                colors: ["#E7000B", "#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3"],
                            }}
                        >
                            Add to Cart 
                        </ConfettiButton>
                    </div>
                </motion.div>
            </motion.section>

            {/* Related Products Section */}
            <div className="mt-12 flex  flex-wrap">
                <h3 className="text-2xl font-bold mb-6 font-[Barlow_Condensed]">
                    You may also like
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {related.map((rel) => (
                        <Link key={rel.id} to={`/products/${rel.id}`}>
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="bg-white/10 border border-white/20 rounded-xl p-4 text-white backdrop-blur-md transition-all"
                            >
                                <img
                                    src={rel.image}
                                    alt={rel.name}
                                    className="h-40 object-contain mb-3 mx-auto hover:scale-105 transition-transform duration-300"
                                />
                                <h4 className="font-semibold font-[Inter] text-lg">{rel.name}</h4>
                                <div className="text-red-400 font-[Inter] font-bold">
                                    {rel.price.toLocaleString()}
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
