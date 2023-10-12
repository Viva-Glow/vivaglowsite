
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoVivaBlanco from '../assets/logoVivaBlanco.png'

function NavBar() {
  return (
    <Navbar expand="lg" className=" bg-dark">
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
              <a href=""><img className='logoNavbar' src={logoVivaBlanco} alt="" /></a></Navbar.Brand>
       
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