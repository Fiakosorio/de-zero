// src/components/Portfolio.js
import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50 dark:bg-gray-950 transition duration-300">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Portfolio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Proyecto real */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/400x200?text=Portfolio"
            alt="Mi portfolio"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Mi portfolio web
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Sitio donde muestro mis proyectos y trabajos anteriores como desarrollador web.
          </p>
          <a
            href="https://fiakosorio.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Ver portfolio →
          </a>
        </div>

        {/* Proyecto de ejemplo 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/400x200?text=Proyecto+1"
            alt="Proyecto 1"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Proyecto demo 1
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Este es un proyecto de ejemplo con diseño responsive y backend simulado.
          </p>
          <a
            href="#"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Ver proyecto →
          </a>
        </div>

        {/* Proyecto de ejemplo 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105">
          <img
            src="https://via.placeholder.com/400x200?text=Proyecto+2"
            alt="Proyecto 2"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Proyecto demo 2
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Aplicación web desarrollada en React y PHP para mostrar tus habilidades técnicas.
          </p>
          <a
            href="#"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Ver proyecto →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
