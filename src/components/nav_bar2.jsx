// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Flecha hacia la izquierda */}
      <button className="back-arrow" onClick={() => window.history.back()}>
        &#8592;
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
          <Link to="/">Mis lecturas</Link>
          <Link to="/">Contacto</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
