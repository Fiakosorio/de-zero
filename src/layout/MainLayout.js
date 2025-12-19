// src/layout/MainLayout.js
import React, { useState, useEffect } from "react";
// Imports
import TechStack from '../components/TechStack';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Portfolio from "../components/Portfolio"; 
import Blog from "../components/Blog";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

const MainLayout = ({ darkMode, toggleDarkMode }) => {
  // Estado para controlar si mostramos el botón de "Ir Arriba"
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Efecto para detectar el scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  // Función para volver arriba suavemente
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen relative"> 
      
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="flex-grow">
        <Hero />
        <TechStack />
        <Servicios />
        <Portfolio /> 
        <Blog />
        <Contacto />
      </main>

      <Footer />

      {/* --- BOTONES FLOTANTES --- */}

      {/* 1. Botón de WhatsApp (Izquierda) */}
      <a
        href="https://wa.me/5491163721805?text=Hola%20Juanma!%20Vengo%20de%20la%20web..."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] p-3 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        title="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      {/* 2. Botón "Volver Arriba" (Derecha) - Solo aparece al scrollear */}
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="fixed bottom-6 right-6 z-50 bg-cyan-600 text-white p-3 rounded-full shadow-xl hover:bg-cyan-700 transition-all duration-300 animate-fadeIn"
          title="Ir Arriba"
        >
          {/* Flecha hacia arriba SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

    </div>
  );
};

export default MainLayout;