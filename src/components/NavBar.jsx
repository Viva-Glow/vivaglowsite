
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoDorado from '../assets/LogoDorado.png';
import { useState } from 'react'





  function NavBar() {
    const [ color, setColor ]= useState ( false)
function changeColor() {
  

  if (window.scrollY >= 90) {

    setColor(true);
  }
  else {
    setColor(false);
  }
}
  window.addEventListener ( 'scroll', changeColor)

  return (
    <Navbar expand="lg" className= {color ? 'Navbar navbar-bg' : ' Navbar' }>
      <Container fluid>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  className='navlink' href="#action1">Tratamientos</Nav.Link>
            <Nav.Link  className='navlink' href="#action2">Cursos</Nav.Link>
            <Navbar.Brand className='Navbar-brand' href="#">
              <a href=""><img className='logoNavbar' src={LogoDorado} alt="" /></a></Navbar.Brand>
       
            <Nav.Link className='navlink' href="#" >
              Sobre nosotros
            </Nav.Link>
            <Nav.Link  className='navlink' href="#" >
              Contáctanos 
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
