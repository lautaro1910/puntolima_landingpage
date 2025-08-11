import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:contactopuntolima@gmail.com", label: "Gmail" },
    { icon: Instagram, href: "https://www.instagram.com/puntolima.ok?igsh=dTdkeDJzOXRpYTF1", label: "Instagram" },
    /* { icon: Linkedin, href: "#", label: "LinkedIn" } */
  ];

  const navigationLinks = [
    { name: "Inicio", id: "hero" },
    { name: "Clientes", id: "clients" },
    { name: "Proyectos", id: "projects" },
    { name: "Contacto", id: "contact" }
  ];

  const services = [
    "Social Media Marketing",
    "Contenido & Copywriting",
    "Analytics & Reporting",
    "E-commerce Solutions",
    "Web Design",
    "SEO & Posicionamiento",
    "Publicidad Digital",
    "Web Development",
    "Software Solutions"
  ];

  return (
    <footer className="bg-accent border-t border-glass-border">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Info de .Lima */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold">
                <span className="text-foreground">Punto</span>
                <span className="text-lime">Lima</span>
              </h3>
              <p className="text-muted-foreground mt-2 text-lg">
                Ideas que impactan. Historias que venden.
              </p>
            </div>
            
            <p className="text-muted-foreground text-justify leading-relaxed mb-6 max-w-md">
              Somos una agencia de marketing digital enfocada en generar resultados reales y medibles. Potenciamos tu presencia online con estrategias creativas e innovadoras, combinando contenido de alto impacto, campañas publicitarias efectivas y diseño web profesional para impulsar el crecimiento de tu marca.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-lime" />
                <span className="text-muted-foreground">contactopuntolima@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-lime" />
                <span className="text-muted-foreground">+5492664258094</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-lime" />
                <span className="text-muted-foreground">+5492664336855</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-lime" />
                <span className="text-muted-foreground">San Luis, Argentina</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Navegación</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-lime transition-colors duration-300 animated-underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground hover:text-lime transition-colors duration-300 cursor-pointer animated-underline">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-glass-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Punto Lima. Todos los derechos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground text-sm mr-2">Contactanos:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-muted rounded-lg p-2 hover:bg-lime hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;