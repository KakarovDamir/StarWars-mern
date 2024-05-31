import React from 'react';
import { Link } from 'react-router-dom';
import nb from './NavBar.module.css';
import logo from '../../../assets/images/logo.png'


const NavBar = () => {
  return (
    <header className={nb.main_header}>
        <img src={logo} alt="" />
        <nav>
        <ul className={nb.navigation_list}>
            <li><Link to="/" className={nb.nav_link}>Home</Link></li>
            <li><Link to="/films" className={nb.nav_link}>Films</Link></li>
            <li><Link to="/characters" className={nb.nav_link}>Characters</Link></li>
            <li><Link to="/planets" className={nb.nav_link}>Planets</Link></li>
            <li><Link to="/species" className={nb.nav_link}>Species</Link></li>
            <li><Link to="/starships" className={nb.nav_link}>Starships</Link></li>
            <li><Link to="/vehicles" className={nb.nav_link}>Vehicles</Link></li>
        </ul>
        </nav>
    </header>
  );
};

export default NavBar;