// src/components/Contacto.js
import React, { useState } from "react";

const Contacto = () => {
    // Estado para manejar el mensaje de feedback
    const [status, setStatus] = useState('');

    
    const FORMSPREE_ENDPOINT = "https://exigible-venita-bacterioscopically.ngrok-free.dev/webhook-test/dedcbc89-bb00-4bab-bd3e-c755240a713e"; 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');
        
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('¡Mensaje enviado con éxito! Te contactaremos pronto.');
                form.reset(); // Limpiar el formulario
            } else {
                setStatus('¡Ups! Hubo un error al enviar el mensaje. Por favor, intentá de nuevo.');
            }
        } catch (error) {
            console.error('Error de conexión:', error);
            setStatus('¡Ups! Error de conexión. Verificá tu internet.');
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-cyan-600 dark:text-cyan-400 mb-4">
                        ¿Hablamos de tu Proyecto?
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300">
                        Dejá de perder tiempo y empezá a vender. Tu consulta no molesta.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Tu Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="Nombre" // Nombre del campo para Formspree
                                    required
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-cyan-500 focus:border-cyan-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Tu Email (Clave para la respuesta)
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="Email" // Nombre del campo para Formspree
                                    required
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-cyan-500 focus:border-cyan-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Contanos tu Idea
                                </label>
                                <textarea
                                    id="message"
                                    name="Mensaje" // Nombre del campo para Formspree
                                    rows="4"
                                    required
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-cyan-500 focus:border-cyan-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                            >
                                Enviar Consulta a de Zero
                            </button>
                        </div>
                    </form>

                    {status && (
                        <p className={`mt-4 text-center font-semibold ${status.includes('éxito') ? 'text-green-500' : 'text-red-500'}`}>
                            {status}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contacto;

