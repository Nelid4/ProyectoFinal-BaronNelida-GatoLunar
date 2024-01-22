import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import './NavBar.css'

function NavBar() {
  return (
    <>
      <Navbar className='bg'>
        <Container>
          <Navbar.Brand href="#home"> <Logo/> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='textoNav'>Todos los libros</Nav.Link>
            <Nav.Link href="#features" className='textoNav'>Libros nuevos</Nav.Link>
            <Nav.Link href="#pricing" className='textoNav'>Libros usados</Nav.Link>
            <Nav.Link href="#pricing" className='paddingCarrito'> <CartWidget /> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
)}
export default NavBar;