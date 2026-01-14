import React from 'react';

// Usamos CDN de Simple Icons
const technologies = [
  { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress" },
  { name: "WooCommerce", logo: "https://cdn.simpleicons.org/woocommerce" },
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "Make", logo: "https://cdn.simpleicons.org/make" },
  { name: "n8n", logo: "https://cdn.simpleicons.org/n8n" },
  { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github" }
];

const TechStack = () => {
  return (
    <section className="py-10 bg-white dark:bg-gray-900 overflow-hidden border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
          Tecnología Moderna & IA
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Degradados laterales */}
        <div className="absolute top-0 left-0 z-10 h-full w-16 md:w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-16 md:w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent"></div>

        {/* Cinta animada */}
        <div className="flex w-[200%] animate-scroll hover:pause">
          
          {/* Tanda 1 */}
          <div className="flex w-1/2 justify-around items-center">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center justify-center px-4 md:px-8 group">
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  onError={(e) => {e.target.style.display='none'}} 
                  // LA SOLUCIÓN: dark:invert hace que el negro se vuelva blanco en modo oscuro
                  className="h-8 md:h-12 w-auto filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:invert dark:group-hover:invert-0"
                />
              </div>
            ))}
          </div>

          {/* Tanda 2 (Duplicada) */}
          <div className="flex w-1/2 justify-around items-center">
            {technologies.map((tech, index) => (
              <div key={`dup-${index}`} className="flex flex-col items-center justify-center px-4 md:px-8 group">
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  onError={(e) => {e.target.style.display='none'}}
                  className="h-8 md:h-12 w-auto filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:invert dark:group-hover:invert-0"
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