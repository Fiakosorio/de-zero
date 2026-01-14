import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { t: "Paga si te gusta: Mi modelo de confianza", d: "Asumo el riesgo del desarrollo para que vos no tengas ninguno. Solo pagás si te sirve.", link: "/blog/paga-si-te-gusta", tag: "Garantía" },
  { t: "3 errores que matan las ventas de tu web", d: "Si tu página es lenta o no se ve en el celu, estás regalando plata cada minuto.", link: "/blog/errores-ventas", tag: "Ventas" },
  { t: "Paquetes Web Llave en Mano", d: "Elegí el modelo que mejor se adapta a tu negocio hoy.", link: "/blog/modelos-sitios", tag: "Packs" }
];

const Blog = () => (
  <section id="blog" className="py-24 bg-white dark:bg-gray-900 transition-colors font-sans border-t border-slate-100 dark:border-slate-800">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-black text-center mb-16 text-gray-900 dark:text-white tracking-tighter uppercase">
        Lo que nadie te cuenta
      </h2>
      
      {/* Grid con items de altura igual */}
      <div className="grid md:grid-cols-3 gap-10">
        {posts.map((p, i) => (
          // flex flex-col h-full asegura que la tarjeta ocupe todo el alto disponible
          <div key={i} className="flex flex-col h-full group bg-slate-100 dark:bg-slate-800/50 p-10 rounded-3xl border-2 border-transparent hover:border-cyan-500 hover:scale-[1.03] transition-all duration-300 shadow-sm">
            
            {/* Contenido superior */}
            <div className="flex-grow">
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">{p.tag}</span>
              <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white leading-tight">{p.t}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-sm">{p.d}</p>
            </div>

            {/* Botón pegado al fondo (mt-auto) */}
            <div className="mt-8">
               <Link to={p.link} className="inline-block w-full text-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
                 Leer más
               </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;


