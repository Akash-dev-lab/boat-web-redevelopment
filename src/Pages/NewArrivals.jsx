import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrivalCard from "../components/ArrivalCard";
import NewArrivalsData from "../data/NewArrivals";
import { BoxReveal } from "../components/magicui.jsx/box-reveal";
import Particles from '../ReactBits-component/Particles';

gsap.registerPlugin(ScrollTrigger);

const NewArrivals = () => {
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
            id="arrival-data"
            ref={containerRef}
            className="px-4 sm:px-8 md:px-16 lg:px-32 relative z-0 w-full min-h-screen text-white overflow-hidden"
        >
            <div className="text-5xl sm:text-9xl font-bold font-[Inter] flex justify-center w-full mb-20 max-sm:mb-2 mt-30 lg:mt-40">
                <BoxReveal boxColor="red">New <span className="text-red-600">Arrivals</span><br /></BoxReveal>
            </div>

            <div className="absolute inset-0 w-full h-full -z-10">
                <Particles
                    particleColors={['#ffffff', '#E7000B']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            <div className="grid relative z-10 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {NewArrivalsData.map((arrival) => (
                    <div key={arrival.id} className="product-card p-6 lg:p-0">
                        <ArrivalCard arrival={arrival} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewArrivals