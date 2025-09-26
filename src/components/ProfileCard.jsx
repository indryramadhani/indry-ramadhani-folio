import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import profileImage from '@/assets/profile-indry.jpg';

const ProfileCard = () => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current || !imageRef.current) return;

    // Initial animation
    const tl = gsap.timeline({ delay: 0.2 });
    
    tl.fromTo(cardRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
    );

    // Floating animation
    gsap.to(cardRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Profile image glow animation
    gsap.to(imageRef.current, {
      boxShadow: "0 0 30px hsl(210 100% 60% / 0.5)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Hover interactions
    const handleMouseEnter = () => {
      gsap.to(cardRef.current, { 
        scale: 1.05, 
        rotationY: 5,
        duration: 0.3, 
        ease: "power2.out" 
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cardRef.current, { 
        scale: 1, 
        rotationY: 0,
        duration: 0.3, 
        ease: "power2.out" 
      });
    };

    cardRef.current.addEventListener('mouseenter', handleMouseEnter);
    cardRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mouseenter', handleMouseEnter);
        cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="relative glass-card p-8 rounded-3xl max-w-sm mx-auto transform-gpu perspective-1000"
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-liquid rounded-3xl blur-sm opacity-20 animate-glow" />
      
      <div className="relative z-10 text-center">
        {/* Profile Image */}
        <div className="relative inline-block mb-6">
          <div className="profile-glow">
            <img
              ref={imageRef}
              src={profileImage}
              alt="Indry Ramadhani Islamiyah"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary/30 relative z-10"
            />
          </div>
          
          {/* Status indicator */}
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full border-4 border-card flex items-center justify-center">
            <div className="w-3 h-3 bg-background rounded-full animate-pulse" />
          </div>
        </div>

        {/* Name and Title */}
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Indry Ramadhani Islamiyah
        </h3>
        <p className="text-primary font-semibold mb-1">Software Engineering Student</p>
        <p className="text-muted-foreground text-sm mb-4">
          Passionate about creating beautiful web experiences
        </p>

        {/* Quick Stats */}
        <div className="flex justify-around text-center border-t border-border/50 pt-4 mt-4">
          <div>
            <div className="text-lg font-bold text-primary">8+</div>
            <div className="text-xs text-muted-foreground">Technologies</div>
          </div>
          <div className="border-l border-border/50 pl-4">
            <div className="text-lg font-bold text-accent">1+</div>
            <div className="text-xs text-muted-foreground">Years Learning</div>
          </div>
          <div className="border-l border-border/50 pl-4">
            <div className="text-lg font-bold text-secondary">∞</div>
            <div className="text-xs text-muted-foreground">Creativity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;