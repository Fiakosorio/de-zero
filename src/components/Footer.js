// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Columna 1: de Zero */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-cyan-400">De Zero</h4>
          <ul>
            <li className="mb-2">
              <Link to="/#hero" className="hover:text-cyan-400 transition-colors">
                Inicio
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/#servicios" className="hover:text-cyan-400 transition-colors">
                Servicios
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/#contacto" className="hover:text-cyan-400 transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Columna 2: Recursos de Negocio */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-cyan-400">Recursos</h4>
          <ul>
            <li className="mb-2">
              <Link to="/blog/modelos-sitios" className="hover:text-cyan-400 transition-colors">
                Modelos y Precios
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/blog/cotizar-servicios" className="hover:text-cyan-400 transition-colors">
                Metodología
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/blog" className="hover:text-cyan-400 transition-colors">
                Blog y Guías
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Columna 3: Conectate */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-cyan-400">Conectate</h4>
          <ul>
            {/* ENLACES A TUS REDES SOCIALES O LINKEDIN DE NEGOCIO */}
            <li className="mb-2">
              <a href="https://www.linkedin.com/in/fiakosorio/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                LinkedIn
              </a>
            </li>
            {/* ESTOS YA NO SON ENLACES PERSONALES, SON PARA QUE CONTACTEN AL NEGOCIO */}
            <li className="mb-2">
              <a href="mailto:tu-correo@ejemplo.com" className="hover:text-cyan-400 transition-colors">
                Email
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 4: Legal y Sostenibilidad */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-cyan-400">Sostenibilidad</h4>
          <ul>
             <li className="mb-2">
              <Link to="/blog/paga-si-te-gusta" className="hover:text-cyan-400 transition-colors">
                Aportá al Proyecto
              </Link>
            </li>
            <li className="mb-2">
              <a href="/politicas-privacidad" className="hover:text-cyan-400 transition-colors">
                Política de Privacidad
              </a>
            </li>
            <li className="mb-2">
              <a href="/terminos-servicio" className="hover:text-cyan-400 transition-colors">
                Términos y Condiciones
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        &copy; {currentYear} de Zero. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
