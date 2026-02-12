import React from "react";
import { Link } from "react-router-dom";

const planes = [
  { 
    slug: "diseno-web", 
    nombre: "PACK ARRANQUE", 
    precio: "200.000", 
    desc: ["Landing Page profesional", "Formulario funcional", "Google Maps", "7 días entrega"] 
  },
  { 
    slug: "diseno-web", 
    nombre: "PACK PROFESIONAL", 
    precio: "400.000", 
    desc: ["Sitio 5 secciones", "Blog estratégico", "SEO Inicial", "12 días entrega"],
    popular: true 
  },
  { 
    slug: "ecommerce", 
    nombre: "PACK NEGOCIO", 
    precio: "700.000", 
    desc: ["E-commerce / App", "Pasarelas de pago", "Automatización n8n", "20 días entrega"] 
  }
];

const Servicios = () => (
  <section id="servicios" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-black mb-16 dark:text-white text-gray-900 tracking-tighter uppercase">
        Packs <span className="text-cyan-500">sin vueltas</span>
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {planes.map((p, i) => (
          <div 
            key={i} 
            className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 shadow-xl
              ${p.popular 
                ? "bg-white dark:bg-slate-800 border-4 border-indigo-500 scale-105 z-10 md:py-12" 
                : "bg-white dark:bg-slate-800 border-2 border-transparent hover:border-cyan-500 hover:scale-105"
              }`}
          >
            {p.popular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
                El más solicitado
              </div>
            )}

            <div>
              <h3 className="text-xl font-black mb-4 dark:text-white text-gray-900 uppercase tracking-tight">{p.nombre}</h3>
              <div className="text-5xl font-black text-indigo-600 dark:text-cyan-500 mb-6">
                ${p.precio} <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">ars</span>
              </div>
              <ul className="text-left space-y-4 mb-10 text-gray-600 dark:text-gray-300 text-sm font-medium">
                {p.desc.map((d, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-indigo-500">✔</span> {d}
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              to={`/${p.slug}`} 
              className={`block w-full py-4 font-black rounded-xl transition-all text-center uppercase tracking-tighter
                ${p.popular 
                  ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/20 shadow-xl" 
                  : "bg-slate-100 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-indigo-600 hover:text-white"
                }`}
            >
              Elegir Plan
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Servicios;