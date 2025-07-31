// src/components/WhatsAppBot.js
import React from "react";

const WhatsAppBot = () => {
  return (
    <a
      href="https://wa.me/5491163721805?text=Hola!%20Estoy%20interesado%20en%20crear%20una%20p%C3%A1gina%20web%20con%20de%20Zero.%20Quisiera%20saber%20m%C3%A1s%20sobre%20los%20modelos%20de%20sitio%20web%2C%20cotizaciones%20y%20c%C3%B3mo%20funciona%20tu%20sistema%20%F0%9F%A4%93"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-4 z-50 bg-[#25D366] w-16 h-16 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
      title="Escribime por WhatsApp"
    >
      <img
        src={process.env.PUBLIC_URL + "/whatsapp-icon.png"}
        alt="WhatsApp"
        className="w-9 h-9"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";
        }}
      />
    </a>
  );
};

export default WhatsAppBot;
