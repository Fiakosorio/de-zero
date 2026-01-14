import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Servicios from "../components/Servicios";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

const MainLayout = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 relative transition-colors duration-500 min-h-screen">
        
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        {/* SECCIONES CON ID PARA LOS ENLACES */}
        <section id="inicio"><Hero /></section>
        <TechStack />
        <section id="servicios"><Servicios /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="blog"><Blog /></section>
        <section id="contacto"><Contacto /></section>
        
        <Footer />

        {/* WhatsApp Flotante (SVG PURO) */}
        <a href="https://wa.me/5491163721805" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 left-6 z-50 hover:scale-110 transition-transform duration-300">
          <div className="bg-[#25D366] p-4 rounded-full shadow-2xl flex items-center justify-center">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.001 12.045c0 2.12.554 4.189 1.602 6.01L0 24l6.135-1.61a11.81 11.81 0 005.91 1.586h.005c6.634 0 12.045-5.411 12.048-12.045.003-3.216-1.252-6.242-3.536-8.527"/></svg>
          </div>
        </a>

        {/* Scroll Up (SVG PURO) */}
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
          className="fixed bottom-6 right-6 z-50 bg-gray-800/80 p-4 rounded-full text-white backdrop-blur-md hover:bg-cyan-500 transition-all shadow-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
      </main>
    </div>
  );
};

export default MainLayout;