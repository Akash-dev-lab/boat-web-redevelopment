import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "./ProductCard";
import products from "../data/products";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".product-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="products"
      ref={containerRef}
      className="sm:px-8 md:px-16 py-20 h-screen bg-gradient-to-b from-[#0f0f0f] to-black text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Tech in Style: <span className="text-[#E0531F]">boAt Products</span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
