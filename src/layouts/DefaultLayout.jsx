import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import LiquidBackground from '@/components/LiquidBackground';
import DockNavigation from '@/components/DockNavigation';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const DefaultLayout = ({ children }) => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Initialize smooth scrolling and section detection
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(section),
        onEnterBack: () => setActiveSection(section),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 0 },
        ease: "power3.inOut"
      });
    }
  };

  return (
    <div className="relative min-h-screen font-inter">
      {/* Liquid Background */}
      <LiquidBackground />

      {/* Main Content */}
      <main className="relative z-10">
        {children}

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border/20">
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground">
                  © 2024 Indry Ramadhani Islamiyah. Built with React, GSAP & Tailwind CSS.
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('hero');
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Back to Top
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Dock Navigation */}
      <DockNavigation 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />
    </div>
  );
};

export default DefaultLayout;