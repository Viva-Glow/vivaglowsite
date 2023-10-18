import Container from 'react-bootstrap/Container';
import '../css/navbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SectionClinic} from './SectionClinic'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'





import { useState } from 'react';





  function NavBar() {
    const [ color, setColor ]= useState( false)
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

    


    <Navbar expand="lg" className= {color ? 'Navbar Navbar-bg': 'Navbar'}>
   
 

      <Container fluid>
    
      <Navbar.Brand className='Navbar-brand2 d-lg-none '  href="/">
              <a href=""><img className='logoNavbar' src="https://trello.com/1/cards/6526de440f26969756dd32b7/attachments/65292296fac4b5aac1385218/previews/65292297fac4b5aac1385470/download/Viva_Glow.png" alt="" /></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link  className='navlink' href="#Clinic">Tratamientos</Nav.Link>
            <Nav.Link  className='navlink' href="#Courses">Cursos</Nav.Link>
            <Navbar.Brand className='Navbar-brand d-none d-lg-block'  href="#">
              <a href=""><img className='logoNavbar' src="https://trello.com/1/cards/6526de440f26969756dd32b7/attachments/65292296fac4b5aac1385218/previews/65292297fac4b5aac1385470/download/Viva_Glow.png" alt="" /></a></Navbar.Brand>
       
            <Nav.Link className='navlink' href="#About" >
             Nosotros
          
            </Nav.Link>
            <Nav.Link  className='navlink' href="#Contact" >
              Contáctanos 
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    
    </Navbar>
    
   
  );
}

export default NavBar;