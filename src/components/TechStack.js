import React from 'react';

// Usamos CDN de Simple Icons que es público y diseñado para esto.
// No más errores de imagen rota.
const technologies = [
  { 
    name: "WordPress", 
    logo: "https://cdn.simpleicons.org/wordpress" 
  },
  { 
    name: "WooCommerce", 
    logo: "https://cdn.simpleicons.org/woocommerce" 
  },
  { 
    name: "React", 
    logo: "https://cdn.simpleicons.org/react" 
  },
  { 
    name: "Make", 
    logo: "https://cdn.simpleicons.org/make" 
  },
  { 
    name: "n8n", 
    logo: "https://cdn.simpleicons.org/n8n" 
  },
  { 
    name: "OpenAI", 
    logo: "https://cdn.simpleicons.org/openai" 
  },
  { 
    name: "GitHub", 
    logo: "https://cdn.simpleicons.org/github" 
  }
];

const TechStack = () => {
  return (
    <section className="py-10 bg-white dark:bg-gray-900 overflow-hidden border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
          Tecnología Moderna & IA
        </p>
      </div>

      {/* Contenedor del Carrusel */}
      <div className="relative w-full overflow-hidden">
        
        {/* Degradados laterales para suavizar bordes */}
        <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent"></div>

        {/* La Cinta que se mueve */}
        <div className="flex w-[200%] animate-scroll hover:pause">
          
          {/* PRIMERA TANDA */}
          <div className="flex w-1/2 justify-around items-center">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center justify-center px-8 group cursor-pointer">
                {/* LOGO: Escala de grises por defecto, color al pasar el mouse */}
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  // Agregamos un control de error por si acaso
                  onError={(e) => {e.target.style.display='none'}} 
                  className="h-10 w-auto md:h-12 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* SEGUNDA TANDA (Duplicada para efecto infinito) */}
          <div className="flex w-1/2 justify-around items-center">
            {technologies.map((tech, index) => (
              <div key={`dup-${index}`} className="flex flex-col items-center justify-center px-8 group cursor-pointer">
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  onError={(e) => {e.target.style.display='none'}}
                  className="h-10 w-auto md:h-12 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;