import React from "react";

const Hero = () => {
  // Función para bajar al portfolio sin errores
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 bg-white dark:bg-gray-900 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tighter mb-8">
            ¿Tu negocio es <span className="text-cyan-500">invisible</span> en internet?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Diseño webs de alto impacto para profesionales y negocios que necesitan vender más. Tu vidriera digital lista en 7 días.
          </p>
          
          <div className="flex justify-center lg:justify-start">
            {/* BOTÓN CON SCROLL FORZADO */}
            <button 
              onClick={scrollToPortfolio}
              className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 text-lg"
            >
              Ver casos reales
            </button>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
            alt="Dashboard" 
            className="relative rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;