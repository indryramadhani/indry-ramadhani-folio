import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "indry02829@gmail.com",
      href: "mailto:indry02829@gmail.com",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/indryramadhani",
      href: "https://github.com/indryramadhani",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indonesia",
      href: "#",
      gradient: "from-green-500 to-teal-500"
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

    // Content animation
    const contactItems = contentRef.current.querySelectorAll('.contact-item');
    
    contactItems.forEach((item, index) => {
      gsap.fromTo(item,
        { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });

    // Form animation
    const formElements = contentRef.current.querySelectorAll('.form-element');
    
    gsap.fromTo(formElements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-foreground">Let's</span>{' '}
          <span className="bg-gradient-liquid bg-clip-text text-transparent">
            Connect
          </span>
        </h2>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="form-element">
              <h3 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="contact-item group flex items-center gap-4 glass-card p-4 rounded-2xl hover:scale-105 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{item.label}</div>
                      <div className="text-muted-foreground text-sm">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Call to action */}
            <div className="form-element glass-card p-6 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-2">Currently Available</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Open to internships, freelance projects, and collaboration opportunities.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm text-accent font-medium">Available for work</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-element glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="form-element">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 glass-card rounded-xl border border-border/50 bg-transparent text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div className="form-element">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 glass-card rounded-xl border border-border/50 bg-transparent text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-element">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 glass-card rounded-xl border border-border/50 bg-transparent text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-liquid rounded-2xl font-semibold text-background hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;