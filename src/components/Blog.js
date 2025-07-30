// src/components/Blog.js
import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-cyan-500">Blog Profesional</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Artículo 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-cyan-500 mb-2">
              Modelos de Sitio Web y Costos Transparentes
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Conocé los tipos de sitios web más comunes que ofrecemos, sus beneficios y precios estimados.
            </p>
            <Link
              to="/blog/modelos-sitios"
              className="inline-block mt-4 text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Seguir leyendo →
            </Link>
          </div>

          {/* Artículo 2 en Markdown */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-cyan-500 mb-2">
              Cómo cotizar servicios sin perder clientes
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Estrategias reales para presentar tus precios con claridad y mantener el interés de potenciales clientes.
            </p>
            <Link
              to="/blog/md/cotizar-servicios"
              className="inline-block mt-4 text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Leer artículo completo →
            </Link>
          </div>

          {/* Artículo 3: Pagá si te gusta */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-cyan-500 mb-2">
              El precio lo fijás vos: Pagá si te gusta
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Una propuesta innovadora para captar clientes que valoran el trabajo profesional.
            </p>
            <Link
              to="/blog/paga-si-te-gusta"
              className="inline-block mt-4 text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Seguir leyendo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;



