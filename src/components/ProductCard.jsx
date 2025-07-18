import Tilt from "react-parallax-tilt";

const ProductCard = ({ product }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.02}
      transitionSpeed={1000}
      className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-white shadow-md hover:shadow-xl transition-all duration-300"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-3"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm opacity-80">{product.description}</p>
      <div className="mt-2 font-bold text-[#E0531F]">{product.price}</div>
    </Tilt>
  );
};

export default ProductCard;
