// src/components/Portfolio.js
import React from "react";

const proyectos = [
  {
    titulo: "Portfolio Real - GitHub Pages",
    descripcion:
      "Mi portfolio personal con proyectos reales en desarrollo web.",
    imagen:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    link: "https://fiakosorio.github.io/Portfolio/",
  },
  {
    titulo: "Landing Page Minimalista",
    descripcion:
      "Sitio responsivo con animaciones suaves y formulario de contacto integrado.",
    imagen:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    titulo: "E-commerce Moderno",
    descripcion:
      "Tienda online con carrito, pasarela de pagos y dashboard de productos.",
    imagen:
      "https://images.unsplash.com/photo-1544961618-40a386fbdc1c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    titulo: "Blog Profesional",
    descripcion:
      "Blog dinámico con markdown, buscador y diseño SEO optimizado.",
    imagen:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    titulo: "Landing para Marca Personal",
    descripcion:
      "Una landing diseñada para captar leads y posicionar la marca.",
    imagen:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    titulo: "Sitio institucional responsive",
    descripcion:
      "Web para PyMEs con optimización móvil, velocidad y contacto integrado.",
    imagen:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-cyan-500 mb-4">Portfolio</h2>
        <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
          Algunos de los estilos y funcionalidades que puedo implementar para
          vos o tu empresa.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-cyan-500 mb-2">
                  {proyecto.titulo}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {proyecto.descripcion}
                </p>
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded transition"
                >
                  Ver más →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
