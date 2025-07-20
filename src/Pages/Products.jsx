import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import DotGrid from '../ReactBits-component/DotGrid';
import { BoxReveal } from "../components/magicui.jsx/box-reveal";

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
      className="px-4 sm:px-8 md:px-16 lg:px-32 relative z-0 w-full min-h-screen text-white overflow-hidden"
    >
        <div className="text-4xl sm:text-9xl font-bold font-[Inter] flex justify-center w-full mb-20 max-sm:mb-2 mt-30 lg:mt-40">
          <BoxReveal boxColor="red">Wear the <span className="text-red-600">Sound</span><br /> Be the Vibe.</BoxReveal>
        </div>

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

      <div className="grid relative z-10 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card p-6 lg:p-0"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
