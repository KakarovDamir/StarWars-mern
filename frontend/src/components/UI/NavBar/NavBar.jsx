import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import nb from './NavBar.module.css';
import logo from '../../../assets/images/logo.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={nb.main_header}>
      <img src={logo} alt="Logo" />
      <div className={`${nb.burger_menu} ${menuOpen ? nb.open : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav>
        <ul className={`${nb.navigation_list} ${menuOpen ? nb.show : ''}`}>
          <li><Link to="/" className={nb.nav_link} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/films" className={nb.nav_link} onClick={() => setMenuOpen(false)}>Films</Link></li>
          <li><Link to="/characters" className={nb.nav_link} onClick={() => setMenuOpen(false)}>Characters</Link></li>
          <li><Link to="/planets" className={nb.nav_link} onClick={() => setMenuOpen(false)}>Planets</Link></li>
          <li><Link to="/species" className={nb.nav_link} onClick={() => setMenuOpen(false)}>Species</Link></li>
          <li><Link to="/starships" className={nb.nav_link} onClick={() => setMenuOpen(false)}>Starships</Link></li>
          <li><Link to="/vehicles" className={nb.nav_link} onClick={() => setMenuOpen(false)}>Vehicles</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
