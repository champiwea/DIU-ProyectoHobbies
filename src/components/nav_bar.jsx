// Navbar.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 
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
        <i className="fa fa-search"></i>
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

export default Navbar;
