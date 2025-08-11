import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero background"
          className="w-full h-full object-cover opacity-20 animate-float-bg"
        />
        <div className="absolute inset-0 hero-bg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Ideas que impactan.</span>
            <br />
            <span className="text-lime">Historias que venden.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Transformamos tu presencia digital con estrategias de redes sociales, publicidad y diseño web que generan resultados reales y medibles.
          </p>

          {/* CTA Button */}
          <div className="animate-scale-in">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-lime hover:bg-lime-dark text-primary-foreground font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-glow animate-glow-pulse"
            >
              Echa un vistazo a nuestro trabajo
            </Button>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-3 h-3 bg-lime rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-lime rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-20 w-4 h-4 bg-lime rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-lime rounded-full flex justify-center">
          <div className="w-1 h-3 bg-lime rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;