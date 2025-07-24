// ProductCard.jsx
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      style={{ textDecoration: "none" }}
      className="block"
    >
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
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain mb-3"
        />
        <h3 className="text-lg font-semibold font-[Barlow_Condensed]">
          {product.name}
        </h3>
        <p className="text-sm opacity-80 font-[Inter]">{product.description}</p>
        <div className="mt-2 font-bold text-[#E0531F] font-[Inter]">
          ₹ {product.price.toLocaleString()}
        </div>
      </Tilt>
    </Link>
  );
};

export default ProductCard;
