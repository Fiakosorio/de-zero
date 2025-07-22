// src/components/Blog.js
import React from "react";

const posts = [
  {
    id: 1,
    title: "¿Qué es el desarrollo web?",
    summary: "Una guía rápida sobre frontend, backend y cómo funcionan juntos en una web moderna.",
    date: "Julio 2025",
  },
  {
    id: 2,
    title: "Diseño web responsivo con Tailwind",
    summary: "Cómo usar Tailwind para crear sitios que se ven bien en cualquier dispositivo.",
    date: "Julio 2025",
  },
  {
    id: 3,
    title: "React + PHP: Proyecto desde cero",
    summary: "Un vistazo a cómo integrar React con un backend en PHP para sitios dinámicos.",
    date: "Julio 2025",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 px-4 sm:px-8 lg:px-16 bg-white dark:bg-gray-900 transition duration-300">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Blog</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
            <button className="text-sm text-teal-500 hover:underline">Leer más →</button>
          </div>
        ))}
      </div>
    </section>
  );
}
