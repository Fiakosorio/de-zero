import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Imagen de fondo */}
      <img
        src="/hero-bg.jpg"
        alt="Fondo difuso"
        className="absolute inset-0 w-full h-full object-cover blur-md brightness-75 -z-10"
      />

      {/* Contenido */}
      <div className="relative text-center px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Bienvenidos a <span className="text-cyan-500">de Zero</span>
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-gray-800 dark:text-gray-300">
          ¡Hola! Soy desarrollador web especializado en la creación de sitios modernos y adaptables.
        </p>
        <a
          href="#portfolio"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
        >
          Comencemos
        </a>
      </div>
    </section>
  );
};

export default Hero;





