// src/components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-cyan-100 via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Bienvenidos a <span className="text-cyan-500">de Zero</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
        ¡Hola! Soy desarrollador web especializado en la creación de sitios
        modernos, escalables y adaptables. Ayudo a profesionales y negocios a tener presencia online con identidad visual propia.
      </p>

      <a
        href="#servicios"
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
      >
        Comencemos →
      </a>
    </section>
  );
};

export default Hero;


