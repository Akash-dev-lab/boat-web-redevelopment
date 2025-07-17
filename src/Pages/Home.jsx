import Hero from "../components/Hero"
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Hero />
    </>
  )
}

export default Home
