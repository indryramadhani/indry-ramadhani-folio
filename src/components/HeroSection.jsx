import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import ProfileCard from './ProfileCard';

const HeroSection = ({ onScrollToNext }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Staggered entrance animation
    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );

    // Floating text animation
    gsap.to(titleRef.current, {
      y: -5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 2
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-liquid bg-clip-text text-transparent">
                Creative
              </span>
              <br />
              <span className="text-foreground">Developer</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0"
            >
              Transforming ideas into elegant digital solutions with modern web technologies
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onScrollToNext}
                className="group px-8 py-4 glass-card rounded-2xl font-semibold text-primary hover:text-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/10"
              >
                View My Work
                <ChevronDown className="inline-block w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </button>
              
              <a 
                href="#contact"
                className="px-8 py-4 bg-gradient-liquid rounded-2xl font-semibold text-background hover:scale-105 transition-transform duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>

          {/* Right Content - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;