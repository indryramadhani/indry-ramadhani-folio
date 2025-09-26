import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import LiquidBackground from "@/components/LiquidBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center font-inter">
      <LiquidBackground />
      <div className="relative z-10 text-center glass-card p-12 rounded-3xl max-w-md mx-4">
        <h1 className="mb-6 text-6xl font-bold bg-gradient-liquid bg-clip-text text-transparent">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! This page doesn't exist</p>
        <a 
          href="/" 
          className="inline-block px-8 py-4 bg-gradient-liquid rounded-2xl font-semibold text-background hover:scale-105 transition-transform duration-300"
        >
          Return to Portfolio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
