import { useEffect, useRef } from "react";

export default function CursorBall() {
  const ballRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationId;
    const animate = () => {
      // Lerp for smoothness
      pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.18;
      if (ballRef.current) {
        ballRef.current.style.transform = `translate3d(${pos.current.x - 12}px, ${pos.current.y - 12}px, 0)`;
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={ballRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: "rgba(231,0,11,0.7)",
        boxShadow: "0 0 16px 4px #e7000b55",
        transition: "background 0.2s",
        mixBlendMode: "difference",
      }}
    />
  );
}