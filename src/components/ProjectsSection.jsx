import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "Dirgahayu Indonesia Maju",
      description: "A patriotic website celebrating Indonesian independence with modern design and interactive elements, showcasing national pride and unity.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      gradient: "from-red-500 to-white",
      liveUrl: "https://indryramadhani.github.io/dirgahayuindonesiamaju/",
      githubUrl: "https://github.com/indryramadhani/dirgahayuindonesiamaju"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !projectsRef.current) return;

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

    // Projects animation
    const projectElements = projectsRef.current.querySelectorAll('.project-card');
    
    projectElements.forEach((project, index) => {
      gsap.fromTo(project,
        { y: 100, opacity: 0, rotationX: 45 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
          }
        }
      );

      // Hover animations
      const handleMouseEnter = () => {
        gsap.to(project, { 
          y: -10, 
          scale: 1.02,
          duration: 0.3, 
          ease: "power2.out" 
        });
      };

      const handleMouseLeave = () => {
        gsap.to(project, { 
          y: 0, 
          scale: 1,
          duration: 0.3, 
          ease: "power2.out" 
        });
      };

      project.addEventListener('mouseenter', handleMouseEnter);
      project.addEventListener('mouseleave', handleMouseLeave);
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-foreground">Featured</span>{' '}
          <span className="bg-gradient-liquid bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div ref={projectsRef} className="flex justify-center">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card glass-card p-8 rounded-3xl relative overflow-hidden transform-gpu"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass-card rounded-xl text-sm font-medium hover:bg-primary/10 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass-card rounded-xl text-sm font-medium hover:bg-accent/10 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-sm" />
              <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 blur-sm" />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            This is my featured project showcasing my skills in web development. I'm always working on new projects and learning new technologies.
          </p>
          <a 
            href="https://github.com/indryramadhani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-liquid rounded-2xl font-semibold text-background hover:scale-105 transition-transform duration-300"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;