import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "./ProductCard";
import products from "../data/products";
import DotGrid from '../ReactBits-component/DotGrid';
import ScrollFloat from '../ReactBits-component/ScrollFloat';

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
      className="sm:px-8 md:px-16 py-20 relative z-0 w-full min-h-screen text-white overflow-hidden"
    >

      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
        textClassName="text-[#e7000b]"
      >
        boAt Products
      </ScrollFloat>

      <div className="absolute inset-0 w-full h-full -z-10">
        <DotGrid
          dotSize={5}
          gap={25}
          baseColor="#333"
          activeColor="#e7000b"
          proximity={220}
          shockRadius={250}
          shockStrength={5}
          resistance={50}
          returnDuration={0.2}
        />
      </div>

      <h2 className="text-4xl sm:text-6xl font-bold text-center mb-20 mt-20 relative z-10  font-[Montserrat]">
        <span>Tech in Style</span>
      </h2>

      <div className="grid relative z-10 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card p-6 sm:p-0"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Products;
