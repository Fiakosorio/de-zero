import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import postsData from "../posts.json";
import SocialIcons from "./SocialIcons";

const Sections = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("./posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main className="container mx-auto px-4 py-10">
      <section
        id="home"
        className="text-center py-20 px-4 bg-gradient-to-br from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <h2 className="text-5xl font-bold text-cyan-500 mb-6">
          ¡Hola! Soy Juan Manuel Osorio
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Desarrollador y diseñador web freelance. Creo sitios rápidos, modernos
          y profesionales que conectan con tu cliente.
        </p>
        <a
          href="#portfolio"
          className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition-colors"
        >
          Ver mi trabajo
        </a>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white dark:bg-gray-900">
        <h3 className="text-3xl font-semibold text-cyan-500 mb-8 text-center">
          Portfolio
        </h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
            <h4 className="text-xl font-bold text-cyan-500 mb-2">
              Portfolio Web
            </h4>
            <p className="text-sm mb-4">
              Una muestra de mis proyectos, estilos y habilidades como
              desarrollador web.
            </p>
            <a
              href="https://fiakosorio.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-cyan-500 font-semibold hover:underline"
            >
              Ver proyecto →
            </a>
          </div>
        </div>
      </section>

      <section id="blog" className="py-10">
        <h3 className="text-3xl font-semibold text-cyan-500 mb-4 text-center">
          Blog
        </h3>
        <div className="max-w-4xl mx-auto">
          {postsData.map((post, index) => (
            <BlogPost key={index} title={post.title} summary={post.summary} />
          ))}
        </div>
      </section>

      <section id="contact" className="py-10">
        <h3 className="text-3xl font-semibold text-cyan-500 mb-4">Contacto</h3>
        <form
          action="form.php"
          method="POST"
          className="max-w-md mx-auto space-y-4"
        >
          <input
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            required
            className="w-full border border-gray-300 p-2 rounded dark:bg-gray-800 dark:border-gray-700"
          />
          <input
            name="email"
            type="email"
            placeholder="Tu email"
            required
            className="w-full border border-gray-300 p-2 rounded dark:bg-gray-800 dark:border-gray-700"
          />
          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            required
            className="w-full border border-gray-300 p-2 rounded dark:bg-gray-800 dark:border-gray-700"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded"
          >
            Enviar
          </button>
        </form>

        <div className="mt-6">
          <SocialIcons />
        </div>
      </section>
    </main>
  );
};

export default Sections;
