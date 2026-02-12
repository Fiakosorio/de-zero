import React from "react";

const Portfolio = () => {
  const proyectos = [
    {
      titulo: "Centro de Estética & Spa",
      sub: "LANDING PAGE + SISTEMA DE TURNOS",
      desc: "Diseño enfocado en conversión. Implementamos WhatsApp directo y turnos online. Resultado: Aumentó un 40% las consultas reales desde redes sociales.",
      entrega: "Entregado en 7 días",
      img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=2070"
    },
    {
      titulo: "Estudio de Arquitectura",
      sub: "SITIO INSTITUCIONAL + PORTFOLIO",
      desc: "Web visual de alta velocidad. Optimizamos la galería de obras para celulares. Resultado: Reducción del 30% en la tasa de abandono de potenciales clientes.",
      entrega: "Entregado en 10 días",
      img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2070"
    },
    {
      titulo: "Clínica Odontológica",
      sub: "TURNOS ONLINE + GOOGLE MAPS",
      desc: "Automatización total de la agenda. El cliente dejó de perder pacientes por no atender el teléfono. Resultado: Agenda llena al 100% en el primer mes de lanzamiento.",
      entrega: "Entregado en 8 días",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2070"
    },
    {
      titulo: "Agencia Growth Marketing",
      sub: "SITIO CORPORATIVO + BLOG",
      desc: "Branding de autoridad para servicios high-ticket. Diseño oscuro y profesional. Resultado: Cierre de ventas 2 veces más rápido gracias a la confianza que genera la web.",
      entrega: "Entregado en 15 días",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-900 transition-colors font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-16 text-gray-900 dark:text-white tracking-tighter uppercase">
          Casos <span className="text-cyan-500">Reales</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {proyectos.map((p, i) => (
            <div key={i} className="flex flex-col bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="h-64 overflow-hidden relative">
                <img src={p.img} alt={p.titulo} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Proyecto Real</div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{p.titulo}</h3>
                <p className="text-cyan-500 font-bold text-xs mb-4 tracking-widest uppercase">{p.sub}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed min-h-[100px]">
                  {p.desc}
                </p>
                <div className="mt-auto border-t border-slate-200 dark:border-slate-700 pt-6 flex justify-between items-center">
                  <span className="text-gray-400 text-sm font-medium">{p.entrega}</span>
                  <a href="#contacto" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Ver Demo →</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contacto" className="inline-block bg-indigo-600 text-white font-black py-4 px-10 rounded-xl shadow-lg hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95">
            Pedir presupuesto sin compromiso
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;