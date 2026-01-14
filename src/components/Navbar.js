import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Cierra el menú al clickear
  };

  return (
    <nav className="absolute w-full z-50 bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" onClick={scrollToTop} className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter hover:scale-105 transition-transform">
          de <span className="text-cyan-500">Zero</span>
        </Link>

        {/* MENÚ DESKTOP (Se oculta en mobile) */}
        <div className="hidden md:flex items-center space-x-6 bg-slate-100 dark:bg-slate-800 px-8 py-2 rounded-full border border-gray-200 dark:border-gray-700">
          <Link to="/" onClick={scrollToTop} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors">Inicio</Link>
          <a href="/#servicios" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors">Servicios</a>
          <a href="/#portfolio" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors">Portfolio</a>
          <a href="/#blog" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors">Blog</a>
          <a href="/#contacto" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors">Contacto</a>
        </div>

        <div className="flex items-center space-x-3">
          {/* BOTÓN MODO OSCURO */}
          <button onClick={toggleDarkMode} className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300">
            {darkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            )}
          </button>

          {/* BOTÓN HAMBURGUESA (Solo se ve en mobile) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>

          <a href="/#contacto" className="hidden lg:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg">
            Presupuesto
          </a>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-8 space-y-4 animate-in slide-in-from-top duration-300">
          <Link to="/" onClick={scrollToTop} className="block text-lg font-bold text-gray-900 dark:text-white">Inicio</Link>
          <a href="/#servicios" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-gray-900 dark:text-white">Servicios</a>
          <a href="/#portfolio" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-gray-900 dark:text-white">Portfolio</a>
          <a href="/#blog" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-gray-900 dark:text-white">Blog</a>
          <a href="/#contacto" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-gray-900 dark:text-white">Contacto</a>
          <a href="/#contacto" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg">Solicitar Presupuesto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;