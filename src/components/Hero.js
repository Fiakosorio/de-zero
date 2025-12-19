// src/components/Hero.js
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-10 bg-white dark:bg-gray-900 transition-colors duration-500 overflow-hidden"
    >
      {/* Fondo con efecto Grid */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern z-0"></div>
      
      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-1"></div>

      {/* Contenido Principal con ANIMACIÓN FADE-IN AGREGADA */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
          ¿Empezar desde cero te asusta?
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-400">
            Nosotros te llevamos de la mano
          </span>{" "}
          para que tu negocio brille en Internet.
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
          Convertimos tu idea en una página que atrae clientes incluso mientras dormís. 
          Sin tecnicismos, sin vueltas y lista para vender.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={800}
            offset={-70}
            className="bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-bold px-8 py-4 rounded-full cursor-pointer transition shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
          >
            Quiero mi Web
          </ScrollLink>

          <ScrollLink
            to="servicios" // Asegurate de tener una sección con id="servicios"
            smooth={true}
            duration={800}
            offset={-70}
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white text-lg font-semibold px-8 py-4 rounded-full cursor-pointer transition border border-gray-300 dark:border-gray-700"
          >
            Ver Servicios
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;