// src/components/Servicios.js
import React from "react";
import { FaLaptopCode, FaStore, FaTools, FaChartLine } from "react-icons/fa";

const servicios = [
  {
    icono: <FaLaptopCode className="text-4xl text-cyan-500 mb-4" />,
    titulo: "Diseño Web Profesional",
    descripcion:
      "Sitios rápidos, responsivos y atractivos. Desde landing pages hasta sitios corporativos completamente personalizados.",
  },
  {
    icono: <FaStore className="text-4xl text-cyan-500 mb-4" />,
    titulo: "Tiendas Online",
    descripcion:
      "E-commerce funcional con carrito, pagos integrados, gestión de productos y experiencia de usuario optimizada.",
  },
  {
    icono: <FaTools className="text-4xl text-cyan-500 mb-4" />,
    titulo: "Mantenimiento & Soporte",
    descripcion:
      "Actualizaciones, seguridad, backups y mejoras continuas para que tu web funcione siempre al 100%.",
  },
  {
    icono: <FaChartLine className="text-4xl text-cyan-500 mb-4" />,
    titulo: "SEO & Marketing",
    descripcion:
      "Optimización para buscadores, campañas en redes sociales, email marketing y más herramientas para tu crecimiento.",
  },
];

const Servicios = () => {
  return (
    <section
      id="servicios"
      className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-cyan-500 mb-6">Servicios</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Estos son algunos de los servicios que ofrezco para ayudarte a tener
          una presencia digital profesional y efectiva:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              {servicio.icono}
              <h3 className="text-xl font-semibold mb-2">{servicio.titulo}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
