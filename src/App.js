import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Sections />

      {/* Botón scroll up */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-16 right-4 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg z-40"
        title="Volver arriba"
      >
        🔼
      </button>

      {/* Botón WhatsApp */}
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
  );
}

export default App;
