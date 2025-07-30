// src/components/SearchBar.js
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      alert(`Buscando: ${query}`); // En el futuro: redirigir o filtrar contenido
    }
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-6 px-4 flex justify-center">
      <form
        onSubmit={handleSearch}
        className="w-full max-w-lg flex items-center border border-gray-300 dark:border-gray-700 rounded-full overflow-hidden shadow-md"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar contenido..."
          className="flex-1 px-5 py-3 text-gray-800 dark:text-white dark:bg-gray-900 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 flex items-center justify-center"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
