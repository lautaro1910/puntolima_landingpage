import { useState, useEffect } from 'react';
import clientLogos from '@/assets/client-logos.jpg';

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('clients');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "Trabajar con ellos fue un antes y un después. No solo gestionaron nuestras redes, sino que produjeron contenido de altísima calidad: fotos con cámara profesional, tomas aéreas con dron y videos 360 que hicieron que nuestra marca se vea espectacular.",
      author: "María González",
      company: "TechStart Solutions"
    },
    {
      quote: "La creación de nuestra página web superó nuestras expectativas. Diseño moderno, fácil de usar y optimizado para que nuestros clientes encuentren todo rápido. Además, el contenido visual que produjeron es digno de una campaña internacional.",
      author: "Carlos Mendoza",
      company: "E-commerce Plus"
    },
    {
      quote: "Su equipo no solo entiende de marketing, entiende cómo contar una historia. Desde las fotos y videos producidos con equipos profesionales hasta la web que crearon, cada detalle transmite nuestra identidad de marca.",
      author: "Ana Ruiz",
      company: "Retail Innovation"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            Nuestros <span className="text-lime">Clientes</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            Trabajamos con empresas de todos los tamaños para impulsar su crecimiento digital
          </p>
        </div>

        {/* Client Logos */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${
          isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`}>
          <div className="glass-card rounded-2xl p-8 mb-8">
            <img 
              src={clientLogos} 
              alt="Logos de nuestros clientes"
              className="w-full h-auto opacity-60 hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-soft ${
                isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <div className="text-lime text-2xl mb-4">"</div>
              <p className="text-muted-foreground mb-4 italic">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-lime">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;