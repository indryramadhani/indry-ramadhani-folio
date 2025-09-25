import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LiquidBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const shapes = containerRef.current.querySelectorAll('.liquid-shape');
    
    // Animate liquid shapes
    shapes.forEach((shape, index) => {
      gsap.set(shape, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
        rotation: Math.random() * 360,
      });

      gsap.to(shape, {
        duration: 15 + index * 3,
        rotation: 360,
        repeat: -1,
        ease: "none",
      });

      gsap.to(shape, {
        duration: 20 + index * 2,
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    });

    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (clientX - centerX) / centerX;
      const deltaY = (clientY - centerY) / centerY;

      shapes.forEach((shape, index) => {
        const intensity = (index + 1) * 0.02;
        gsap.to(shape, {
          duration: 2,
          x: `+=${deltaX * 50 * intensity}`,
          y: `+=${deltaY * 50 * intensity}`,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
      
      {/* Liquid shapes */}
      <div className="liquid-shape absolute w-96 h-96 rounded-full blur-3xl opacity-20 liquid-gradient animate-liquid" 
           style={{ top: '10%', left: '20%' }} />
      <div className="liquid-shape absolute w-80 h-80 rounded-full blur-3xl opacity-15 bg-gradient-to-r from-accent/30 to-primary/30" 
           style={{ top: '60%', right: '10%' }} />
      <div className="liquid-shape absolute w-72 h-72 rounded-full blur-3xl opacity-25 bg-gradient-to-r from-secondary/40 to-accent/40" 
           style={{ bottom: '20%', left: '10%' }} />
      <div className="liquid-shape absolute w-64 h-64 rounded-full blur-2xl opacity-30 bg-gradient-to-r from-primary/20 to-secondary/20" 
           style={{ top: '30%', right: '30%' }} />
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="liquid-shape absolute w-2 h-2 rounded-full bg-primary/10 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default LiquidBackground;