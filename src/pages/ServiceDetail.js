import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// BASE DE DATOS
const servicesData = {
  "pack-despegue": {
    title: "Pack Despegue 🚀",
    subtitle: "Tu primera presencia digital profesional.",
    price: "Consultar",
    description: "Ideal para emprendedores que necesitan validar su idea. No es solo una web, es tu tarjeta de presentación al mundo las 24hs. Incluye Hosting, Dominio y Correos.",
    features: ["Landing Page Única", "Dominio .com.ar incluido", "Hosting Alta Velocidad", "Correos Corporativos", "Botón WhatsApp", "Diseño Responsive"],
    idealFor: "Abogados, Contadores, Oficios.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
  },
  "catalogo-whatsapp": {
    title: "Catálogo WhatsApp 📱",
    subtitle: "Tu e-commerce simplificado.",
    price: "Consultar",
    description: "Vendé sin comisiones. Tus clientes ven tus productos y te piden directo al WhatsApp con el total calculado.",
    features: ["Carga de 50 productos", "Buscador y Filtros", "Carrito de Compras (Pedido WhatsApp)", "Panel Autoadministrable", "Sin Comisiones"],
    idealFor: "Ropa, Comida, Ferreterías.",
    // IMAGEN NUEVA QUE NO FALLA:
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=1000"
  },
  "turnos-clases": {
    title: "Turnos & Clases 📅",
    subtitle: "Tu agenda se organiza sola.",
    price: "Consultar",
    description: "Sistema de reservas automático. Tus clientes eligen el horario disponible, pagan la seña y les llega el recordatorio. Vos solo te ocupás de atender.",
    features: ["Calendario Interactivo", "Gestión de Horarios y Bloqueos", "Pago de Señas (MercadoPago)", "Recordatorios por Email", "Panel de Administración"],
    idealFor: "Consultorios, Canchas, Peluquerías, Profesores.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=2338"
  },
  "web-app-automatizacion": {
    title: "Web App & Automatización 🤖",
    subtitle: "Potencia pura para tu negocio.",
    price: "A medida",
    description: "Desarrollo a medida con integraciones avanzadas. Conectamos tu web con Make, n8n, OpenAI o lo que necesites para automatizar facturas, emails y datos.",
    features: ["Desarrollo React a Medida", "Integración API (Make/n8n)", "Base de Datos", "Paneles de Control Complejos", "Inteligencia Artificial"],
    idealFor: "Startups, Empresas Medianas, Proyectos SaaS.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2340"
  }
};

const ServiceDetail = ({ darkMode, toggleDarkMode }) => {
  const { slug } = useParams();
  const service = servicesData[slug];

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!service) return <div className="text-center py-20 text-2xl font-bold">Servicio no encontrado 😢</div>;

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <Link to="/" className="text-cyan-600 font-bold hover:underline mb-8 inline-block">← Volver al inicio</Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={service.image} alt={service.title} className="w-full h-auto object-cover" />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{service.title}</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">{service.subtitle}</p>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-8 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold mb-4 text-lg">Incluye:</h3>
              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="text-green-500 mr-2">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{service.description}</p>

            <Link 
              to="/contact" 
              className="block w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 rounded-lg shadow-lg transform transition hover:-translate-y-1"
            >
              Solicitar Presupuesto
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
