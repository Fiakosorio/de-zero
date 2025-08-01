// src/components/Hero.js
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-10 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
        ¿Empezar desde cero te asusta?
        <br />
        <span className="text-cyan-500 dark:text-cyan-400">
          Nosotros te llevamos de la mano
        </span>{" "}
        para que tu negocio brille en Internet.
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
        Convertimos tu idea en una página que atrae clientes incluso mientras dormís.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <ScrollLink
          to="contacto"
          smooth={true}
          duration={800}
          offset={-80}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-full cursor-pointer transition"
        >
          Quiero mi Web
        </ScrollLink>

        <ScrollLink
          to="servicios"
          smooth={true}
          duration={800}
          offset={-70}
          className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold px-6 py-3 rounded-full cursor-pointer transition"
        >
          Ver Servicios
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;



