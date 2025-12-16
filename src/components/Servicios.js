// src/components/Servicios.js
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Rocket, ShoppingBag, CalendarCheck, Smartphone } from "lucide-react";

const servicios = [
  {
    icon: <Rocket className="w-10 h-10 text-cyan-500" />,
    title: "Pack Despegue (Landing Page)",
    desc: "Ideal para profesionales y oficios. Una página única, impactante y directa. Mostrá quién sos, qué hacés y dejá que te contacten con un clic.",
    ideal: "Abogados, Electricistas, Contadores.",
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-cyan-500" />,
    title: "Catálogo con Pedidos WhatsApp",
    desc: "Tu tienda online sin complicaciones. Tus clientes ven tus productos y te mandan el pedido listo por WhatsApp. Sin comisiones por venta.",
    ideal: "Panaderías, Ropa, Gastronomía.",
  },
  {
    icon: <CalendarCheck className="w-10 h-10 text-cyan-500" />,
    title: "Web de Turnos & Clases",
    desc: "Olvidate de agendar por chat. Un sistema donde tus clientes ven tus horarios libres y reservan solos. Vos solo te dedicás a trabajar.",
    ideal: "Gimnasios, Peluquerías, Consultorios.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-cyan-500" />,
    title: "Web App & Automatización",
    desc: "¿Tenés una idea loca? Usamos IA y herramientas modernas para crear soluciones a medida o automatizar respuestas de tus clientes.",
    ideal: "Startups, Proyectos Innovadores.",
  },
];

const Servicios = () => {
  return (
    <section
      id="servicios"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Soluciones Reales para <span className="text-cyan-500">Negocios Reales</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            No te vendemos código complicado. Te armamos la herramienta exacta que
            tu negocio necesita para vender más hoy mismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="bg-cyan-50 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-100 dark:group-hover:bg-gray-600 transition-colors">
                {servicio.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                {servicio.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {servicio.desc}
              </p>
              
              <div className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-6">
                ✨ Ideal para: {servicio.ideal}
              </div>

              <ScrollLink
                to="contact"
                smooth={true}
                duration={600}
                offset={-70}
                className="inline-block text-gray-900 dark:text-white font-semibold border-b-2 border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer pb-1"
              >
                Consultar por este pack &rarr;
              </ScrollLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;