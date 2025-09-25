import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

interface DockNavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const DockNavigation = ({ activeSection, onNavigate }: DockNavigationProps) => {
  const dockRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  useEffect(() => {
    if (!dockRef.current) return;

    // Dock entrance animation
    gsap.fromTo(dockRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)", delay: 0.5 }
    );

    // Hover animations for dock items
    const items = dockRef.current.querySelectorAll('.dock-item');
    
    items.forEach((item) => {
      const handleMouseEnter = () => {
        gsap.to(item, { scale: 1.2, duration: 0.3, ease: "back.out(1.7)" });
      };
      
      const handleMouseLeave = () => {
        gsap.to(item, { scale: 1, duration: 0.3, ease: "back.out(1.7)" });
      };

      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <nav 
      ref={dockRef}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 p-3 glass-card rounded-2xl backdrop-blur-xl border border-primary/20">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`dock-item group relative ${
                isActive ? 'bg-primary/20' : ''
              }`}
              title={item.label}
            >
              <Icon 
                className={`w-5 h-5 transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                }`} 
              />
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-glow" />
              )}
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="px-2 py-1 text-xs font-medium text-foreground bg-card/90 backdrop-blur-sm rounded-md border border-border">
                  {item.label}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default DockNavigation;