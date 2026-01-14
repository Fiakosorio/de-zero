import React from "react";

const Hero = () => (
  <section id="inicio" className="pt-40 pb-20 bg-white dark:bg-gray-900 text-center transition-all font-sans">
    <div className="max-w-5xl mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-tight">
        ¿Tu negocio <span className="text-cyan-500 italic">es</span> <span className="text-cyan-500">INVISIBLE</span> en Internet?
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
        Te construyo la web que te hace vender mientras dormís.<br/>
        Sin vueltas. <span className="text-gray-900 dark:text-white font-bold">Lista en 1 semana.</span>
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {/* BOTÓN 1: Manda a los Packs (Sección Servicios) */}
        <a href="/#servicios" className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-all cursor-pointer">
          Ver Precios
        </a>
        
        {/* BOTÓN 2: Manda a Casos Reales (Sección Portfolio) */}
        <a href="/#portfolio" className="px-10 py-5 bg-slate-100 dark:bg-slate-800 text-gray-900 dark:text-white font-bold rounded-2xl border-2 border-transparent hover:border-cyan-500 hover:scale-105 transition-all cursor-pointer">
          Casos Reales
        </a>
      </div>
    </div>
  </section>
);

export default Hero;