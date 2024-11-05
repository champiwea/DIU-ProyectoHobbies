// Navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/buscar');
  };

  return (
    <nav className="navbar2">
      {/* Lupa */}
      <button className="lupa" onClick={handleClick}>
        
      </button>

      {/* Menú hamburguesa */}
      <button className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </button>

      {/* Menú desplegable */}
      {menuOpen && (
        <div className="dropdown-menu">
          <button className="close-icon" onClick={toggleMenu}>
            &times;
          </button>
          <a href="/">Inicio</a>
          <a href="/coverbook">Acerca de</a>
          <a href="/contact">Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
