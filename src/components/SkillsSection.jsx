import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef(null);

  const skills = [
    { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 88, color: 'from-cyan-400 to-blue-500' },
    { name: 'Bootstrap', level: 80, color: 'from-purple-500 to-pink-500' },
    { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-cyan-500' },
    { name: 'Daisy UI', level: 75, color: 'from-green-400 to-teal-500' },
    { name: 'PHP', level: 70, color: 'from-indigo-500 to-purple-600' },
  ];

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !skillsRef.current) return;

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

    // Skills animation
    const skillElements = skillsRef.current.querySelectorAll('.skill-item');
    
    skillElements.forEach((skill, index) => {
      const progressBar = skill.querySelector('.progress-bar');
      const percentage = skill.querySelector('.percentage');
      
      gsap.fromTo(skill,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: skill,
            start: "top 85%",
          }
        }
      );

      // Progress bar animation
      gsap.fromTo(progressBar,
        { width: "0%" },
        {
          width: skill.getAttribute('data-level') + "%",
          duration: 1.5,
          ease: "power2.out",
          delay: 0.5 + index * 0.1,
          scrollTrigger: {
            trigger: skill,
            start: "top 85%",
          }
        }
      );

      // Percentage counter animation
      gsap.fromTo(percentage,
        { textContent: "0%" },
        {
          textContent: skill.getAttribute('data-level') + "%",
          duration: 1.5,
          ease: "power2.out",
          delay: 0.5 + index * 0.1,
          scrollTrigger: {
            trigger: skill,
            start: "top 85%",
          },
          snap: { textContent: 1 }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">
      <div className="container max-w-4xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-liquid bg-clip-text text-transparent">
            Technical
          </span>{' '}
          <span className="text-foreground">Skills</span>
        </h2>

        <div ref={skillsRef} className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-item glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
              data-level={skill.level}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {skill.name}
                </h3>
                <span className="percentage text-sm font-medium text-primary">
                  0%
                </span>
              </div>
              
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className={`progress-bar h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  style={{ width: '0%' }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
              </div>
              
              {/* Skill description */}
              <p className="text-sm text-muted-foreground mt-3">
                {skill.name === 'React' && "Building modern, interactive user interfaces"}
                {skill.name === 'JavaScript' && "Core programming language for web development"}
                {skill.name === 'HTML' && "Semantic markup and accessibility focused"}
                {skill.name === 'CSS' && "Responsive design and modern layouts"}
                {skill.name === 'Tailwind CSS' && "Utility-first CSS framework expertise"}
                {skill.name === 'Bootstrap' && "Rapid prototyping and responsive components"}
                {skill.name === 'Daisy UI' && "Component library and design systems"}
                {skill.name === 'PHP' && "Server-side scripting and backend development"}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuously learning and exploring new technologies to create better user experiences. 
            Currently diving deeper into modern React patterns, advanced animations, and full-stack development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;