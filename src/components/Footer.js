// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 font-sans border-t border-gray-800">
      <div className="container mx-auto px-6">
        
        {/* Grilla Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Marca */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-white tracking-tighter">
              de <span className="text-cyan-400">Zero</span>.
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Transformamos tu idea en un negocio digital rentable. Tecnología simple para resultados reales.
            </p>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/servicios" className="hover:text-cyan-400 transition">Diseño Web</Link></li>
              <li><Link to="/servicios" className="hover:text-cyan-400 transition">Automatización (n8n)</Link></li>
              <li><Link to="/servicios" className="hover:text-cyan-400 transition">E-commerce</Link></li>
            </ul>
          </div>

          {/* Columna 3: Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="hover:text-cyan-400 transition">Políticas de Privacidad</Link></li>
              <li><Link to="#" className="hover:text-cyan-400 transition">Términos y Condiciones</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Buenos Aires, Argentina</li>
              <li className="text-cyan-400 font-medium">hola@dezero.com.ar</li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria inferior */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="text-sm text-gray-500 text-center md:text-left">
            <p>&copy; {currentYear} De Zero. Todos los derechos reservados.</p>
          </div>
          
          {/* REDES SOCIALES (SVG INLINE - INDESTRUCTIBLES) */}
          <div className="flex space-x-6 items-center">
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group transition-transform hover:-translate-y-1 duration-300"
              aria-label="LinkedIn"
            >
              {/* SVG DIBUJADO A MANO - Color original: #0077b5 */}
              <svg 
                className="h-6 w-6 fill-current text-white group-hover:text-[#0077b5] transition-colors duration-300" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group transition-transform hover:-translate-y-1 duration-300"
              aria-label="Instagram"
            >
              {/* SVG DIBUJADO A MANO - Color original: #E4405F */}
              <svg 
                className="h-6 w-6 fill-current text-white group-hover:text-[#E4405F] transition-colors duration-300" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
