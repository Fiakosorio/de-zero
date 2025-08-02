// src/layout/MainLayout.js
import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

const MainLayout = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <SearchBar />
      <Hero />
      <Servicios />
      <Portfolio />
      <Blog />
      <Contacto />
      <Footer />

      {/* Botón WhatsApp solo en página principal */}
      <a
        href="https://wa.me/5491163721805?text=Hola!%20Estoy%20interesado..."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-4 z-50 bg-[#25D366] w-16 h-16 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
        title="Escribime por WhatsApp"
      >
        <img
          src="/whatsapp-icon.png"
          alt="WhatsApp"
          className="w-9 h-9"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";
          }}
        />
      </a>
    </>
  );
};

export default MainLayout;

