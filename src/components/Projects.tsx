import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project1.jpeg';
import project2 from '@/assets/project2.jpeg';
import project3 from '@/assets/project3.jpeg';

const Projects = () => {
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
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "IA for business",
      description: "Diseño y creación de marcas disruptivas desde cero, impulsadas por inteligencia artificial, especialmente concebidas para negocios digitales que buscan maximizar su impacto y acelerar su crecimiento.",
      image: project1,
      category: "Consulting",
      results: "+250 Clientes, +180% facturación"
    },
    {
      id: 2,
      title: "IFood",
      description: "Aplicación que combina inteligencia artificial y un catálogo de restaurantes para encontrar los locales más cercanos a tu ubicación y gestionar pedidos de comida optimizando el tiempo de entrega.",
      image: project2,
      category: "E-commerce & Business",
      results: "+500K descargas, +85% engagement"
    },
    {
      id: 3,
      title: "Your shoes",
      description: "Diseño integral de marca y landing page, creado como ejemplo para un cliente potencial, con el objetivo de mostrar una propuesta visual sólida, atractiva y adaptada a sus necesidades, destacando la identidad de su negocio.",
      image: project3,
      category: "Design & Branding",
      results: "+300% tráfico orgánico, Top 3 en keywords objetivo"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            Nuestros <span className="text-lime">Proyectos</span>
          </h2>
          {/* <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            Casos de éxito que demuestran nuestro compromiso con resultados excepcionales
          </p> */}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-soft ${
                isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-lime text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-lime transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-justify leading-relaxed">
                  {project.description}
                </p>
                
                {/* Results */}
                <div className="bg-accent/50 rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium text-lime mb-1">Proyección:</p>
                  <p className="text-sm text-foreground">{project.results}</p>
                </div>

                {/* CTA Button */}
                {/* <Button
                  variant="outline"
                  className="w-full border-lime text-lime hover:bg-lime hover:text-primary-foreground transition-all duration-300"
                >
                  Ver caso de estudio
                </Button> */}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className={`text-center mt-12 transition-all duration-1000 delay-800 ${
          isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`}>
          <Button
            size="lg"
            className="bg-gradient-lime hover:bg-lime-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-glow"
          >
            Ver todos los proyectos
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;