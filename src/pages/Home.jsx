import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import DefaultLayout from '@/layouts/DefaultLayout';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initial page load animation
    gsap.fromTo(containerRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 0 },
        ease: "power3.inOut"
      });
    }
  };

  return (
    <DefaultLayout>
      <div ref={containerRef}>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen">
          <HeroSection onScrollToNext={scrollToNext} />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <ProjectsSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Home;