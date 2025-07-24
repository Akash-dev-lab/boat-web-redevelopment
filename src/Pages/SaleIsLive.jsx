import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SaleCard from "../components/SaleCard";
import { BoxReveal } from "../components/magicui/box-reveal";
import Particles from '../ReactBits-component/Particles';

gsap.registerPlugin(ScrollTrigger);

const BigDeals = () => {
    const containerRef = useRef(null);

    const SaleProducts = [
  {
    id: 1,
    name: 'boAt Airdopes Prime 701 ANC',
    description: 'Wireless Earbuds with 50 Hours Playback, 46dB Hybrid ANC, Spatial Audio, Multipoint & BEAST™ Mode',
    image: 'https://www.boat-lifestyle.com/cdn/shop/files/Artboard_9_934cb755-473c-4db9-a194-d420df437564_700x.png?v=1750428860',
    price: '₹ 2,199',
    category: 'neckbands'
  },
  {
    id: 2,
    name: 'boAt Storm Call 3 Plus',
    description: 'Smartwatch with 1.96" HD Display, BT Calling, 700+ Activity Modes, SOS feature, Functional Crown',
    image: 'https://www.boat-lifestyle.com/cdn/shop/files/Artboard_12_copy_5_700x.png?v=1725944855',
    price: '₹ 1,449',
    category: 'neckbands'
  },
  {
    id: 3,
    name: 'boAt Stone 350',
    description: 'Wireless Speaker with 10W Stereo Sound, 12 Hours Nonstop Playtime, Lightweight Design, BT, TF Card & AUX Compatible',
    image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1_fdcbadf5-5d2d-4ce3-9018-ee3e535fb60b.png?v=1745236290',
    price: '₹ 1,799',
    category: 'neckbands'
  }
];

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
            className="px-4 sm:px- md:px-16 lg:px-32 relative z-0 w-full text-white overflow-hidden"
        >
            <div className="text-5xl sm:text-9xl font-bold font-[Inter] flex w-full h-auto max-sm:h-12 mb-10 max-sm:justify-center max-sm:mb-8 mt-10 lg:mt-40">
                <BoxReveal boxColor="red">Sale <span className="text-red-600">Is Live</span><br /></BoxReveal>
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


            <div
                className="
                    relative z-10 gap-6
                    grid sm:grid-cols-2 lg:grid-cols-3
                    max-sm:grid-cols-none max-sm:flex max-sm:overflow-x-auto max-sm:pb-4
                    scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-transparent
                "
            >
                {SaleProducts.map((sale) => (
                    <div
                        key={sale.id}
                        className="product-card p-6 lg:p-0 max-sm:w-full max-sm:flex-shrink-0"
                    >
                        <SaleCard sale={sale} />
                    </div>
                ))}
            </div>

            {/* Desktop image */}
            <img
                className="w-full mt-20 object-cover max-sm:hidden"
                src="https://www.boat-lifestyle.com/cdn/shop/files/Strips_895f0826-e273-4982-8101-433c815815c1_1600x.png?v=1752817596"
                alt="Sale Banner"
            />
            {/* Mobile image */}
            <img
                className="w-full mt-18 object-cover rounded mb-3 sm:hidden max-sm:mt-10 max-sm:h-24 max-sm:object-contain"
                src="https://www.boat-lifestyle.com/cdn/shop/files/mobile_Artboard_1_be21cce6-56ec-4352-a1ca-68f03c2ba3f4_400x.png?v=1752737443"
                alt="Sale Banner Mobile"
            />
        </section>
    );
};

export default BigDeals