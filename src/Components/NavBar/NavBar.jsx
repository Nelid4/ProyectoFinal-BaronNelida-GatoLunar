// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import CartWidget from '../CartWidget/CartWidget';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Logo from '../Logo/Logo';
// import './NavBar.css'

// function NavBar() {
//   return (
//     <>
// {/* Barra de menú */}
//       <Navbar className='bg'>
//         <Container>
//           <Navbar.Brand href="#Home-gatuna"> <Logo/> </Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#Todos-los-libros" className='textoNav'>Todos los libros</Nav.Link>
//             <Nav.Link href="#Libros-nuevos" className='textoNav'>Libros nuevos</Nav.Link>
//             <Nav.Link href="#Libros-Usados" className='textoNav'>Libros usados</Nav.Link>

            
// {/* Botón con listado de categorías clickeables*/}
//             <Nav.Link><Dropdown>
//         <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Géneros Literarios
    //       </Dropdown.Toggle>
    
    //       <Dropdown.Menu>
    //         <Dropdown.Item href="#Romance">Romance</Dropdown.Item>
    //         <Dropdown.Item href="#Thriller">Thriller</Dropdown.Item>
    //         <Dropdown.Item href="#Biografias">Biografias</Dropdown.Item>
    //         <Dropdown.Item href="#Fantasia">Fantasia</Dropdown.Item>
    // {/* Botón de carrito, CartWidget */}
    //       </Dropdown.Menu>
    //     </Dropdown></Nav.Link>
    
    // {/* Botón de carrito, CartWidget */}
    //             <Nav.Link href="#carrito" className='paddingCarrito'> <CartWidget /> </Nav.Link>
    //           </Nav>
    //         </Container>
    //       </Navbar>
    //     </>
    // )}
    // export default NavBar;
    
    
    
    
    
    import React from 'react'
    import { Link, NavLink } from "react-router-dom";
    import CartWidget from '../CartWidget/CartWidget'
    import { BotonDropdown } from '../Botones/BotonDropdown';
    import './NavBar.css';
    
    export default function Navbar() {
      return (
        <header>
      <Link to="/">
        <img src='https://i.pinimg.com/736x/4f/f6/b4/4ff6b454783d2a4570d995195cbe00ed.jpg' />
      </Link>
      <nav>
        <NavLink to="/condition/nuevo" className="botonLibro">Libros Nuevos</NavLink>
        <NavLink to="/condition/usado" className="botonLibro">Libros Usados</NavLink>
{/* Botón con listado de categorías clickeables*/}
        <NavLink><BotonDropdown /></NavLink>
{/* Botón de carrito, CartWidget */}
        <NavLink to="#" className="carrito"><CartWidget /></NavLink>

      </nav>
    </header>
  );
}