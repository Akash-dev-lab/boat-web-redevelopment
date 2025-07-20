import Tilt from "react-parallax-tilt";

const ArrivalCard = ({ arrival }) => {

    
  return (
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
     
        <video
          src={arrival.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-64 object-cover"
        />
    
      <h3 className="text-lg font-semibold font-[Barlow_Condensed]">{arrival.name}</h3>
      <p className="text-sm opacity-80 font-[Inter]">{arrival.description}</p>
      <div className="mt-2 font-bold text-[#E0531F] font-[Orbitron]">{arrival.price}</div>
    </Tilt>
  );
};

export default ArrivalCard;
