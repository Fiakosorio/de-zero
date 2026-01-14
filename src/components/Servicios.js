import React from "react";
import { Link } from "react-router-dom";

const planes = [
  { slug: "diseno-web", nombre: "PACK ARRANQUE", precio: "200.000", desc: ["Landing Page profesional", "Formulario funcional", "Google Maps", "7 días entrega"] },
  { slug: "diseno-web", nombre: "PACK PROFESIONAL", precio: "400.000", desc: ["Sitio 5 secciones", "Blog estratégico", "SEO Inicial", "12 días entrega"] },
  { slug: "ecommerce", nombre: "PACK NEGOCIO", precio: "700.000", desc: ["E-commerce / App", "Pasarelas de pago", "Automatización n8n", "20 días entrega"] }
];

const Servicios = () => (
  <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold mb-12 dark:text-white text-gray-900">Packs <span className="text-cyan-500">sin vueltas</span></h2>
      <div className="grid md:grid-cols-3 gap-8">
        {planes.map((p, i) => (
          <div key={i} className="flex flex-col justify-between bg-white dark:bg-slate-800 p-8 rounded-3xl border-2 border-transparent hover:border-cyan-500 hover:scale-105 transition-all duration-300 shadow-xl">
            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white text-gray-900">{p.nombre}</h3>
              <div className="text-4xl font-black text-cyan-500 mb-6">${p.precio} <span className="text-sm text-gray-400">ARS</span></div>
              <ul className="text-left space-y-3 mb-8 text-gray-600 dark:text-gray-300 text-sm">
                {p.desc.map((d, j) => <li key={j}>• {d}</li>)}
              </ul>
            </div>
            {/* BOTÓN ÚNICO Y CORRECTO */}
            <Link to={`/${p.slug}`} className="block w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors text-center">
              Elegir Plan
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Servicios;