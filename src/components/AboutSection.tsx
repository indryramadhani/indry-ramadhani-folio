import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Lightbulb, Target, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      icon: Code2,
      title: "Passionate Developer",
      description: "I love crafting clean, efficient code and building user-friendly applications."
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solver",
      description: "I enjoy tackling complex challenges and finding innovative solutions."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Always focused on delivering high-quality results and exceeding expectations."
    },
    {
      icon: Heart,
      title: "Lifelong Learner",
      description: "Continuously exploring new technologies and improving my skills."
    }
  ];

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !contentRef.current) return;

    // Title animation
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    // Content sections animation
    const sections = contentRef.current.querySelectorAll('.about-section');
    
    sections.forEach((section, index) => {
      gsap.fromTo(section,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          }
        }
      );
    });

    // Highlight cards animation
    const highlightCards = contentRef.current.querySelectorAll('.highlight-card');
    
    highlightCards.forEach((card, index) => {
      gsap.fromTo(card,
        { scale: 0.8, opacity: 0, rotationY: 45 },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-liquid bg-clip-text text-transparent">
            About
          </span>{' '}
          <span className="text-foreground">Me</span>
        </h2>

        <div ref={contentRef} className="space-y-16">
          {/* Personal Introduction */}
          <div className="about-section text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Hi! I'm <span className="text-primary font-semibold">Indry Ramadhani Islamiyah</span>, 
              a passionate Software Engineering student with a love for creating beautiful, 
              functional web applications. My journey in programming started with curiosity 
              and has evolved into a genuine passion for technology.
            </p>
            
            <div className="glass-card p-8 rounded-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in modern web technologies including React, JavaScript, and various CSS frameworks. 
                What excites me most is the ability to transform ideas into interactive digital experiences 
                that users can enjoy and benefit from. I'm always eager to learn new technologies and 
                take on challenging projects that push my boundaries.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="about-section">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What Drives Me
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={highlight.title}
                    className="highlight-card glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
                  >
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-liquid mb-4">
                      <Icon className="w-6 h-6 text-background" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-3">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Journey & Goals */}
          <div className="about-section grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My programming journey began with HTML and CSS, where I discovered 
                  the joy of creating visual layouts and responsive designs.
                </p>
                <p>
                  As I progressed, I fell in love with JavaScript and React, 
                  appreciating how they bring interactivity and dynamic functionality to web applications.
                </p>
                <p>
                  Today, I continue to expand my skill set, exploring modern frameworks 
                  and best practices while working on various projects.
                </p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Future Goals</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm working towards becoming a full-stack developer, 
                  expanding my knowledge in backend technologies and databases.
                </p>
                <p>
                  I want to contribute to meaningful projects that make a positive 
                  impact and help solve real-world problems through technology.
                </p>
                <p>
                  My ultimate goal is to join a dynamic team where I can grow, 
                  learn, and contribute to innovative software solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;