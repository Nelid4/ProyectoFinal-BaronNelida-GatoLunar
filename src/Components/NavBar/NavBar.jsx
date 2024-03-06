import React from 'react'
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget'
import { BotonDropdown } from '../Botones/BotonDropdown';
import './NavBar.css';
    
    export default function Navbar() {
      return (
        <header>
      <Link to="/">
        <img className='imgNav' src='https://i.pinimg.com/736x/4f/f6/b4/4ff6b454783d2a4570d995195cbe00ed.jpg' />
      </Link>
      <nav>
        <NavLink to="/condition/nuevo" className="botonLibro">Libros Nuevos</NavLink>
        <NavLink to="/condition/usado" className="botonLibro">Libros Usados</NavLink>
{/* Botón con listado de categorías clickeables*/}
        <NavLink><BotonDropdown /></NavLink>
{/* Botón de carrito, CartWidget */}
        <NavLink to="/Cart" className="carrito"><CartWidget /></NavLink>

      </nav>
    </header>
  );
}