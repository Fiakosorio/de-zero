import React from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-500">de Zero</h1>
        <ul className="flex space-x-6 text-cyan-500 font-semibold">
          <li><a href="#home" className="hover:text-cyan-700 dark:hover:text-cyan-300">Inicio</a></li>
          <li><a href="#portfolio" className="hover:text-cyan-700 dark:hover:text-cyan-300">Portfolio</a></li>
          <li><a href="#blog" className="hover:text-cyan-700 dark:hover:text-cyan-300">Blog</a></li>
          <li><a href="#contact" className="hover:text-cyan-700 dark:hover:text-cyan-300">Contacto</a></li>
        </ul>
        <button
          onClick={toggleDarkMode}
          className="ml-4 px-3 py-1 text-white bg-cyan-500 dark:bg-yellow-400 dark:text-gray-900 rounded-full transition-all duration-300 hover:scale-105"
          title="Cambiar tema"
        >
          {darkMode ? '☀ Claro' : '🌙 Oscuro'}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

