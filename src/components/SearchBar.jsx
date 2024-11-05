// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ onSearch }) => {
    const handleInputChange = (event) => {
    onSearch(event.target.value); // Llama a la función `onSearch` con el texto actual de entrada
    };

    return (
    <div className="search-bar">
        <input
        type="text"
        placeholder="Buscar por título o autor..."
        onChange={handleInputChange}
        className="search-bar__input"
        />
    </div>
    );
};

export default SearchBar;
