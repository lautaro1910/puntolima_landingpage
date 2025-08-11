import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo_puntoLima.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-card border-b border-glass-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="text-2xl font-bold cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img src={logo} alt="Punto Lima Logo" className="h-32 mt-2 w-auto" />
            {/* <span>Punto Lima</span> */}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-lime transition-colors animated-underline"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="text-foreground hover:text-lime transition-colors animated-underline"
            >
              Clientes
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-lime transition-colors animated-underline"
            >
              Proyectos
            </button>
            {/* NOT DISPLAYED <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-lime transition-colors animated-underline"
            >
              Contacto
            </button> */}
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-lime hover:bg-lime-dark text-primary-foreground font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-glow"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;