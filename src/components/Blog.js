// src/components/Blog.js
import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Cómo Cotizar Servicios Web sin Ahuyentar a Clientes",
    description:
      "Guía para establecer precios justos y comunicar valor en el mercado argentino.",
    route: "/blog/cotizar-servicios",
    pdf: "/Ideas de valor comercial 1.pdf",
  },
  {
    id: 2,
    title: "Modelos de Sitio Web y Costos Transparentes",
    description:
      "Comparativa entre sitios básicos, corporativos y e-commerce con precios actualizados.",
    route: "/blog/modelos-sitios",
    pdf: "/Ideas de valor comercial 3.pdf",
  },
  {
    id: 3,
    title: "El precio lo fijás vos: Pagá si te gusta",
    description:
      "Una propuesta innovadora para captar clientes que valoran el trabajo profesional.",
    route: "/blog/paga-si-te-gusta",
    pdf: "#",
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-16 text-cyan-500">
        Blog
      </h2>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl hover:scale-105 hover:blur-[0.3px] transition-transform duration-300 ease-in-out"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {post.description}
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              {post.pdf !== "#" && (
                <a
                  href={post.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm px-4 py-2 rounded-full text-center transition"
                >
                  Ver PDF
                </a>
              )}
              <Link
                to={post.route}
                className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm px-4 py-2 rounded-full text-center transition"
              >
                Seguir leyendo →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;


