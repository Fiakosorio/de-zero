// src/components/Portfolio.js
import React, { useState } from "react";

// Usamos process.env.PUBLIC_URL para que funcione tanto en localhost como en GitHub Pages
const BASE_PATH = process.env.PUBLIC_URL || ""; // Aseguramos que sea "" si no existe

const proyectos = [
  {
    titulo: "Spa & Wellness Center",
    categoria: "Salud y Bienestar",
    descripcion:
      "Diseño relajante con sistema de reservas y galería autoadministrable.",
    imagen: `${BASE_PATH}/img/spa-demo.png`, 
    link: "#",
    destacado: true,
  },
  {
    titulo: "Estudio de Arquitectura",
    categoria: "Corporativo",
    descripcion:
      "Minimalismo puro para resaltar obras visuales. Carga rápida de imágenes y optimización SEO.",
    imagen: `${BASE_PATH}/img/arquitectura-demo.png`,
    link: "#",
    destacado: true,
  },
  {
    titulo: "Tu Idea Acá",
    categoria: "Disponible",
    descripcion:
      "Nosotros nos encargamos de diseñar la solución perfecta para tu negocio.",
    // Imagen externa para rellenar
    imagen: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    link: "#",
    destacado: false,
  },
];

// Nuevo componente de tarjeta, más seguro y manejando el estado de la imagen
const PortfolioCard = ({ proyecto }) => {
    const [imageLoaded, setImageLoaded] = useState(true);

    const handleError = () => {
        setImageLoaded(false);
    };
    
    // Si falla la carga, mostramos un div de error, no inyectamos código
    const Fallback = () => (
        <div className="relative h-56 w-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-center">
            <span className="text-red-600 font-bold text-sm p-4">
                ⚠️ Error de Carga. Archivo: {proyecto.imagen.replace(BASE_PATH, '')}
            </span>
        </div>
    );

    return (
        <div className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
            {/* Contenedor de Imagen */}
            <div className="relative h-56 w-full overflow-hidden">
                {imageLoaded ? (
                    <img
                        src={proyecto.imagen}
                        alt={proyecto.titulo}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        onError={handleError}
                    />
                ) : (
                    <Fallback />
                )}
                
                {proyecto.destacado && imageLoaded && (
                    <div className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                        REAL
                    </div>
                )}
            </div>

            <div className="p-6">
                <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                    {proyecto.categoria}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-2 text-gray-900 dark:text-white">
                    {proyecto.titulo}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {proyecto.descripcion}
                </p>
            </div>
        </div>
    );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-cyan-500 mb-4">
            No es magia, es <span className="text-gray-800 dark:text-white">Trabajo Real</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Resultados tangibles para negocios como el tuyo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {proyectos.map((proyecto, i) => (
            <PortfolioCard key={i} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;