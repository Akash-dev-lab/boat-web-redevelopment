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
    
      <h3 className="text-lg mt-5 font-semibold font-[Barlow_Condensed]">{arrival.name}</h3>
    </Tilt>
  );
};

export default ArrivalCard;
