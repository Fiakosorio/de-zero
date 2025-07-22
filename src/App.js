// src/App.js
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`font-sans ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <Hero />
        <Portfolio />
        <Blog />
        <Contacto />
        <Footer />

        {/* Botón flotante de WhatsApp */}
        <a
          href="https://wa.me/5491163721805?text=Hola!%20Quisiera%20más%20información%20sobre%20tus%20servicios%20web"
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
      </div>
    </div>
  );
}

export default App;
